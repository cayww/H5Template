import { useUserStore } from '@/stores'
import { useWindow } from './useWindow'

export type AppCommunication =
  | 'updateComment'
  | 'updateUser'
  | 'updatePost'
  | 'logout'
  | 'deleteaccount'
  | 'uploadMessage'
  | 'uploadChat'
  | 'Recharge'
  | 'close'

export const useJump = () => {
  const { userInfo } = useUserStore()
  const router = useRouter()
  const route = useRoute()
  const queryId = computed(() => (route?.query?.id as string) || '2')

  /** 统一调用 iOS WKWebView */
  const callHandler = (key?: AppCommunication, value?: any) => {
    try {
      if (!key) return
      const handler = (window as any).webkit?.messageHandlers?.[key]

      if (handler) {
        const safeValue =
          value !== undefined ? JSON.parse(JSON.stringify(value)) : value

        handler.postMessage(safeValue)
      } else {
        console.warn(`iOS handler ${key} not found!`)
      }
    } catch (e) {
      console.warn(`Handler ${key} 调用失败`, e)
    }
  }

  /** 返回逻辑 */
  const onBack = async () => {
    if (route.query?.name === 'otherHome') {
      router.replace({
        path: '/other-home',
        query: { id: route.query?.cid }
      })
      return
    }

    if (route.query?.url) {
      router.replace(
        route.query?.cid
          ? {
              path: route.query.url as string,
              query: { id: route.query?.cid }
            }
          : (route.query.url as string)
      )
      return
    }

    if (['ReportIndex'].includes(route.name)) {
      history.back()
    } else {
      callHandler('close')
      if (window.history.state.back) {
        history.back()
      } else {
        router.replace('/')
      }
    }
  }

  const jump = (path: string, query?: Record<string, any>) =>
    router.replace({ path, query })

  const jumpToRecharge = () => jump('/gold-coin', { url: 'chat-view' })
  const jumpToPrivateChat = (id: string, cid: string) =>
    jump('/private-chat', {
      id,
      cid,
      name: 'otherHome',
      url: 'other-home'
    })
  const jumpToChatDetail = () =>
    jump('/chat-details', { url: 'chat-view' })
  const jumpToBlackList = () =>
    jump('/black-list', { id: userInfo.userId, url: 'setup-page' })
  const jumpToUserAgreement = (path: string) =>
    jump(path, { url: 'setup-page' })
  const jumpToDetail = (id: string, type: 0 | 1, cid: string) =>
    jump(type ? '/short-video' : '/article-detail', {
      id,
      cid,
      url: 'other-home'
    })
  const jumpToFans = (id: string, type: 0 | 1) =>
    jump(type ? '/follow' : '/fans', { id, url: 'other-home' })
  const jumpToCall = (id: string, cid: string) =>
    jump('/call-index', { id, cid, url: 'private-chat' })

  /** App 参数通信 */
  const appParams = ({
    key,
    value,
    state = 1
  }: {
    key?: AppCommunication
    value?: any
    state?: 0 | 1 | 2
  }) => {
    if (state === 0) {
      callHandler(key, value)
      onBack()
    } else if (state === 1) {
      callHandler(key, value)
    } else if (state === 2) {
      callHandler(key)
    }
  }

  /** 充值回调绑定 */
  const bindRechargeSuccess = () => {
    if ((window as any).__recharge_bound__) {
      return
    }
    ;(window as any).__recharge_bound__ = true
    ;(window as any).onRechargeSuccess = (coins: number) => {
      const userStore = useUserStore()
      const win = useWindow()

      userStore.userInfo.coins += coins

      win.winUserListData.forEach(v => {
        if (v.userId === userStore.userInfo.userId) {
          v.coins = userStore.userInfo.coins
        }
      })

      callHandler('updateUser', win.winUserListData)
    }
  }

  bindRechargeSuccess()

  return {
    onBack,
    jumpToRecharge,
    appParams,
    jumpToBlackList,
    jumpToUserAgreement,
    jumpToDetail,
    jumpToFans,
    jumpToCall,
    jumpToChatDetail,
    jumpToPrivateChat,
    queryId
  }
}
