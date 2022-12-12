let tip;
let totalAmount;
let billValue;
let numOfPeople
let tipPercentage
//initial values on load
function initialValues(){
    tipPercentage = document.querySelector(".tip-range-input").value
    document.getElementById("tip-percentage").innerText = tipPercentage
    let numOfPeopleInput = document.querySelector(".people").value
    document.getElementById("num-people").innerText = numOfPeopleInput
}
function calculateTip(){
    //tip percentage
    tip = (Number(tipPercentage)/100 * Number(billValue)).toFixed(2)
    document.getElementById("tip").innerText = tip+"$"
    // total amount value
    totalAmount = Number(billValue) + Number(tip)
    document.getElementById("total-amount").innerText = totalAmount.toFixed(2) + "$"
    // tip per person
    numOfPeople = document.getElementById("num-people").textContent
    document.querySelector(".tip-per-person").innerText = "$ "+ (Number(tip)/Number(numOfPeople)).toFixed(2)
    //total per person
    document.querySelector(".tip-total").innerText = "$ "+ (totalAmount/Number(numOfPeople)).toFixed(2)
}
//RANGE OF TIP
document.querySelector(".tip-range-input").addEventListener('input', displayTip)
function displayTip(e){
    //range input value
    document.getElementById("tip-percentage").textContent = e.target.value
    tipPercentage = e.target.value
    calculateTip()
}   
//RANGE OF PEOPLE
document.querySelector(".people").addEventListener('input', displayPeople)
function displayPeople(e){
    document.getElementById("num-people").textContent = e.target.value
    calculateTip()
}
//BILL INPUT
document.querySelector("#bill").addEventListener("input", tipValue)
function tipValue(e){
    billValue = e.target.value
    calculateTip()
}


