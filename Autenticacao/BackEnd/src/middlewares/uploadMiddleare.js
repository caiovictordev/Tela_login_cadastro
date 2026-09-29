import multer from "multer"

// 1° - Criar as configurações do arquivo

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "uploads/")
    },
    filename:(req, file, cb)=>{
        const novoArquivo = Date.now() + "-" + file.originalname
        cb(null, novoArquivo)
    }
})// uploads/122343-foto.png
// uploads/789090-foto.png

const upload = multer({
    storage : storage
})

export default upload;