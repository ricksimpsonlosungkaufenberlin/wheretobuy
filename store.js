if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//Remove cart item
function ready() {
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var quantityInputs2 = document.getElementsByClassName('product-quantity-input')
    for (var i = 0; i < quantityInputs2.length; i++) {
        var input = quantityInputs2[i]
        input.addEventListener('change', quantityChanged2)
    }

    var quantityInputs3 = document.getElementsByClassName('querySelector-button1')
    // console.log('quantityInputs3',quantityInputs3)
    for (var i = 0; i < quantityInputs3.length; i++) {
        var input = quantityInputs3[i]
        input.addEventListener('click', quantityChanged2)
    }

    // function iframedisplay() {
    //     document.getElementById("hidden_iframe").style.display = "none";
    // }

    

    // redirect when button is clicked
    document.getElementById('mc-embedded-subscribe').addEventListener('click', validateEmail)
    
    
    
}



// ------------------ TESTING


function validateEmail() {
    var emailID = document.getElementById('entry.1270148595').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.getElementById('entry.1270148595').focus() ;
       return false;
    }
    // return(true);
    return(true , setTimeout(redirect,2000) );
    // return(true , iframedisplay(), redirect() );
 }

// setTimeout(myFunction, 2000);
function redirect()
    {
        location.href = "thankyou.html";
        
        // var url = "index.html";
        // window.location(url);
    }


// function purchaseClicked2() {
//     if (validateEmail2()) {
//         console.log(22)
//     } 
//     }

// ------------------ TESTING



function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassNam('cart-item')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}




function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        // input.value = 1
        input.value = 0
    }
    updateCartTotal()
}


function quantityChanged2(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        // input.value = 1
        input.value = 0
    }
    updateCartTotal2()
}




function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    // console.log('cartItemContainer1',cartItemContainer)
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        // console.log('quantity-old',quantity)
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total


    // CHANGE INPUT VALUE OF HIDDEN INPUTS FROM QUANTITY
    var quantityElement = document.getElementsByClassName('cart-quantity-input')[0]
    // document.getElementsByClassName('cart-quantity-input')[0]
    // console.log("product 1 input", quantityElement.value)

    // C0501nor value
    document.getElementById('entry.86856500').value = String(quantityElement.value)
    // C0502bs value
    document.getElementById('entry.935907669').value = String(document.getElementsByClassName('cart-quantity-input')[1].value)
    // C1001nor value
    document.getElementById('entry.1537239891').value = String(document.getElementsByClassName('cart-quantity-input')[2].value)
    // C1002bs value
    document.getElementById('entry.57361277').value = String(document.getElementsByClassName('cart-quantity-input')[3].value)
    // C2001 value
    document.getElementById('entry.868617270').value = String(document.getElementsByClassName('cart-quantity-input')[4].value)
    // O503 value
    document.getElementById('entry.655648236').value = String(document.getElementsByClassName('cart-quantity-input')[5].value)
    // A603 value
    document.getElementById('entry.1501222362').value = String(document.getElementsByClassName('cart-quantity-input')[6].value)
    // C5001 value
    document.getElementById('entry.189018723').value = String(document.getElementsByClassName('cart-quantity-input')[7].value)
    // 1101m value
    document.getElementById('entry.364445465').value = String(document.getElementsByClassName('cart-quantity-input')[8].value)
    // 1133 value
    document.getElementById('entry.612034025').value = String(document.getElementsByClassName('cart-quantity-input')[9].value)
    // 1133-3x value
    document.getElementById('entry.1025061278').value = String(document.getElementsByClassName('cart-quantity-input')[10].value)
    // 1133-6x value
    document.getElementById('entry.1772857745').value = String(document.getElementsByClassName('cart-quantity-input')[11].value)
    // 1101rat value
    document.getElementById('entry.273665196').value = String(document.getElementsByClassName('cart-quantity-input')[12].value)
    // 1133rat value
    document.getElementById('entry.1752811353').value = String(document.getElementsByClassName('cart-quantity-input')[13].value)
    // 1133rat-3x value
    document.getElementById('entry.2023322996').value = String(document.getElementsByClassName('cart-quantity-input')[14].value)
    // 1133rat-6x value
    document.getElementById('entry.1351909614').value = String(document.getElementsByClassName('cart-quantity-input')[15].value)
    
    // Total value
    document.getElementById('entry.1321278235').value = String(total)
    


}




