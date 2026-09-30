import conect from "../config/database";

async function listUsers() {
    try {
        const sql = `
        SELECT * FROM users;
    `;

        const [dados] = await conect.query(sql)
        return dados;
    } catch (error) {
        console.error(error)
        throw error
    }

}

async function registerUsers(nome, email, senha) {
    try {
        const sql = `
            INSERT INTO users (nome, email, senha) VALUES (?, ?, ?);
        `;

        const [dados] = await conect.query(sql, [nome, email, senha]);
        return dados;   
    } catch (error) {
        console.error(error)
        throw error
    }

}

async function findUserEmail(email) {
    try {
        const sql = `
            SELECT * FROM users WHERE email = ?
        `;

        const [dados] = await conect.query(sql, [email])
        return dados[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function findBYId(id){
    try {
        const sql = `
            SELECT * FROM users WHERE id = ?
        `;
        const [dados] = await conect.query(sql, [id])
        return dados[0]
    } catch (error) {
        console.error(error)
        throw error
    }
}

async function updateImage(id, imagem) {
    try {
        const sql=`
            UPDATE users SET imagem = ? WHERE id = ?
        `;

        const [dados] = await conect.query(sql, [imagem, id])
        return dados
        
    } catch (error) {
        console.error(error)
        throw error
    }
}

export default { listUsers, registerUsers, findUserEmail, findBYId, updateImage }