const MOBILE_COST = 34000; // OnePlus 6
const MOBILE_ACCESSARIES = 1200; // Mobile Cover and Charger
const GST_RATE = 18; // in percentage
const ACCOUNT_BALANCE = 100000;

function getTaxedPrice(amount) {
    return Math.floor((amount * GST_RATE) / 100);
}

function getUnitDeviceCost() {
    var deviceCost = MOBILE_COST + MOBILE_ACCESSARIES;
    var taxedPrice = getTaxedPrice(deviceCost);
    return  Math.floor(deviceCost + taxedPrice);
}

function getQuantity() {
    var unitDeviceCost = getUnitDeviceCost();
    return Math.floor(ACCOUNT_BALANCE / unitDeviceCost);
}

function calculatePurchase() {
    debugger;
    var quantity = getQuantity();
    var unitDeviceCost = getUnitDeviceCost();
    var totalAmount = quantity * unitDeviceCost;
    var codePane = document.getElementById('codePane');
    codePane.innerHTML = `Total purchased Device(s) = ${quantity} <br/>
            Total Amount: ${totalAmount}`;
}
