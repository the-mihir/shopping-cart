
// ? Code for Phone Case ===================

function updateCaseNumber(isIncrease) {
    const InputNumberField = document.getElementById('case__number__field');
    const InputNumberFieldString = InputNumberField.value;
    const InputItemNumber = parseInt(InputNumberFieldString);
    let newInputItemNumber;

    if (isIncrease === true) {
        newInputItemNumber = InputItemNumber + 1;
    }
    else {
        newInputItemNumber = InputItemNumber - 1;
    }

    InputNumberField.value = newInputItemNumber;
    return newInputItemNumber;
}

function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const casePriceTotal = document.getElementById('price__unit');
    casePriceTotal.innerText = caseTotalPrice;
}



const btnCasePlus = document.getElementById('btn__case__plus');
btnCasePlus.addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
})

const btnMainus = document.getElementById('btn__case__mainus');
btnMainus.addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false)
    updateCasePrice(newCaseNumber);

})

// ? Code for Phone Case ===================


