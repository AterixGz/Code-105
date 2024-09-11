import data from './data.js';
console.log(data)

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('company-name').innerText = data.companyName
    document.getElementById('buyer-name').innerText = data.buyerName
    document.getElementById('date').innerText = data.datebill
    document.getElementById('address').innerText = data.companyAddress
    document.getElementById('commercial-license').innerText = data.commercialLicense
    document.getElementById('collector').innerText = data.collector

    let strHtml = ''
    for (let i = 0; i < data.items.length; i++) {
        strHtml = strHtml +
        `
        <tr style="height: 30px;">
                <td style="border: 1px solid rgb(130, 112, 180);" align="center">${data.items[i].quantity}</td>
                <td style="border: 1px solid rgb(130, 112, 180);">${data.items[i].description}</td>
                <td style="border: 1px solid rgb(130, 112, 180);" align="center">${data.items[i].eachprice}</td>
                <td style="border: 1px solid rgb(130, 112, 180);" align="right">${data.items[i].amount}</td>
                <td style="border: 1px solid rgb(130, 112, 180); width: 5%;">-</td>
        </tr>
        `
    }
    document.getElementById('items').innerHTML = strHtml;
})