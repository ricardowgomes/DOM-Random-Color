const button = document.getElementById('button');
const h2 = document.querySelector('h2');

button.addEventListener('click', () => {
  const newColor = randomColor()
  console.log(newColor)
  button.style.backgroundColor = newColor[2];
  document.getElementById('random-color').style.color = newColor[1]
  document.body.style.backgroundColor = newColor[0];
  h2.style.color = newColor[2];
  h2.innerText = `Background Color: ${newColor[0]}`;
})

const randomColor = () => {
  let arr = [];
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  const newColor = `rgb(${r}, ${g}, ${b})`
  const newColorDark = `rgb(${r - 75}, ${g - 75}, ${b - 75})`
  const newColorLight = `rgb(${r + 75}, ${g + 75}, ${b + 75})`
  arr.push(newColor, newColorDark, newColorLight)

  return arr
}