const tipBtns = document.getElementsByClassName('tipBtns')
const billArea = document.getElementById('billArea')
const peopleArea = document.getElementById('peopleArea')
const tipAmountText = document.getElementsByClassName('bigText')[0]
const totalText = document.getElementsByClassName('bigText')[1]
const customTipArea = document.getElementById('customTip')
const resetButton = document.getElementById('resetBtn')
const peopleErrorArea = document.querySelector('.peopleError')
const inputs = document.getElementsByTagName('input') 
const defaultBtnColor = 'hsl(183, 100%, 15%)'

let selectedTip = 0
let billAmount = 0
let tipAmount = 0
let total = 0
let numberPeople = 1
peopleArea.value = 1
for (let i=0; i<tipBtns.length;i++){
    tipBtns[i].addEventListener('click', ()=>{
        for (let j=0; j<tipBtns.length;j++){
            tipBtns[j].style.backgroundColor = defaultBtnColor
        }
        tipBtns[i].style.backgroundColor = 'hsl(172, 67%, 45%)'
        if (customTipArea.value.length == 0) selectedTip = Number(tipBtns[i].id)/100
    })
}

const inputHandler = setInterval(() => {
    billAmount = Number(billArea.value)
    numberPeople = Number(peopleArea.value)

    if (numberPeople!=0 && Number(peopleArea.value)!=NaN){
        total = (billAmount+(billAmount*selectedTip))/numberPeople
        tipAmount = (billAmount*selectedTip)/numberPeople
        tipAmountText.innerHTML = '$'+tipAmount.toFixed(2).toString()
        totalText.innerHTML = '$'+total.toFixed(2).toString()
        peopleErrorArea.style.visibility = 'hidden'
        if (peopleArea.matches(':focus')) peopleArea.style.border = '3px solid hsl(172, 67%, 45%)'
        else if (!peopleArea.matches(':focus')) peopleArea.style.border = 'none'
    }

    else if (numberPeople == 0){
        peopleErrorArea.style.visibility = 'visible'
        peopleArea.style.border = '3px solid rgb(255, 115, 65)'
    }

    if (customTipArea.value.length>0) {
        selectedTip = Number(customTipArea.value)/100
        for (let j=0; j<tipBtns.length;j++){
            tipBtns[j].style.backgroundColor = defaultBtnColor
        }
    }


    resetButton.addEventListener('click', ()=>{
        for (let j=0; j<tipBtns.length;j++){
            tipBtns[j].style.backgroundColor = defaultBtnColor
        }
        selectedTip = 0
        billAmount = 0
        tipAmount = 0
        total = 0
        totalText.innerHTML = '$0'
        tipAmountText.innerHTML = '$0'
        billArea.value = ''
        peopleArea.value = 1
        numberPeople = 1
    })

}, 300);
