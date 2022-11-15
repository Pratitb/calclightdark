const displayArea = document.querySelector('#display')
const buttons = document.querySelectorAll('button')
let newDisplayAreaNumber

buttons.forEach((item) => {
    item.addEventListener('click', function(){
        if(item.id == 'clear'){
            displayArea.innerText = ''
        }
        else if(item.id == 'delete'){
            let displayAreaTxt = displayArea.innerText.toString()
            console.log(displayAreaTxt.length)
            displayArea.innerText = displayAreaTxt.substr(0, displayAreaTxt.length - 1)
            console.log(displayArea)
        }
        else if(displayArea.innerText != '' && item.id == 'equal'){
            displayArea.innerText = eval(displayArea.innerText)
            newDisplayAreaNumber = displayArea.innerText
            checkFloating(newDisplayAreaNumber)
        }
        else if(displayArea.innerText == '' && item.id == 'equal'){
            displayArea.innerText = 'Empty'
            setTimeout(() => (displayArea.innerText = ''), 2000)
        }
        else{
            displayArea.innerText += item.id
        }
    })
})

function checkFloating(number){
    let numberRemainder = number%1 === 0
    if(numberRemainder){
        return
    }
    else{
        newDisplayAreaNumber.toFixed(2)
    }
}

const themeToggleBtn = document.querySelector('.theme_toggler')
const cal = document.querySelector('.calculator')
const toggleIcon = document.querySelector('.toggler_icon')
let isDark = true
themeToggleBtn.addEventListener('click', function(){
    cal.classList.toggle('dark')
    themeToggleBtn.classList.toggle('active')
    isDark = !isDark
})