// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b

const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num)

// Gets the mouse position
const getMousePos = (e) => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop
  }

  return { x: posx, y: posy }
}

const preloadImage = (src) =>
  new Promise((r) => {
    const image = new Image()
    image.onload = r
    image.onerror = r
    image.src = src
  })

// Cloudinary Auto Optimization
const optimizeCloudinaryImage = (url, width = null) => {
  if (!url || !url.includes('cloudinary.com')) return url
  // Check if already optimized/transformed
  if (url.includes('f_auto') || url.includes('q_auto')) return url

  const params = ['f_auto', 'q_auto']
  if (width) params.push(`w_${width}`)

  const paramsString = params.join(',') + '/'

  // Insert params after /upload/
  return url.replace('/upload/', `/upload/${paramsString}`)
}

export { map, lerp, clamp, getMousePos, preloadImage, optimizeCloudinaryImage }
