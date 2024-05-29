const exchangeRates = {
    THB: 31.20, 
    CNY: 6.42,  
    JPY: 110.08, 
    KRW: 1130.80, 
    INR: 73.29, 
    EUR: 0.85, 
    USD: 1, 
    AUD: 1.31, 
    ZAR: 14.41 
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    let result;

    if (fromCurrency === toCurrency) {
        result = amount;
    } else {
        result = amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    }

    document.getElementById('result').textContent = result.toFixed(2);
}