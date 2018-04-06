const throttle = (callback, wait) => {
  let time = Date.now()
  return () => {
    if ((time + wait - Date.now()) < 0) {
      callback()
      time = Date.now()
    }
  }
}

const debounce = (callback, time) => {
  let timeout
  return () => {
    const functionCall = () => callback.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

const monthDiff = (d1, d2) => {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth() + 1
  months += d2.getMonth()
  return months <= 0 ? 0 : months
}

export default { throttle, debounce, monthDiff }
