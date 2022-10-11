import express from 'express';
import { promises as fs } from 'fs';
//checking if the file parameters inserted is true
const fileValidate = (
    req:express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const dataQuery = req.query;
    fs.readdir("assets/full").then((content) =>{
        if(!content.includes((dataQuery.filename as string)+".jpg")){
            next('image is not found!');
        }
    });
    if(dataQuery.width === undefined){
        next('spcefiy width');
    }
    if(dataQuery.height === undefined){
        next('spcefiy height');
    }
    if(dataQuery.filename === undefined){
        next('no such file founded');
    }
    next();
};

const chache = async(
    req:express.Request,
    res:express.Response,
    next:express.NextFunction
) => {
    const dataQuery = req.query;
    const newImagePath = `assets/thumb/${dataQuery.filename}-${dataQuery.height}-${dataQuery.width}.jpg`
    await fs
    .readFile(newImagePath)
    .then(async (chachedFile: Buffer) =>{
        res.end(chachedFile);
    })
    .catch(() =>{
        next();
    })
}

export {fileValidate ,chache};