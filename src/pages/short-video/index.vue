<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useDetail } from '@/hooks/useDetail'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'ShortVideo'
  })

  const { reportIcon, addIcon, messageIcon, detailLikeIcon, detailLikedIcon } =
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
        <ul mb-5 class="bottom-btn">
          <li>
              <van-image
                :src="isVideoLike ? detailLikedIcon : detailLikeIcon"
                class="icon-box"
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
              class="icon-box"
              :style="{
                width: 'var(--video-details-comment-width)',
                height: 'var(--video-details-comment-height)'
              }"
            />
            <span class="public-number">
              {{ dynamicInfo?.dynamicCommentCount }}
            </span>
          </li>
        </ul>
      <div flex>
        <div h-12 w-12 relative>
          <van-image
            round
            ai-avatar
            :src="dynamicInfo?.avator || Head"
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
            <span style="color:white" ai-user-name>{{ dynamicInfo?.name }}</span>
            <van-image
              v-if="userInfo.userId !== dynamicInfo?.userId"
              :src="reportIcon"
              :style="{
                width: 'var(--report-image-width)',
                height: 'var(--report-image-height)'
              }"
              @click="isReport = true"
            />
          </li>
          <li>
            <span style="color:white" mt-1 ai-text-desc>
              {{ dynamicInfo?.dynamicDesc }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <popup-box v-model:show="isPopup">
      <div p-layout-padding>
        <van-divider class="white-divider" style="color:white" content-position="left">Comments</van-divider>
        <div class="h-[56vh] overflow-y-auto">
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
  .video-box {
    width: 100%;
    height: 100vh;
    position: relative;

    video {
      width: 100%;
      height: 100%;
      background: var(--ai-short-video-bg-color);
    }
    .white-divider::before,
    .white-divider::after {
      border-color: #fff;
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
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      // background: linear-gradient(180deg, rgba(14, 8, 15, 0.8) 0%, rgba(14, 8, 15, 0) 100%);
    }

    .user-head {
      width: var(--ai-short-video-avatar-width);
      height: var(--ai-short-video-avatar-height);
    }
    .bottom-btn {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-self: flex-end;
      li {
        position: relative;
        width: var(--ai-short-video-bottom-btn-width);
        height: var(--ai-short-video-bottom-btn-height);
        border-radius: var(--ai-short-video-bottom-btn-border-radius);
        background: var(--ai-short-video-bottom-btn-bg-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon-box {
          position: absolute;
          bottom: 26px;
          z-index: 1;
        }

        .public-number {
          font-size: 20px !important;
          margin-top: 22px;
        }
      }
    }
  }
</style>
