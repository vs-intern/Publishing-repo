document$.subscribe(function () {
  if (window.__readingProgressHandler) {
    window.removeEventListener('scroll', window.__readingProgressHandler)
  }
  let bar = document.querySelector('.reading-progress')
  if (!bar) {
    bar = document.createElement('div')
    bar.className = 'reading-progress'
    document.body.appendChild(bar)
  }
  const update = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    bar.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`
  }
  window.__readingProgressHandler = update
  window.addEventListener('scroll', update, { passive: true })
  update()
})
