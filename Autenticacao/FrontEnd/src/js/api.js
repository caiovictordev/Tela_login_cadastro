async function verifyResponse(response) {
    if (!response.ok) {
        const erro = await response.json()

        throw new Error(erro.message || `Erro http: ${response.status}`)
    }
    return response
}

// Criando função auxiliar para obter o token armazenado
function obterToken() {
    return localStorage.getItem('token')
}

// Criando o http header para requisições autenticadas
function headerAuth() {
    const token = obterToken()
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

function httpHeader() {
    return {
        "Content-Type": "application/json",
    }
}

const url_base = 'http://localhost:3333/users'

const app = {
    async listUser() {
        try {
            const response = await fetch(`${url_base}`, {
                method: "GET",
                headers: headerAuth()
            })

            await verifyResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    async registerUser(register) {
        try {
            const response = await fetch(`${url_base}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(register)
            })
            await verifyResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    },

    async loginUser(loginUser) {
        try {
            const response = await fetch(`${url_base}/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginUser)
            })

            await verifyResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    },
    async findUserAutheticator(){
        try {
            const response = await fetch(`${url_base}auth/login`,{
                method : 'GET',
                headers: headerAuth()
            })
            await verifyResponse(response)
            return response.json()
        } catch (error) {
            console.error(error)
            throw error
        }
    }

}

export default app;

