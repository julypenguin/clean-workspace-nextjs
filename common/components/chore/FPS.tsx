import React from 'react'
import Script from 'next/script'

/** 顯示 FPS */
export const FPS = React.memo(() => {
  /** 加載結束 */
  const onLoad = () => {
    if (!window?.Stats) return
    const stats = new Stats()
    document.body.appendChild(stats.dom)
    requestAnimationFrame(function loop() {
      stats.update()
      requestAnimationFrame(loop)
    })
  }

  return <Script data-sid="-521304533" src="//cdn.jsdelivr.net/gh/Kevnz/stats.js/build/stats.min.js" onLoad={onLoad} />
})

FPS.displayName = 'FPS'
