import type { NextFunction, Request, Response } from "express";
import jwt,{ type JwtPayload } from 'jsonwebtoken';


if(!process.env.JWT_PASS){
     throw new Error("❌ Missing JWT_PASS in .env");
}
const JWT_SECRET=process.env.JWT_PASS;

declare global {
    namespace Express {
        interface Request {
            userId?: string | number;
        }
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

   const header = req.header('authorization');

   if (!header) {
       return res.status(403).json({
           message: "You are not logged in"
       });
   }

   const token = header.startsWith('Bearer ') ? header.slice(7) : header;

   try {
       const decoded = jwt.verify(token, JWT_SECRET as string);

       if (decoded) {
            if (typeof decoded === "string") {
                return res.status(403).json({
                    message: "You are not logged in"
                });
            }
            req.userId = (decoded as JwtPayload).id;
            return next();
        } else {
            return res.status(403).json({
                message: "You are not logged in"
            });
        }
   } catch (err) {
       return res.status(403).json({
           message: "You are not logged in"
       });
   }
}