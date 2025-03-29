import { Router } from "express";
import {loggin} from '../controllers/user';

export const auth:Router = Router();
auth.post('/login',loggin);