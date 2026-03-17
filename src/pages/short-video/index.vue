<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useDetail } from '@/hooks/useDetail'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'ShortVideo'
  })

  const { addIcon, messageIcon, likeIcon, unLikeIcon } =
    useAppImgStyle()
  const { userInfo } = useUserStore()
  const {
    loding,
    dynamicInfo,
    commentList,
    isVideoLike,
    isFollow,
    onAvator,
    onFollow,
    onSend,
    onVideoLike
  } = useDetail()

  const videoRef = ref(null)
  const isPlaying = ref(false)
  const isPopup = ref(false)
  // 举报弹框
  const isReport = ref(false)

  const togglePlay = async () => {
    if (!videoRef.value) return

    if (isPlaying.value) {
      videoRef.value.pause()

      // videoRef.value.play().catch((err) => {
      //   console.error('播放失败:', err)
      // })

      isPlaying.value = false
    } else {
      try {
        await videoRef.value.play()
        isPlaying.value = true
      } catch (error) {
        console.warn('自动播放被阻止:', error)
      }
    }
  }
</script>

<template>
  <div v-if="!loding" class="video-box">
    <video
      ref="videoRef"
      :src="dynamicInfo?.dynamicVideo"
      :poster="dynamicInfo?.dynamicPic[0]"
      webkit-playsinline
      playsinline
      x5-playsinline
      width="100%"
      height="100%"
      @click="togglePlay"
    />
    <van-icon
      v-if="!isPlaying"
      :name="isPlaying ? 'pause-circle' : 'play-circle'"
      class="play-box"
      @click="togglePlay"
    />
    <div p-layout-padding class="bottom-box">
      <ul class="bottom-btn">
        <li>
          <van-image
            :src="isVideoLike ? likeIcon : unLikeIcon"
            :style="{
              width: 'var(--unlike-image-width)',
              height: 'var(--unlike-image-height)'
            }"
            @click="onVideoLike"
          />
          <span class="public-number">
            {{ dynamicInfo?.dynamicLikeCount }}
          </span>
        </li>
        <li @click="isPopup = true">
          <van-image
            :src="messageIcon"
            :style="{
              width: 'var(--video-details-comment-width)',
              height: 'var(--video-details-comment-height)'
            }"
          />
          <span class="public-number" style="color: rgb(102, 102, 102);">
            {{ dynamicInfo?.dynamicCommentCount }}
          </span>
        </li>
      </ul>
      <div flex>
        <div h-12 w-12 relative>
          <van-image
            round
            ai-avatar
            :src="dynamicInfo?.avatar || Head"
            fit="cover"
            class="user-head"
            @click="onAvator"
          />
          <van-image
            v-if="!isFollow && userInfo.userId !== dynamicInfo?.userId"
            round
            right-3
            top-9.5
            absolute
            :src="addIcon"
            fit="cover"
            :style="{
              width: 'var(--video-details-follow-width)',
              height: 'var(--video-details-follow-height)'
            }"
            @click="onFollow"
          />
        </div>
        <ul ml-3 shrink w-full>
          <li flex justify-between>
            <span class="user-name">{{ dynamicInfo?.name }}</span>
          </li>
          <li>
            <span mt-1 class="text-desc">
              {{ dynamicInfo?.dynamicDesc }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <popup-box v-model:show="isPopup" style="background: url(/background/comment_btm_bg.png);">
      <div p-layout-padding>
        <div class="comments-title mt-4 mb-5">Comments</div>
        <div class="h-[40vh] overflow-y-auto">
          <comment-card
            :list="commentList"
            class="video-comment-card_box"
          />
        </div>
        <input-box @send="v => onSend(v, 1)" />
      </div>
    </popup-box>

    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
  .video-comment-card_box {
    padding-bottom: calc(60px + var(--ai-view-padding-bottom));
  }
  .comments-title{
    display: inline-block;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    background: rgb(233, 175, 251);
    border: 1px solid rgb(51, 51, 51);
    font-weight: 700;
    font-size: 18px;
    color: rgb(51, 51, 51);
  }
  .video-box {
    width: 100%;
    height: 100vh;
    position: relative;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: var(--ai-short-video-bg-color) no-repeat top center / cover;
    }

    .play-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 64px;
      color: rgba(255, 255, 255, 0.7);
    }

    .bottom-box {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(20px + env(safe-area-inset-bottom));
    }

    .user-head {
      width: var(--ai-short-video-avatar-width);
      height: var(--ai-short-video-avatar-height);
    }
    .user-name{
      color:white;
      font-size: 16px;
      font-weight: 700;
    }
    .text-desc{
      color:white;
      font-size: 14px;
    }
    .bottom-btn {
      display: flex;
      justify-content: end;
      gap: 14px;
      li {
        border: 1px solid rgb(0, 0, 0);
        width: var(--ai-short-video-bottom-btn-width);
        height: var(--ai-short-video-bottom-btn-height);
        border-radius: var(--ai-short-video-bottom-btn-border-radius);
        background: var(--ai-short-video-bottom-btn-bg-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2px;
        .public-number {
            margin-top: 0;
            font-size: 14px !important;
            font-weight: 400 !important;
            color: white;
        }
      }
    }
  }
</style>
