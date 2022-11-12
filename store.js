if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//Remove cart item
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    // document.getElementsByClassName('btn-purchase2')[0].addEventListener('click', purchaseClicked2)
    
   }

// ------------------ TESTING
function purchaseClicked2() {
    // alert('Thank you for your order')
    // document.getElementById("gform").fadeOut(2000)
    // document.getElementById("gform").prepend('Your submission has been processed...');
    // inputnames.value = ''
    
    // document.getElementById("gform").onclick = 
    
    


    // console.log("Name value", document.getElementById('entry.2039904732').value)
    
    // document.getElementById('entry.1270148595').value = "22"

    // console.log("product 1 value after", document.getElementById('entry.1270148595').value)

    if (validateEmail2()) {

    // var cartItems = document.getElementsByClassNam('cart-item')[0]
    // var product1input = document.getElementsByClassName("product1-input")[0]
    // console.log("total 1 input", product1input)

    // document.getElementById("gform").addEventListener("click", function () {
        
    //     // Adding product numbers as hidden input to form
       
    //     // SUBMITTING FORM
    //     form.submit();
        
    // });

        // let gformurl = () => {
        //     return 'https://docs.google.com/forms/d/e/1FAIpQLSeVl7BQY7aEcPId0zRqVZHlTNKEO74DmW6dVcZTfSOyjHEifA/formResponse?'
        // };
        // form.submit();
        // function gformurl() {
        //     return 'https://docs.google.com/forms/d/e/1FAIpQLSeVl7BQY7aEcPId0zRqVZHlTNKEO74DmW6dVcZTfSOyjHEifA/formResponse?'
        //     }
        // console.log(gformurl()) 
        
        // form.submit();
        console.log(22)
        
        // location.href = "thankyou.html";
    // setTimeout(redirect2, 1000);
    } 
    

    // function redirect() {
    //     console.log(1)
    //     setTimeout(myFunction, 2000);
    //     console.log(2)
    //     location.href = "index.html";
    //     console.log(3)
    // };
   
}

// ------------------ TESTING
function redirect()
    {
        location.href = "thankyou.html";
        
        // var url = "index.html";
        // window.location(url);
    }


function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassNam('cart-item')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}



//Remove cart item
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
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

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


//Adding items to Cart
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="€{imageSrc}" width="100" height="100">
            <span class="cart-item-title">€{title}</span>
        </div>
        <span class="cart-price cart-column">€{price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
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


function validateEmail() {
    var emailID = document.getElementById('entry.1270148595').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter correct email ID")
       document.getElementById('entry.1270148595').focus() ;
       return false;
    }
    return( true , redirect() );
 }

//  var valEmail = validateEmail()
//  console.log('validateEmail', valEmail)
