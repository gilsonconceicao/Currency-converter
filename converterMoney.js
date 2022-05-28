const btn = document.getElementById('converter-value')
const optionCurrency = document.getElementById('changes-currency')

const dolar = 4.73
const euro = 5.08

const converterMoney = () => {
    const addValue = document.getElementById('add-value').value
    const currencyBRL = document.getElementById('currencyBRL')
    const currencyTransform = document.getElementById('currency-transform')

    currencyBRL.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency', 
        currency: 'BRL', 
    }).format(addValue)

    currencyTransform.innerHTML = new Intl.NumberFormat("en-US", {
        style: 'currency', 
        currency: 'USD', 
    }).format(addValue / dolar)

}

changesCurrency = () => {
    const currency = document.getElementById('changes-currency') 
    console.log(currency.value)

    if (currency.value === 'Dolar') {
        converterMoney()

    } else if (currency.value === 'Euro') {
        const addValue = document.getElementById('add-value').value
        const currencyBRL = document.getElementById('currencyBRL')
        const currencyTransform = document.getElementById('currency-transform')

        // change image 
        document.getElementsByClassName('image-change')[0].src = 'assets/uniao-europeia.png' 
        
        // euro currency calculation
        
        currencyBRL.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: 'currency', 
            currency: 'BRL', 
        }).format(addValue)
    
        currencyTransform.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency', 
            currency: 'EUR', 
        }).format(addValue / euro)

        document.getElementsByClassName('changeNameCurrency')[0].innerHTML = 'Euro'
    }

}

btn.addEventListener('click', converterMoney) 
optionCurrency.addEventListener('change', changesCurrency)