document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (nome === "" || email === "" || mensagem === "") {
        formMessage.innerHTML = "<p class='error'>Por favor preencha todos os campos.</p>";
        return;
    }

    if (!email.includes("@")) {
        formMessage.innerHTML = "<p class='error'>Email inválido.</p>";
        return;
    }

    formMessage.innerHTML = "<p class='success'>Mensagem enviada com sucesso! Entraremos em contacto brevemente.</p>";

    document.getElementById("contactForm").reset();
});