export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<Blob | null>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}
export function useVideoCover(): UseVideoCoverReturn {
  const isExtracting = ref(true)
  const error = ref<string | null>(null)
  const extractCoverFromVideo = (file: File): Promise<Blob | null> => {
    return new Promise(resolve => {
      console.log('[cover] start')

      if (!file || !file.type.startsWith('video/')) {
        console.warn('[cover] not a video file')
        resolve(null)
        return
      }

      isExtracting.value = true
      error.value = null

      // ========= 创建隐藏容器 =========
      console.log('[cover] create temp container')
      const container = document.createElement('div')
      container.style.cssText = `
        position: fixed;
        left: -99999px;
        top: 0;
        width: 1px;
        height: 1px;
        overflow: hidden;
      `
      document.body.appendChild(container)

      // ========= 创建 video =========
      console.log('[cover] create video element')
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.muted = true
      video.playsInline = true
      video.setAttribute('playsinline', 'true')
      video.setAttribute('webkit-playsinline', 'true')

      container.appendChild(video)
      console.log('[cover] video appended to DOM')

      const objectURL = URL.createObjectURL(file)
      console.log('[cover] set src via ObjectURL', objectURL)
      video.src = objectURL

      let cleaned = false
      const cleanup = () => {
        if (cleaned) return
        cleaned = true
        console.log('[cover] cleanup')
        URL.revokeObjectURL(objectURL)
        video.remove()
        container.remove()
        isExtracting.value = false
      }

      // ========= 超时兜底 =========
      const timeout = setTimeout(() => {
        console.warn('[cover] timeout 6s, force cleanup')
        cleanup()
        resolve(null)
      }, 6000)

      // ========= metadata =========
      video.onloadedmetadata = () => {
        console.log('[cover] onloadedmetadata', {
          duration: video.duration,
          width: video.videoWidth,
          height: video.videoHeight
        })

        if (!video.duration || Number.isNaN(video.duration)) {
          console.error('[cover] invalid duration')
          clearTimeout(timeout)
          cleanup()
          resolve(null)
          return
        }

        // ⚠️ iOS 必须非 0
        const targetTime = Math.min(1, video.duration / 2)
        console.log('[cover] set currentTime', targetTime)

        try {
          video.currentTime = targetTime
        } catch (e) {
          console.error('[cover] set currentTime failed', e)
          clearTimeout(timeout)
          cleanup()
          resolve(null)
        }
      }

      // ========= seek 完成 =========
      video.onseeked = () => {
        console.log('[cover] onseeked')

        const w = video.videoWidth
        const h = video.videoHeight

        if (!w || !h) {
          console.error('[cover] invalid video size')
          clearTimeout(timeout)
          cleanup()
          resolve(null)
          return
        }

        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          console.error('[cover] canvas ctx null')
          clearTimeout(timeout)
          cleanup()
          resolve(null)
          return
        }

        ctx.drawImage(video, 0, 0, w, h)

        canvas.toBlob(
          blob => {
            console.log('[cover] canvas.toBlob done', blob)
            clearTimeout(timeout)
            cleanup()
            resolve(blob)
          },
          'image/jpeg',
          0.85
        )
      }

      // ========= error =========
      video.onerror = e => {
        console.error('[cover] video error', e)
        clearTimeout(timeout)
        cleanup()
        resolve(null)
      }
    })
  }
  return {
    extractCoverFromVideo,
    isExtracting,
    error
  }
}
