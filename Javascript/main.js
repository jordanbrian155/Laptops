var LaptopOne = {
    laptop:"images/dell.jpeg",
    name: "Dell",
    price:200000,
    originalPrice:228000,
    itemId:"I001"
}

document.getElementById ("Dell").src= LaptopOne.laptop
document.getElementById ("name1").innerText=LaptopOne.name
document.getElementById ("price1").innerText=LaptopOne.price
document.getElementById ("original1").innerText=LaptopOne.originalPrice

var LaptopTwo = {
    laptop:"images/Hp.png",
    name: "Hp",
    price:60000,
    originalPrice:67000,
    itemId:"I002"
}
document.getElementById("Hp").src= LaptopTwo.laptop
document.getElementById("name2").innerText = LaptopTwo.name
document.getElementById("price2").innerText = LaptopTwo.price
document.getElementById("original2").innerText = LaptopTwo.originalPrice

var LaptopThree= {
    laptop:"images/lenovo.jpeg",
    name:"Lenovo",
    price:170000,
    originalPrice:178000,
    itemId:"I003"
}

document.getElementById("Lenovo").src =LaptopThree.laptop
document.getElementById ("name3").innerText=LaptopThree.name
document.getElementById ("price3").innerText=LaptopThree.price
document.getElementById ("original3").innerText=LaptopThree.originalPrice

var LaptopFour = {
    laptop:"images/Asus.jpeg",
    name:"Asus",
    price:80000,
    originalPrice:82500,
    itemId:"I004"
}
 
document.getElementById("Asus").src=LaptopFour.laptop
document.getElementById("name4").innerText=LaptopFour.name
document.getElementById("price4").innerText=LaptopFour.price
document.getElementById("original4").innerText=LaptopFour.originalPrice

var LaptopFive= {
    laptop:"images/apple.jpeg",
    name:"Apple",
    price:190000,
    originalPrice:193000,
    itemId:"I005"
}
document.getElementById ("Apple").src=LaptopFive.laptop
document.getElementById ("name5").innerText=LaptopFive.name
document.getElementById ("price5").innerText=LaptopFive.price
document.getElementById ("original5").innerText=LaptopFive.originalPrice

var LaptopSix = {
    laptop:"images/samsung.jpg",
    name:"Samsung",
    price:134000,
    originalPrice:138000,
    itemId:"I006"
}
document.getElementById ("Samsung").src=LaptopSix.laptop
document.getElementById("name6").innerText=LaptopSix.name
document.getElementById ("original6").innerText=LaptopSix.originalPrice
document.getElementById ("price6").innerText=LaptopSix.price



document.getElementById("laptop1").onclick=function(){
    window.location.href="click.html" +"?" + LaptopOne.itemId 
}
document.getElementById("laptop2").onclick=function() {
    window.location.href="click.html" +"?" + LaptopTwo.itemId
}

document.getElementById("laptop3").onclick=function() {
    window.location.href="click.html" +"?" + LaptopThree.itemId
}

document.getElementById("laptop4").onclick=function() {
    window.location.href="click.html" +"?" +LaptopFour.itemId
}

document.getElementById ("laptop5").onclick=function() {
    window.location.href="click.html" +"?"+LaptopFive.itemId
}
document.getElementById ("laptop6").onclick=function() {
    window.location.href="click.html" +"?"+LaptopSix.itemId
}