import app from "./api.js";

const form = document.querySelector('form')
document.addEventListener('DOMContentLoaded', ()=>{
    form.addEventListener('submit', manipulaForm)
})

async function manipulaForm(event) {
    event.preventDefault()

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Tarefa: fazer validação de campos obrigatórios

    try {
        const result = await app.loginUser({ email, senha })

        localStorage.setItem("token", result.token)

        // Controlando a navegação de página
        window.location.href = "src/pages/dashboard.html"

    } catch (error) {
        console.error(error)
        alert(`Erro ao cadastrar usuário: ${error.message}`)
    }
}
