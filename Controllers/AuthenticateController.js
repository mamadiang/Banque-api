const AuthenticateService = require("../Services/AuthenticateService");
const jwt = require('jsonwebtoken');
const config = require('../Config/config.json');


class AuthenticateController{
    async register(request, result){
        try{
            const token = await AuthenticateService.register(request.body);
            result.json({token: token});
        }catch(error){
            result.status(500),
            result.json({error: "Une erreur est survenue lors de l'inscription"})
        }
    }





    async login(request, result){
        try{
            const {email, password} = request.body;
            const token = await AuthenticateService.login(email, password);
            result.json({token: token})
        } catch(error){
            result.status(401),
            result.json({error: "Mot de passe ou email incorrect"})
        }
    }

    authenticateToken(request, result, next){
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split('')[1];

        if(!token){
            result.status(401);
            result.json({error: "Vous n'avez pas accés à cette route"});

        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if(error){
                result.status(401);
                return result.json({error: "Votre token n'est pas valide"});
            }
            request.user= user;
            next();
        })
    }
}

module.exports= new AuthenticateController();