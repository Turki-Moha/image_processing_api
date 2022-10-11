import e from "express";
import sharp from "sharp";

const resizer = async(metaData: {
    filename:string;
    height: number;
    width: number;
}):Promise<string | null>=> {
    const newImagePath = `assets/thumb/${metaData.filename}-${metaData.height}-${metaData.width}`;
    //using the sharp documentation to resize and create new folder https://www.npmjs.com/package/sharp
    try{
    await sharp(`assets/full/${metaData.filename}.jpg`)
    .resize(metaData.height,metaData.width)
    .toFile(newImagePath);
    return newImagePath;
    }catch{
        return 'error occured';
    }
};

export default resizer;