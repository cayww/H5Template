<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import swipeOne from '@/assets/public/swipe-1.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useDetail } from '@/hooks/useDetail'
  import { useWindow } from '@/hooks/useWindow'

  defineOptions({
    name: 'ArticleDetail'
  })

  const { detailLikeIcon, detailLikedIcon } = useAppImgStyle()
  const { winPublishImageListData } = useWindow()
  const {
    loding,
    dynamicInfo,
    commentList,
    isLike,
    onAvator,
    onLike,
    onSend
  } = useDetail()
</script>

<template>
  <div v-if="!loding" class="article-detail_box">
    <div relative>
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in dynamicInfo?.dynamicPic"
          :key="index"
        >
          <van-image
            h-full
            w-full
            :src="item || swipeOne"
            fit="cover"
            position="top"
          />
        </van-swipe-item>
      </van-swipe>
      <div
        p-5
        text-end
        flex
        flex-col
        items-center
        right-0
        absolute
        class="bottom-[-100px]"
      >
        <van-image
          :src="isLike ? detailLikedIcon : detailLikeIcon"
          :style="{
            width: 'var(--unlike-image-width)',
            height: 'var(--unlike-image-height)'
          }"
          fit="cover"
          @click="onLike"
        />
        <span class="public-number !fw-400">
          {{ dynamicInfo?.dynamicLikeCount }}
        </span>
      </div>
    </div>

    <div mt-5 px-layout-padding w-full>
      <ul flex>
        <li flex shrink flex-col items-center @click="onAvator">
          <van-image
            round
            ai-avatar
            :src="dynamicInfo?.avatar || Head"
            fit="cover"
          />
          <span mt-1 ai-user-name>{{ dynamicInfo?.name }}</span>
        </li>
        <li ml-5 class="w-[60%]">
          <span ai-text-desc>{{ dynamicInfo?.dynamicDesc }}</span>
          <p flex flex-wrap>
            <span mr-2 mt-4 ai-tag-btn class="border-[1px] border-[#333333]">
              #{{
                winPublishImageListData[dynamicInfo?.dynamicTitleType]
                  .name
              }}
            </span>
          </p>
        </li>
      </ul>

      <div class="comments-title mt-5 mb-5">Comments</div>

      <comment-card
        :list="commentList"
        class="article-comment-card_box"
      />
      <input-box @send="onSend" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .article-detail_box {
    background: var(--ai-article-detail-bg-color) no-repeat top center / cover;
    min-height: 100vh;
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
  .my-swipe {
    border-bottom: 1px solid rgba(51, 51, 51, 1);
    border-radius: 0px 0px 20px 20px;
    .van-swipe-item {
      height: 379px;
    }
  }

  .article-comment-card_box {
    padding-bottom: calc(80px + var(--ai-view-padding-bottom));
  }
</style>
