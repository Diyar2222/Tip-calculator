//initial values on load
function initialValues(){
    let a = document.querySelector(".tip-range-input").value
    document.getElementById("tip-percentage").innerText = a
    let b = document.querySelector(".people").value
    document.getElementById("num-people").innerText = b
    document.getElementById("tip").innerText = "0.00$"
    document.getElementById("total-amount").innerText = "0.00$"
}
let tip = 0;
let totalAmount=0;
let billValue=0;
let numOfPeople

document.querySelector("input").addEventListener('input', displayTip)
let rangeInputs=document.querySelectorAll("input[type='range']")
rangeInputs.forEach(item => item.addEventListener('input',displayTip))

//RANGE OF TIP
function displayTip(e){
    //range input value
    document.getElementById("tip-percentage").textContent = e.target.value
    // bill text input value
    billValue = document.getElementById("bill").value
    //tip percentage value
    tip = (Number(e.target.value)/100 * Number(billValue)).toFixed(2)
    document.getElementById("tip").innerText = tip+"$"
    //total amount value
    totalAmount = Number(billValue) + Number(tip)
    document.getElementById("total-amount").innerText = totalAmount.toFixed(2) + "$"
    //TIP PER PERSON
    numOfPeople=document.getElementById("num-people").textContent
    document.querySelector(".tip-per-person").innerText = "$ "+ (Number(tip)/Number(numOfPeople)).toFixed(2)
    //TOTAL PER PERSON
    document.querySelector(".tip-total").innerText = "$ "+ (totalAmount/Number(numOfPeople)).toFixed(2)

}   





