var inputContent = document.getElementById("input-value")
var product = document.querySelectorAll(".product-result")

inputContent.addEventListener("keyup", function (event) {
    searchValue = event.target.value.toUpperCase()
    for (var i = 0; i < product.length; i++) {
        var productName = product[i].querySelector("h2").textContent
        if (productName.toUpperCase().indexOf(searchValue) < 0) {
            product[i].style.display = "none"
        }
        else {
            product[i].style.display = "block"
        }
    }
})