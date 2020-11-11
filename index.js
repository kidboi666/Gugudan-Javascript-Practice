document.querySelector('#click').addEventListener('click', () => {
  const a = document.querySelector('#first').value
  const b = document.querySelector('#second').value
  const d = document.querySelector('#result')
  if (a) {
    if (b) {
      const c = a * b
      d.textContent = c
    } else {
      d.textContent = '두 번째 값을 입력하시오'
    }
  } else {
    d.textContent = '첫 번째 값을 입력하시오'
  }
})
