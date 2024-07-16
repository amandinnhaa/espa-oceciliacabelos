function addToCart(product) {
    alert(product + " foi adicionado ao carrinho!");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Informações enviadas com sucesso!");
    this.reset();
});
