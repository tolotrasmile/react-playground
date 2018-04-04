const throttle = (fn, wait) => {
  let time = Date.now()
  return function () {
    if ((time + wait - Date.now()) < 0) {
      fn()
      time = Date.now()
    }
  }
}

const debounce = (fn, time) => {
  let timeout

  return function () {
    const functionCall = () => fn.apply(this, arguments)

    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}

export default { throttle, debounce }
