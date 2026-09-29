function roleMiddleware (role){
    return function(req, res, next){
        if(req.user.role !== role){
            let message = "Acesso negado."
            return res.status(403).json({message})
        }
        next()
    }
}

export default roleMiddleware