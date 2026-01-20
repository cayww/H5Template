<script setup lang="ts">
  import ChatBack from '@/assets/public/chat-index.png'
  import MasonryIcon from '@/assets/public/masonry-icon.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'ChatView'
  })

  const { chatBgImage } = useAppImgStyle()
  const { winUserData, winUserListData, winChatBotDesc } = useWindow()
  const { userInfo } = useUserStore()
  const { jumpToRecharge, appParams, jumpToChatDetail } = useJump()

  /** 弹框  */
  const show = ref(false)

  const onSubmit = () => {
    show.value = false
    const data = {
        ...winUserData,
        coins: userInfo.coins - winChatBotDesc.points
      }

      const list = winUserListData.map(v => {
        if (v.userId === data.userId) {
          v.coins = data.coins
        }
        return v
      })
    appParams({ key: 'updateUser', value: list, state: 1 })
    jumpToChatDetail()
  }
</script>

<template>
  <div relative class="chat-view_box">
    <van-image :src="ChatBack" fit="cover" class="top-back" />
    <div class="text-start w-full top-14vh absolute">
      <ul p-layout-padding>
        <li ai-input-title>{{ winChatBotDesc.title }}</li>
        <li
          ai-text-desc
          class="mt-7 !text-[var(--ai-chat-view-text-color)] content_box"
        >
          {{ winChatBotDesc.content }}
        </li>
        <li flex justify-center class="public-btoom-btn">
          <p
            primary-gradient-btn
            class="bottom-btn public_btn"
            @click="onSubmit"
          >
            <span text-6 font-700>Chat</span>
          </p>
        </li>
      </ul>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div flex h-full justify-center>
        <div class="block" @click.stop>
          <div
            :style="{ background: `url(${chatBgImage})` }"
            class="content"
            style="background-size: cover"
          >
            <van-image h-22 w-22 :src="MasonryIcon" fit="cover" />
            <span style="font-size: 20px">Sorry</span>
            <span style="font-size: 16px" mt-1>your current balance is insufficient</span>
          </div>
          <div mt-8 flex justify-center>
            <p primary-gradient-btn @click="jumpToRecharge()">Recharge</p>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<style lang="less" scoped>
  .chat-view_box {
    background: var(--ai-chat-view-bg-color);
    height: 100vh;
    overflow-y: none;
    .content_box {
      width:70%;
      font-size: 18px;
      padding-bottom: calc(189px + var(--ai-view-padding-bottom));
    }
  }

  .top-back {
    width: 100%;
    height: 510px;
  }

  .bottom-btn {
    width: var(--ai-chat-view-btn-width);
    height: var(--ai-chat-view-btn-height);
    color: var(--ai-chat-view-btn-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .block {
    margin-top: 20vh;
    height: 300px;

    .content {
      width: var(--ai-chat-view-popup-bg-img-width);
      height: var(--ai-chat-view-popup-bg-img-height);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: var(--ai-chat-view-popup-title-text-color);
        font-size: var(--ai-chat-view-popup-title-font-size);
        font-weight: var(--ai-chat-view-popup-title-font-weight);

        &:nth-child(2) {
          color: var(--ai-chat-view-popup-desc-text-color);
          font-size: var(--ai-chat-view-popup-desc-text-size);
          font-weight: var(--ai-chat-view-popup-desc-text-weight);
        }
      }
    }
  }
</style>
