const scoreUI = {}

scoreUI.display = function (score) {
  const scoreDiv = document.querySelector('.score')
  scoreDiv.textContent = score
}

export { scoreUI }
