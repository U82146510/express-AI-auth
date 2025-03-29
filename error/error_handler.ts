import { type Request,type Response,type NextFunction } from "express";

export const error_handler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.error(err.stack);
    res.status(500).json({message:'Internal server error'});
};