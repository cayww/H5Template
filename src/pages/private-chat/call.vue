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
  <div class="call-box" :style="{
    background: `url(${userData?.avatar || ''}) no-repeat top`,
    objectFit: 'cover',
    backgroundSize: 'cover'
  }"
  >
    <div v-if="!loading" flex flex-col justify-center items-center>
      <div flex flex-col justify-center items-center>
        <van-image
          round
          ai-avatar
          style="border: 2px solid rgb(51, 51, 51);"
          :src="userData.avatar || Head"
          fit="cover"
          class="mt-[14vh] !h-25 !w-25"
        />
        <span ai-user-name my-4>{{ userData.name }}</span>
        <span ai-text-desc>Calling...</span>
      </div>
      <p
        ai-gradient-btn
        class="mt-[26vh] !rounded-full !flex !justify-center !items-center !h-16 !w-16"
        @click="onBack"
      >
        <van-image :src="HangIcon" fit="cover" />
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .call-box {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    object-fit: cover;
  }
</style>
