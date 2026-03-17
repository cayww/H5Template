<script setup lang="ts">
  import type { AppCommunication } from '@/hooks/useJump'
  import RightIcon from '@/assets/public/right-icon.png'
  import { useJump } from '@/hooks/useJump'

  defineOptions({
    name: 'SetupPage'
  })

  const { appParams, jumpToUserAgreement, jumpToBlackList } = useJump()

  const listData = [
    { label: 'Privacy Agreement', value: '0' },
    { label: 'User Agreement', value: '1' },
    { label: 'Blacklist', value: '2' }
  ]

  const onState = (key: AppCommunication) => {
    appParams({ key, state: 2 })
  }

  const onSelect = (value: string) => {
    if (value === '2') {
      jumpToBlackList()
    }
    if (value === '0') {
      jumpToUserAgreement('/privacy-agreement')
    }
    if (value === '1') {
      jumpToUserAgreement('/user-agreement')
    }
  }
</script>

<template>
  <div safe-area-inset-top class="setup-page_box">
    <ul p-layout-padding class="list-btn">
      <li
        v-for="item in listData"
        :key="item.value"
        @click="onSelect(item.value)"
      >
        <span>{{ item.label }}</span>
        <van-image h-3 w-4 :src="RightIcon" fit="cover" />
      </li>
    </ul>

    <!-- 按钮 -->
    <ul class="bottom-box">
      <li flex justify-center>
        <p
          ai-gradient-btn
          class="bottom-btn"
          @click="onState('deleteaccount')"
        >
          Delete account
        </p>
      </li>
      <li flex justify-center>
        <p
          ai-gradient-btn
          style="background:rgb(169, 192, 255)"
          class="bottom-btn"
          @click="onState('logout')"
        >
          Log out
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  .setup-page_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );

    height: 100vh; // ✅ 修复溢出
    display: flex;
    flex-direction: column;
    background: var(--ai-setting-bg-color) no-repeat top center / cover;
  }

  .list-btn {
    flex: 2; // ✅ 占满剩余空间
    overflow-y: auto; // ✅ 防止撑出屏幕

    li + li {
      margin-top: 16px;
    }

    li {
      width: var(--ai-setting-select-style-width);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      border: 1px solid rgb(51, 51, 51);
      height: var(--ai-setting-select-style-height);
      border-radius: var(--ai-setting-select-style-border-radius);
      background: var(--ai-setting-select-style-bg-color);

      span {
        font-size: var(--ai-setting-select-style-text-size);
        font-weight: var(--ai-setting-select-style-text-weight);
        color: var(--ai-setting-select-style-text-color);
      }
    }
  }

  .bottom-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: calc(20px + env(safe-area-inset-bottom)); // ✅ 适配安全区
  }

  .bottom-btn {
    width: 80%;
    text-align: center;
    background-image: var(--ai-setting-btn-color) !important;
    font-size: var(--ai-setting-btn-text-size) !important;
    font-weight: var(--ai-setting-btn-text-weight) !important;
    color: var(--ai-setting-btn-text-color) !important;
  }
</style>
