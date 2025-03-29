import express,{type Application,type Request,type Response} from 'express';
import {error_handler} from './error/error_handler';
import {auth} from './routes/user';


const app:Application = express();
const port:number = 3000;

app.use(express.json());
app.use('/',auth);
app.use(error_handler);

const start = async()=>{
    try {
        app.listen(port,()=>console.log("On"));
    } catch (error) {
        console.error(error);
    }
};

start();