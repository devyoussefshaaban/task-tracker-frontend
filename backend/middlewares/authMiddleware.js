import User from '../models/userModel.js';
import jwt from 'jsonwebtoken'

export const auth = async(req, res, next) => {
    let token;
    
    const headerAuth = req.headers.authorization

    if(headerAuth && headerAuth.startsWith("Bearer")){
        token = headerAuth.split(" ")[1]

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const user = await User.findById(decoded.userId)
        if (user){
            req.user = user;
            next()
        }else {
            res.status(401)
            throw new Error("Not authorized.")
        }
    }else{
        res.status(403)
        throw new Error("Not authorized, not token.")
    }
}