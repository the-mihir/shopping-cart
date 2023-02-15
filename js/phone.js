function inCreaseInput(isIncrease) {

    const phoneQField = document.getElementById('phoneQuntityField');
    const phoneQuString = phoneQField.value;
    const phoneQ = parseInt(phoneQuString);

    let newUpdateQ;

    if (isIncrease === true) {
        newUpdateQ = phoneQ + 1;
    }
    else {
        newUpdateQ = phoneQ - 1;
    }

    phoneQField.value = newUpdateQ;
    return updateQ;


}

function updatePrice(newUpdateQuan) {
    const updatePriceTotal = newUpdateQuan * 1219;

    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = updatePriceTotal;
    console.log(updatePriceTotal);
}






const btnPhonePlus = document.getElementById('btnPhonePlus');
btnPhonePlus.addEventListener('click', function () {
    const newUpdateQuan = inCreaseInput(true);
    updatePrice(newUpdateQuan);

})

const btnMainus = document.getElementById('btnPhoneManias');
btnMainus.addEventListener('click', function () {

    const newUpdateQuan = inCreaseInput(false);
    updatePrice(newUpdateQuan);



})



