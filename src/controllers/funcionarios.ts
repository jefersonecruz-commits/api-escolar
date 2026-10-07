import {Request, Response} from "express";
import {prisma} from "../../config/prisma";
import {handleErrors} from "../helpers/handleErrors";

export default {
    login: async (request: Request, response: Response) => {
        try {
            const {email, senha} = request.body;

            if (!email || !senha){
                return response.status(400).json("dados incompletos");
            }
        }catch (e) {
            return handleErrors(e, response);
        }
    }
}