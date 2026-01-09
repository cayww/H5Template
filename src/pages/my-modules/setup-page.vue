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
    <ul mt-60>
      <li flex justify-center>
        <p
          primary-gradient-btn
          style="color:white"
          @click="onState('deleteaccount')"
        >
          Delete account
        </p>
      </li>
      <li mt-5 flex justify-center>
        <p ai-gradient-btn class="bottom-btn" @click="onState('logout')">
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
    min-height: 100vh;
    background: var(--ai-setting-bg-color);
  }
  p{
      font-size: 20px;
      font-weight: 900;
      color: rgba(14, 28, 66, 1);
    }
  .bottom-btn{
    background: linear-gradient(180deg, rgba(99, 229, 252, 1) 0%, rgba(179, 241, 252, 1) 100%);
    box-shadow: 0px 2px 0px  rgba(57, 182, 204, 1), 0px 2px 6px  rgba(26, 151, 173, 1),inset 0px 2px 0px  rgba(255, 255, 255, 0.8);
  }
  .list-btn {
    li + li {
      margin-top: 16px;
    }

    li {
      width: var(--ai-setting-select-style-width);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
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
</style>
