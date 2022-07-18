adviceSlipURL = 'https://api.adviceslip.com/advice';

const adviceIdElement = document.querySelector('.advice-ID');
const adviceElement = document.querySelector('.advice');


function handelError(data) {
    console.log('an error has occurred');
    console.log(data);
}

function adviceHTML(adviceID, adviceText) {
    adviceIdElement.textContent = `ADVICE #${adviceID}`
    adviceElement.textContent = adviceText
}

function adviceSlipGenrator(adviceURL) {
    fetch(adviceURL)
    .then(response => response.json())
    .then(data => {
        adviceHTML(data.slip.id, data.slip.advice)})
    .catch(handelError);
}


adviceSlipGenrator(adviceSlipURL); 
document.querySelector('.advice-genrate-button').addEventListener("click",() =>  adviceSlipGenrator(adviceSlipURL));

