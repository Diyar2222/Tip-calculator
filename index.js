//initial values on load
function initialValues(){
    let a = document.querySelector(".tip-range-input").value
    document.getElementById("tip-percentage").innerText = a
    let b = document.querySelector(".people").value
    document.getElementById("num-people").innerText = b
}
let tip = 0;
let totalAmount=0;
let billValue=0;
let numOfPeople
document.querySelector(".tip-range-input").addEventListener('input', displayTip)
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

//RANGE OF PEOPLE
document.querySelector(".people").addEventListener('input', displayPeople)
function displayPeople(e){
    document.getElementById("num-people").textContent = `${e.target.value}`
    //TIP PER PERSON
    let numOfPeople=document.getElementById("num-people").textContent
    console.log(tip)
    document.querySelector(".tip-per-person").innerText = "$ "+ (Number(tip)/Number(numOfPeople)).toFixed(2)
    //TOTAL PER PERSON
    let a = document.getElementById("total-amount").innerHTML
    console.log(totalAmount)
    document.querySelector(".tip-total").innerText = "$ "+ (Number(totalAmount)/Number(numOfPeople)).toFixed(2)
}

//BILL INPUT
document.querySelector("#bill").addEventListener("input", tipValue)
function tipValue(e){
    billValue = e.target.value
    //TIP VALUE
    let tipPercentage=document.getElementById("tip-percentage").textContent
    tip = billValue * tipPercentage/100
    document.getElementById("tip").textContent = `${tip}$`
    //TOTAL AMOUNT
    totalAmount = Number(billValue) + tip
    document.getElementById("total-amount").innerText = `${totalAmount}$`
     //TIP PER PERSON
     numOfPeople=document.getElementById("num-people").textContent
     document.querySelector(".tip-per-person").innerText = "$"+ (Number(tip)/Number(numOfPeople)).toFixed(2)
     //TOTAL PER PERSON
     document.querySelector(".tip-total").innerText = "$"+ (Number(totalAmount)/Number(numOfPeople)).toFixed(2)

}


