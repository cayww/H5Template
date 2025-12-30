<script setup lang="ts">
  import MasonryIcon from '@/assets/public/masonry-icon.png'
  import MyIcon from '@/assets/public/my-icon.png'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'GoldCoin'
  })

  const { userInfo } = useUserStore()
  const { winCoinData } = useWindow()
  const { appParams } = useJump()

  const formData = reactive({
    radio: winCoinData[0]?.key
  })

  const onRecharge = () => {
    appParams({ key: 'Recharge', value: formData.radio, state: 1 })
  }
</script>

<template>
  <div safe-area-inset-top class="gold-coin_box">
    <div p-layout-padding>
      <ul class="top-box">
        <li>
          <van-image h-20 w-20 :src="MasonryIcon" fit="cover" />
        </li>
        <li ml-8 flex flex-col class="top">
          <span>My diamonds</span>
          <span text-6 text-white font-medium>
            {{ userInfo.coins }}
          </span>
        </li>
      </ul>

      <!-- 选项数据 -->
      <ul class="bottom-selsect">
        <li
          v-for="item in winCoinData"
          :key="item.key"
          :class="{ 'on-active': formData.radio === item.key }"
          @click="formData.radio = item.key"
        >
          <p>
            <van-image h-4 w-5 :src="MyIcon" fit="cover" />
            <span ml-1 ai-user-name>{{ item.cions }}</span>
          </p>
          <span ai-text-desc>{{ item.meney }}$</span>
        </li>
      </ul>

      <!-- 按钮 -->
      <div mt-6 flex justify-center>
        <p primary-gradient-btn @click="onRecharge">Recharge</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .top{
    color: rgba(255, 255, 255, 1);
    font-size: 16px;
    &:nth-child(1) {
      font-size: 24px;
      font-weight: 900;
    }
  }
  .gold-coin_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-coin-bg-color);
  }

  .top-box {
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(123, 132, 255, 1) 0%, rgba(99, 229, 252, 1) 49.79%, rgba(174, 255, 112, 1) 100%);
    display: flex;
    align-items: center;
    padding: 20px;
    padding-bottom: 10px;
  }

  .bottom-selsect {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    /* 每行 3 列，每列等宽 */
    gap: 12px;
    /* 可选：设置子项之间的间距 */
    li {
      width: var(--ai-coin-select-style-width);
      height: var(--ai-coin-select-style-height);
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 10px;
      justify-content: space-between;
      border-radius: var(--ai-coin-select-style-border-radius);
      background: var(--ai-coin-select-style-bg-color);
      p {
        margin-bottom: 0px;
        display: flex;
        align-items: center;
      }
    }

    .on-active {
      background: var(--ai-coin-select-style-selected-color);
    }
  }
</style>
