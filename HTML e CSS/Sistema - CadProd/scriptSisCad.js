document.getElementById('loginForm').addEventListener("submit", function(event){
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validação dos campos
    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter ao menos 8 caracteres.");
        return;
    }

    // Armazenar no localStorage
    localStorage.setItem("username", username);

    // Sucesso no login
    alert("Login bem sucedido");
    window.location.href = "PainelSisCad.html";
});
