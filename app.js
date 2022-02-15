function updateproductNumber(product, price, increasing) {
    const productNumber = document.getElementById(product + '-num');
    let productTotal = productNumber.value;
    if (increasing == true) {
        productTotal = parseFloat(productTotal) + 1;
    }
    else if (productTotal > 0) {
        productTotal = parseFloat(productTotal) - 1;
    }
    productNumber.value = productTotal;
    const productAmmount = document.getElementById(product + '-ammo');
    productAmmount.innerText = productTotal * price;

    calculation();

}
function input(prod) {
    const proNumber = document.getElementById(prod + '-num');
    const totalNumber = parseInt(proNumber.value);
    return totalNumber;
}
function calculation() {
    const subphn = input('phn') * 1219;
    const subcase = input('case') * 59;
    const subtotal = subphn + subcase;
    const tex = subtotal / 10;
    const total = tex + subtotal;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tex').innerText = tex;
    document.getElementById('total').innerText = total;


}

document.getElementById('case-up').addEventListener('click', function () {
    updateproductNumber('case', '59', true);
})
document.getElementById('case-down').addEventListener('click', function () {
    updateproductNumber('case', '59', false);
})
document.getElementById('phn-up').addEventListener('click', function () {
    updateproductNumber('phn', '1219', true);
})
document.getElementById('phn-down').addEventListener('click', function () {
    updateproductNumber('phn', '1219', false);
})
