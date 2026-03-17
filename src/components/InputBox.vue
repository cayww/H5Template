<script setup lang="ts">
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'

  const { inputSendIcon } = useAppImgStyle()

  const value = ref('')

  const emit = defineEmits<{
    send: [_: string]
  }>()

  const onSend = () => {
    emit('send', value.value)
    value.value = ''
  }
</script>

<template>
  <div px-layout-padding class="input-box">
    <div class="input--width">
      <van-field
        v-model="value"
        placeholder="Say something"
      >
        <template #button>
          <div flex items-center>
            <van-image
              :src="inputSendIcon"
              :style="{
                width: 'var(--comment-input-image-width)',
                height: 'var(--comment-input-image-height)'
              }"
              @click="onSend"
            />
          </div>
        </template>
      </van-field>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .input-box {
    position: absolute; // ✅ 改这里
    bottom: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: center;

    background: linear-gradient(
      0deg,
      rgba(14, 8, 15, 0.8) 0%,
      rgba(14, 8, 15, 0) 100%
    );

    .input--width {
      width: var(--ai-field-input-width);
      padding-bottom: calc(20px + env(safe-area-inset-bottom)); // ✅ 安全区
    }

    .van-field {
      border-radius: var(--ai-field-input-border-radius);
      height: var(--ai-field-input-height);
      font-size: var(--ai-field-input-font-size);
      font-weight: var(--ai-field-input-font-weight);
      background: var(--ai-field-input-bg-color);

      :deep(.van-field__body) {
        height: 100%;

        input {
          color: var(--ai-field-input-text-color);

          &::placeholder {
            color: var(--ai-field-placeholder-text-color);
            font-size: var(--ai-field-input-font-size);
            font-weight: var(--ai-field-input-font-weight);
          }
        }
      }
    }
  }
</style>
