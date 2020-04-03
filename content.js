chrome.runtime.onMessage.addListener((request, sender) => {
  if (request === 'save') {
    const video = document.querySelector('video')
    if (!video) {
      throw new Error('The video player was not found!')
    }
    video.pause()
    window.parent.location.hash=`t=${~~video.currentTime}`
  }
})

