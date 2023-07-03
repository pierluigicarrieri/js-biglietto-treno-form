// Global scope utility variables

const kmFee = 0.21;
const ageYoung = 18;
const ageSenior = 65;
const discountYoung = 20;
const discountSenior = 40;

// Global scope variables that represent html elements

const usernameElement = document.getElementById ("username_element");
const promotionElement = document.getElementById ("promotion_element");
const cartElement = document.getElementById ("cart_element");
const CPCodeElement = document.getElementById ("CP_code_element");
const ticketFeeElement = document.getElementById ("ticket_fee_element");

// Global scope variables for input elements

const usernameInputElement = document.getElementById ("username-input");
const distanceInputElement = document.getElementById ("distance-input");
const ageInputElement = document.getElementById ("age-input");
const buttonGenerate = document.getElementById ("generate");
const buttonDelete = document.getElementById ("delete");

// Next 2 variables could be modified by the if...else statemnt below

let finalDiscount = 0;
let promo = "Standard Ticket"

// event lstener for button generator

buttonGenerate.addEventListener ("click", function() 

/* Following function sets ticket fee and 
fills html elements with right infos */

{
    const userName = usernameInputElement.value;
    const distance = distanceInputElement.value;
    const age = ageInputElement.value;

    if (age < ageYoung) {

        finalDiscount = discountYoung;
        promo = "Young Ticket"

    } else if (age >= ageSenior) {

        finalDiscount = discountSenior;
        promo = "Senior Ticket"
    }

    const finalFee = ((distance * kmFee) - distance * kmFee * finalDiscount / 100);

    usernameElement.innerHTML = userName;
    promotionElement.innerHTML = promo;
    cartElement.innerHTML = ((Math.random()) * 10).toFixed(0);
    CPCodeElement.innerHTML = ((Math.random()) * 100000).toFixed(0);
    ticketFeeElement.innerHTML = finalFee.toFixed(2) + "€";

}
)

// event lstener for button delete

buttonDelete.addEventListener ("click", function() 

/* Following function clears all the forms 
and the filled html elements */

{
    usernameInputElement.value = "";
    distanceInputElement.value = "";
    ageInputElement.value = "";
    usernameElement.innerHTML = "";
    promotionElement.innerHTML = "";
    cartElement.innerHTML = "";
    CPCodeElement.innerHTML = "";
    ticketFeeElement.innerHTML = "";

}
)