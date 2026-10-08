import { Request, Response, NextFunction } from "express";

export function authentication(  
    request: Request,
    response: Response,
    next: NextFunction,
){
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return response.status(401).json("não autenticado");
        }
    }catch (e) {
        console.error(e);
        return response.status(401).json("não autenticado");
    }
}