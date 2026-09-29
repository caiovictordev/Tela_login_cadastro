import app from "./api.js";

const form = document.querySelector('form')
document.addEventListener('DOMContentLoaded', ()=>{
    form.addEventListener('submit', manipulaForm)
})

async function manipulaForm(event) {
    event.preventDefault()

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmPassword').value;

    if (senha != confirmaSenha) {
        alert('As senhas não correnpondem.')
        return
    }

    try {
        await app.registerUser({ nome, email, senha })
        alert('Usuário cadastrado com sucesso.')
    } catch (error) {
        console.error(error)
        alert(`Erro ao cadastrar usuário: ${error.message}`)
    }
}