function populateProductContainer(){
    let htmlGridCumulative = '';
    const productsGrid= document.querySelector('.js-products-grid');

    products.forEach((product,index)=>{
        let htmlProduct = `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src= ${product.image}>
                </div>

                

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars*10}.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    $${(product.priceCents/100).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select class = 'js-select-quantity'>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary js-add-to-cart"
                data-product-name ="${product.name}"
                data-product-price = "${product.priceCents}"
                data-product-id = "${product.id}"
                >
                    Add to Cart
                </button>
            </div>
        `;
        htmlGridCumulative += htmlProduct;
        productsGrid.innerHTML = htmlGridCumulative;
    })
    

}





populateProductContainer();



document.querySelectorAll('.js-add-to-cart').forEach((button,index)=>{
    button.addEventListener('click',()=>{
        console.log('Product Added');

        const productID = button.dataset.productId;
        const prodName = button.dataset.productName;
        const selectedQuantity = parseInt(button.parentElement.querySelector('.js-select-quantity').value);
        const price = button.dataset.productPrice;
        


    
        let itemIndex = cart.findIndex((item)=>{
            return item.productID === productID;
        })

        if(itemIndex === -1){
            cart.push(
            {
                productID:productID,
                productName: prodName,
                quantity: selectedQuantity,
                price:price
            }
        );
        }
        else{
            cart[itemIndex].quantity += selectedQuantity;
        };
        
        console.log(cart);
    })
})

