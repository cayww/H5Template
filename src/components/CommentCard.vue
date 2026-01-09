<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { detailId } from '@/hooks/useDetail'
  import { useUserStore } from '@/stores'

  const { reportIcon } = useAppImgStyle()
  const { userInfo } = useUserStore()

  const props = withDefaults(
    defineProps<{
      list?: CommentInfo[]
    }>(),
    {
      list: () => []
    }
  )

  // 举报弹框
  const isReport = ref(false)
</script>

<template>
  <div safe-area-inset-bottom>
    <empty v-if="props.list.length === 0" />
    <div class="comment-grid">
      <div
      v-for="(item, index) in props.list"
      :key="index"
      p-4
      ai-rounded
      class="card-comment"
    >
        <ul flex items-center justify-between>
          <li flex items-center>
            <van-image
              round
              ai-avatar
              :src="item?.avator || Head"
              fit="cover"
            />
            <span ml-3 ai-user-name>{{ item?.name || '' }}</span>
          </li>
          <li v-if="userInfo.userId !== item.userId" flex items-center>
            <van-image
              :src="reportIcon"
              :style="{
                width: 'var(--report-image-width)',
                height: 'var(--report-image-height)'
              }"
              @click="
                () => {
                  isReport = true
                  detailId = item.userId
                }
              "
            />
          </li>
        </ul>
        <span mt-2 ai-text-desc>{{ item?.content || '' }}</span>
      </div>
    </div>

    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
  .comment-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 0;
  }
  .card-comment{
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 10px;
  }
</style>
