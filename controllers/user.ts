import { type Request,type Response,type NextFunction } from "express";
import {verify} from '../openai/openai';

export const loggin = async(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password} = req.body;
    try {
        const input_format = await verify({name,email,password});
        if(input_format==='0'){
            res.status(400).json({message:'Invalid input from UI'});
            return;
        }
        res.status(201).json({message:'successfully'});
    } catch (error ) {
        console.error(error);
        next(error)
    }
};