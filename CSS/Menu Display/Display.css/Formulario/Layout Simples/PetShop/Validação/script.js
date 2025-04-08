document.getElementById('loginForm').addEventListener("submit", function(event){
    /* ELEMENTO -- MÉTODO -- NOME */ 
    
    event.preventDefault(); /* Impede o envio do formulário */  

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    /* VALIDAÇÃO DOS CAMPOS */
    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (password.length < 8) {
        alert("A senha deve ter ao menos 8 caracteres.")
        return;
    }

    localStorage.setItem("username", username);
    /* Salva informação no Local Strorage (ARMAZENAMENTO LOCAL) */

    /*Se a validação passar, abre o painel*/
    alert("Login bem sucedido"); // Pop-up de sucesso 
    window.location.href = "painel.html"; // Abre um painel
});
