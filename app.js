const gb8 = document.getElementById('8gb-memory')
const gb16 = document.getElementById('16gb-memory')
const extraMemory = document.getElementById('extra-momoery-cost')

const s256 = document.getElementById('256-storage')
const s512 = document.getElementById('512-storage')
const s1tb = document.getElementById('1tb-storage')

const extraStorage = document.getElementById('extra-storage-cost')

const aug25 = document.getElementById('25aug-delivery')
const aug16 = document.getElementById('16aug-delivery')
const delivery = document.getElementById('delivery-cost')

gb8.addEventListener('click', function () {
    extraMemory.innerText = 0
})
gb16.addEventListener('click', function () {
    extraMemory.innerText = 180;
})
s256.addEventListener('click', function () {
    extraStorage.innerText = 0;
})
s512.addEventListener('click', function () {
    extraStorage.innerText = 100;
})
s1tb.addEventListener('click', function () {
    extraStorage.innerText = 180;
})
aug25.addEventListener('click', function () {
    delivery.innerText = 120;
})
aug16.addEventListener('click', function () {
    delivery.innerText = 180;
})