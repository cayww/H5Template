<script setup lang="ts">
  import MasonryIcon from '@/assets/public/coin_dhh.png'
  import MasonryIconW from '@/assets/public/masonry-icon.png'
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
        <li ml-8 flex flex-col>
          <span ai-user-name style="color:rgb(51, 51, 51);font-size:20px;font-weight:700">Wallet Balance:</span>
          <span style="color:rgb(51, 51, 51);font-size:22px;" font-medium>
            {{ userInfo.coins }}
          </span>
        </li>
        <li>
          <van-image h-20 w-20 :src="MasonryIcon" fit="cover" />
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
            <van-image h-4 w-5 :src="MasonryIconW" fit="cover" />
            <span ml-1 ai-user-name>{{ item.cions }}</span>
          </p>
          <span ai-text-desc>{{ item.meney }}$</span>
        </li>
      </ul>

      <!-- 按钮 -->
      <div mt-6 flex justify-center>
        <p ai-gradient-btn style="background: rgb(233, 175, 251);box-shadow: 2px 2px 0px  rgb(0, 0, 0);border: 2px solid rgb(51, 51, 51);" @click="onRecharge">Recharge</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .gold-coin_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-coin-bg-color) no-repeat top center / cover;
  }

  .top-box {
    border-radius: 50px;
    background: url(/background/coin_bar_bg.png) no-repeat top center / cover;
    border: 1px solid rgb(0, 0, 0);
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
      border: 1px solid rgb(0, 0, 0);
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
