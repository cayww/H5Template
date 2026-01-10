<script setup lang="ts">
  import HangIcon from '@/assets/public/hang-icon.png'
  import Head from '@/assets/public/Head.png'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'

  defineOptions({
    name: 'CallIndex'
  })

  const router = useRouter()
  const route = useRoute()
  const { queryId } = useJump()
  const { winUserListData } = useWindow()
  const userData = ref<UserInfo>(null)
  const loading = ref(true)
  const getData = () => {
    userData.value = winUserListData.find(v => v.userId === queryId.value)
    loading.value = false
  }

  const onBack = () => {
    router.replace({
      path: `/private-chat`,
      query: { id: route.query.cid as string }
    })
  }

  onMounted(() => {
    getData()
  })
</script>

<template>
  <h1 style="color:white">sdasdad</h1>
  <div class="call-box">
    <div v-if="!loading" flex flex-col justify-center items-center>
      <div flex flex-col justify-center items-center>
        <van-image
          round
          ai-avatar
          :src="userData.avator || Head"
          fit="cover"
          class="mt-[14vh] !h-20 !w-20"
        />
        <span ai-user-name my-4 style="color:white">{{ userData.name }}</span>
        <span ai-text-desc style="color:white">Calling...</span>
      </div>
      <p
        style="background:rgba(255, 87, 51, 1)"
        class="mt-[26vh] !rounded-full !flex !justify-center !items-center !h-16 !w-16"
        @click="onBack"
      >
        <van-image round :src="HangIcon" fit="cover" />
      </p>
    </div>s
  </div>
</template>

<style lang="less" scoped>
  .call-box {
    width: 100%;
    height: 100vh;
    background: var(--ai-private-chat-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // 导入背景图
    background-size: cover;
  }
</style>
