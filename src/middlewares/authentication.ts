import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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

        const [beader, tokem] = authHeader.split(" ");

        if(beader !== "beader" || !tokem) {
            return response.status(401).json("não autenticado");
        }
        const decoded = jwt.verify(tokem, process.env.JWT_SECRET!);

        if (!request.body) {
            request.body = {};
        }
        request.body.user = decoded as { id: number, cargo: string };

        next();
    }catch (e) {
        console.error(e);
        return response.status(401).json("não autenticado");
    }
}