import express from 'express';
import { promises as fs } from 'fs';

const imageRouter = express.Router();

imageRouter.get('/',[],async (req: express.Request,res: express.Response) =>{
    const metaData ={
        filename: (req.query.filename as unknown) as string,
        width: parseInt(<string>req.query.width),
        height: parseInt(<string>req.query.height)
    };
});

export default imageRouter;