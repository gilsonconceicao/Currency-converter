const btn = document.getElementById('converter-value')
const optionCurrency = document.getElementById('changes-currency')

// prefixed changes 
const dolar = 4.73
const euro = 5.08


const converterMoney = () => {
    

    const addValue = document.getElementById('add-value').value
    if (addValue == '' || addValue == 0) {
        alert('Adicione um valor válido!')
    } else {
        changesCurrency()
        document.querySelector('.area-response').style.display = 'flex'
    }

    
}

function changesCurrency() {
    // a DOM
    const addValue = document.getElementById('add-value').value
    const currencyBRL = document.getElementById('currencyBRL')
    const currencyTransform = document.getElementById('currency-transform')


    currencyBRL.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL',
    }).format(addValue)

    // option select converter 
    const optionCurrency = document.getElementById('changes-currency')

    if (optionCurrency.value === 'Dolar') {

        currencyTransform.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD',
        }).format(addValue / dolar)

        document.querySelector('.image-change').src = 'assets/estados-unidos.png'
        document.querySelector('.changeNameCurrency').innerHTML = 'Dólar'

    } else {
        currencyTransform.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency', 
            currency: 'EUR', 
        }).format(addValue / euro)

        document.querySelector('.image-change').src = 'assets/uniao-europeia.png'
        document.querySelector('.changeNameCurrency').innerHTML = 'Euro'
    }
}

btn.addEventListener('click', converterMoney)
optionCurrency.addEventListener('change', changesCurrency)