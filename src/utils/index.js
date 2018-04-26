export const throttle = (callback, wait) => {
  let time = Date.now()
  return () => {
    if ((time + wait - Date.now()) < 0) {
      callback()
      time = Date.now()
    }
  }
}

export const debounce = (callback, time) => {
  let timeout
  return () => {
    const functionCall = () => callback.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

export const monthDiff = (d1, d2) => {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth() + 1
  months += d2.getMonth()
  return months <= 0 ? 0 : months
}

export const monthDiffFromNow = (date) => {
  return monthDiff(date, new Date())
}

console.log(monthDiffFromNow(new Date(2016, 7, 1)))
