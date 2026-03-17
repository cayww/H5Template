<script setup lang="ts">
  import MasonryIcon from '@/assets/public/masonry-icon.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'ChatView'
  })

  const { chatBtnIcon, chatBgImage } = useAppImgStyle()
  const { winUserData, winUserListData, winChatBotDesc } = useWindow()
  const { userInfo } = useUserStore()
  const { jumpToRecharge, appParams, jumpToChatDetail } = useJump()

  /** 弹框  */
  const show = ref(false)

  const onSubmit = () => {
    show.value = !(userInfo.coins >= winChatBotDesc.points)
    if (userInfo.coins >= winChatBotDesc.points) {
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
  }
</script>

<template>
  <div relative class="chat-view_box">
    <!-- Fashion AI -->
    <div class="fashion-ai-bar top-12vh">
      <div class="fashion-ai-content">
        <div class="fashion-ai-text">
          <div class="title">Fashion AI</div>
          <div class="desc">
            Based on your needs, I'll<br />
            provide you with the most<br />
            suitable outfit!
          </div>
        </div>
      </div>

      <!-- 右下角人物 -->
      <img
        src="/background/leepy_main_ai_rw.png"
        class="fashion-ai-rw"
      />
    </div>
    <div class="text-center w-full top-25vh absolute">
      <ul p-layout-padding>
        <li
          ai-text-desc
          class="mt-7 !text-[var(--ai-chat-view-text-color)] content_box"
        >
          {{ winChatBotDesc.content }}
        </li>
        <li flex justify-center class="public-btoom-btn">
          <p
            ai-gradient-btn
            class="bottom-btn public_btn"
            @click="onSubmit"
          >
            <van-image h-8 w-8 :src="MasonryIcon" fit="cover" />
            <span text-5 font-700 ml-1 style="color:white">
              X {{ winChatBotDesc.points }}
            </span>
            <span text-4 font-400 ml-8 mr-1 style="color:white">Chat</span>
            <van-image
              :src="chatBtnIcon"
              fit="cover"
              :style="{
                width: 'var(--ai-btn-arr-image-width)',
                height: 'var(--ai-btn-arr-image-height)'
              }"
            />
          </p>
        </li>
      </ul>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div flex h-full justify-center>
        <div class="block" @click.stop>
          <div
            :style="{ background: `${chatBgImage}` }"
            class="content"
            style="background-size: cover"
          >
            <span mt-18>Sorry</span>
            <span mt-3>your current balance is insufficient</span>
            <div mt-8 flex justify-center>
              <p ai-gradient-btn @click="jumpToRecharge()">Recharge</p>
            </div>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<style lang="less" scoped>
  .chat-view_box {
    background: url('/background/default_bg.png') no-repeat top center / cover;
    height: 100vh;
    overflow-y: auto;
    .content_box {
      padding: 10px;
      background: rgb(255, 255, 255);
      border: 1px solid rgb(51, 51, 51);
      border-radius: 20px;
      text-align: center;
      font-size: 18px;
      margin: 0 10px;
    }
  }

  .bottom-btn {
    width: var(--ai-chat-view-btn-width);
    height: var(--ai-chat-view-btn-height);
    color: var(--ai-chat-view-text-color);
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
  .fashion-ai-bar {
    height: 95px;
    padding: 0 13px;
    position: relative;
    margin: 20px 20px;

    background-image: url('/background/leepy_main_ai_bar.png');
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
  }

  .fashion-ai-content {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .fashion-ai-text {
    display: flex;
    flex-direction: column;
  }

  .title {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

  .desc {
    color: #fff;
    font-size: 12px;
    margin-top: 4px;
    line-height: 1.4;
  }

  .forward-icon {
    width: 24px;
    height: 24px;
    margin-left: auto;
  }

  .fashion-ai-rw {
    position: absolute;
    bottom: 0;
    right: 30px;
    width: 87px;
    height: 125px;
  }
</style>
