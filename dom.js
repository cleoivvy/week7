// background colour
document.body.style.backgroundColor = 'blue'

// getElementById to select the 3rd list
const cla = document.getElementById('clara')
cla.textContent = 'sandra'

// querySelector to select the first list
const loo = document.querySelector('ol>:nth-of-type(1)')
loo.textContent ='Annabel'
 
// querySelector to target the 9th li
const leap = document.querySelector('ol>:nth-of-type(9)')
leap.textContent ='forever'

// applying background color and content to the 10th li
const prove =  document.querySelectorAll('ol>li ')
prove [9].style.backgroundImage = 'linear-gradient(45deg, red 30%, gray 31%, gray 66%, black 67%)'
prove [9].textContent= 'pearl'

// getElementsByClassName to apply style to the 5th li
const learn =document.getElementsByClassName('peer')
learn [2].style.backgroundColor ='purple'
learn [2].textContent ='bear'

// getElementsByClassName to apply style to the 7th li
const bottle =document.getElementsByClassName('peer')
bottle [3].style.backgroundColor ='pink'
bottle [3].textContent ='love'

// getElementByTagName give content to the 4th li
const purr = document.getElementsByTagName('li')
purr[3].textContent = 'period'