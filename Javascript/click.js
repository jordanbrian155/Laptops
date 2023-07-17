var LaptopOne = {
    laptop:"images/dell.jpeg",
    name: "Dell",
    price:"Ksh:" +200000,
    originalPrice:"Ksh:"+228000,
    itemId:"I001"
}


var LaptopTwo = {
    laptop:"images/Hp.png",
    name: "Hp Elite Book",
    price:"now ksh:" +60000,
    originalPrice: "was ksh:" +67000,
    itemId:"I002"
}


var LaptopThree= {
    laptop:"images/lenovo.jpeg",
    name:"Lenovo",
    price:170000,
    originalPrice:178000,
    itemId:"I003"
}


var LaptopFour = {
    laptop:"images/Asus.jpeg",
    name:"Asus",
    price:80000,
    originalPrice:82500,
    itemId:"I004"
}


var LaptopFive= {
    laptop:"images/apple.jpeg",
    name:"Apple",
    price:190000,
    originalPrice:193000,
    itemId:"I005"
}

var LaptopSix = {
    laptop:"images/samsung.jpg",
    name:"Samsung",
    price:134000,
    originalPrice:138000,
    itemId:"I006"
}

var selectId = decodeURIComponent(window.location.search)
var selectedItem = selectId.substring(1)
console.log(selectedItem)
 
if(selectedItem==LaptopOne.itemId) {
    document.getElementById("Dell").src=LaptopOne.laptop
    document.getElementById("name1").innerText=LaptopOne.name
    document.getElementById("price1").innerText=LaptopOne.price
    document.getElementById("original1").innerText=LaptopOne.originalPrice
    var cost = LaptopOne.price
    qty(cost)
}

else if(selectedItem==LaptopTwo.itemId) {
    document.getElementById ("Dell").src=LaptopTwo.laptop
    document.getElementById ("name1").innerText=LaptopTwo.name
    document.getElementById ("price1").innerText=LaptopTwo.price
    document.getElementById ("original1").innerText=LaptopTwo.originalPrice
    var cost =LaptopTwo.price
    qty(cost)
}
else if (selectedItem==LaptopThree.itemId) {
    document.getElementById("Dell").src=LaptopThree.laptop
    document.getElementById("name1").innerText=LaptopThree.name
    document.getElementById("price1").innerText=LaptopThree.price
    document.getElementById("original1").innerText=LaptopThree.originalPrice
    var cost = LaptopThree.price
    qty(cost)
}
else if (selectedItem==LaptopFour.itemId) {
    document.getElementById("Dell").src=LaptopFour.laptop
    document.getElementById("name1").innerText=LaptopFour.name
    document.getElementById("price1").innerText=LaptopFour.price
    document.getElementById("original1").innerText=LaptopFour.originalPrice
    var cost = LaptopFour.price
    qty(cost)
}

else if (selectedItem==LaptopFive.itemId) {
    document.getElementById("Dell").src=LaptopFive.laptop
    document.getElementById("name1").innerText=LaptopFive.name
    document.getElementById("price1").innerText=LaptopFive.price
    document.getElementById("original1").innerText=LaptopFive.originalPrice
    var cost = LaptopFive.price
    qty(cost)
}

else if (selectedItem==LaptopSix.itemId) {
    document.getElementById("Dell").src=LaptopSix.laptop
    document.getElementById("name1").innerText=LaptopSix.name
    document.getElementById("price1").innerText=LaptopSix.price
    document.getElementById("original1").innerText=LaptopSix.originalPrice
    var cost = LaptopSix.price
    qty(cost)
}


function qty (cost) {
    document.getElementById ("quantity").onkeyup = function() {
        let quantity = document.getElementById ("quantity").value
        let amount = cost
        if (quantity > 1) {
            Total = quantity*amount
            document.getElementById("Total").innerText= Total
            userlocation(Total)
        }
        else if (quantity==1) {
            Total=amount
            document.getElementById("Total").innerText=Total
            userlocation(Total)
        }
    }
}

function userlocation(Total) {
    document.getElementById("places").onchange=function() {
        let delivery = document.getElementById("places").value
        let Roysambu= 400
        let Kasarani =450
        let Ruiru= 600
        let Ngara =120
        if (delivery =="Roysambu") {
            document.getElementById ("Total").innerText=Roysambu + Total
        }
        else if (delivery =="Kasarani") {
            document.getElementById ("Total").innerText = Kasarani + Total
        }
        else if (delivery =="Ruiru") {
            document.getElementById ("Total").innerText = Ruiru + Total
        }
        else if (delivery =="Ngara") {
            document.getElementById ("Total").innerText = Ngara + Total
        }
        else if (delivery ==" ") {
            document.getElementById ("Total").innerText = Total
        }
    }
}