function updateCartTotal2() {
    var cartItemContainer2 = document.getElementsByClassName('product-items')[0]
    // console.log('cartItemContainer2',cartItemContainer2)
    var cartRows2 = cartItemContainer2.getElementsByClassName('product-item')
    // console.log('cartRows2',cartRows2)
    var total2 = 0
    for (var i = 0; i < cartRows2.length; i++) {
        var cartRow2 = cartRows2[i]
        // console.log('cartRow2',cartRow2)
        var priceElement2 = cartRow2.getElementsByClassName('product-price')[0]
        var quantityElement2 = cartRow2.getElementsByClassName('product-quantity-input')[0]
        var price2 = parseFloat(priceElement2.innerText.replace('€', ''))
        var quantity2 = quantityElement2.value
        // console.log('quantityElement2',quantityElement2)
        // console.log('quantity2=',quantity2)
        
        total2 = total2 + (price2 * quantity2)
    }
    total2 = Math.round(total2 * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total2
    document.getElementsByClassName('cart-total-price2')[0].innerText = '€' + total2

    // CHANGE INPUT VALUE OF HIDDEN INPUTS FROM QUANTITY
    var quantityElement = document.getElementsByClassName('product-quantity-input')[0]
    // document.getElementsByClassName('cart-quantity-input')[0]
    // console.log("product 1 input", quantityElement.value)

    // C0501nor value
    document.getElementById('entry.86856500').value = String(quantityElement.value)
    // C0502bs value
    document.getElementById('entry.935907669').value = String(document.getElementsByClassName('product-quantity-input')[1].value)
    // C1001nor value
    document.getElementById('entry.1537239891').value = String(document.getElementsByClassName('product-quantity-input')[2].value)
    // C1002bs value
    document.getElementById('entry.57361277').value = String(document.getElementsByClassName('product-quantity-input')[3].value)
    // C2001 value
    document.getElementById('entry.868617270').value = String(document.getElementsByClassName('product-quantity-input')[4].value)
    // O503 value
    document.getElementById('entry.655648236').value = String(document.getElementsByClassName('product-quantity-input')[5].value)
    // A603 value
    document.getElementById('entry.1501222362').value = String(document.getElementsByClassName('product-quantity-input')[6].value)
    // C5001 value
    document.getElementById('entry.189018723').value = String(document.getElementsByClassName('product-quantity-input')[7].value)
    // 1101m value
    document.getElementById('entry.364445465').value = String(document.getElementsByClassName('product-quantity-input')[8].value)
    // 1133 value
    document.getElementById('entry.612034025').value = String(document.getElementsByClassName('product-quantity-input')[9].value)
    // 1133-3x value
    document.getElementById('entry.1025061278').value = String(document.getElementsByClassName('product-quantity-input')[10].value)
    // 1133-6x value
    document.getElementById('entry.1772857745').value = String(document.getElementsByClassName('product-quantity-input')[11].value)
    // 1101rat value
    document.getElementById('entry.273665196').value = String(document.getElementsByClassName('product-quantity-input')[12].value)
    // 1133rat value
    document.getElementById('entry.1752811353').value = String(document.getElementsByClassName('product-quantity-input')[13].value)
    // 1133rat-3x value
    document.getElementById('entry.2023322996').value = String(document.getElementsByClassName('product-quantity-input')[14].value)
    // 1133rat-6x value
    document.getElementById('entry.1351909614').value = String(document.getElementsByClassName('product-quantity-input')[15].value)
    
    // Total value
    document.getElementById('entry.1321278235').value = String(total2)
    



}
