import app from "./api.js"

//Função de Logout 
const buttonLogout = document.getElementById('botao-logout')
buttonLogout.addEventListener('click', ()=>{
    localStorage.removeItem("token")
    window.location.href = "../../index.html"
})
document.addEventListener('DOMContentLoaded', () => verifyAuthenticator())

async function verifyAuthenticator() {
    const token = localStorage.getItem("token")

    if(!token){
        alert("Login inválido")
        window.location.href = '../../index.html'
    }
    try {
        const result = await app.findUserAutheticator()
        const user = result.user

        document.getElementById('usuario').innerText = `User: ${user.email}\nNível: ${user.role}`
        // Verificando o tipo do Usuário
        if(user.role === 'admin'){
            const list = document.getElementById('lista-usuarios')
            list.style.display = 'block'
        }
    } catch (error) {
        console.error(error)
    }
}
