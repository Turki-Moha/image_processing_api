import express, { query } from 'express';
import { promises as fs } from 'fs';

//checking if the file parameters inserted is true
const fileValidate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const filename = req.query.filename as string;
  const height = parseInt(<string>req.query.height);
  const width = parseInt(<string>req.query.width);
  fs.readdir('assets/full').then((content) => {
    if (!content.includes(filename + '.jpg')) {
      next('image is not found!');
    }
  });
  if (height < 1) {
    next('height must be greater than 1');
  }
  if (width < 1) {
    next('width must be greater than 1');
  }
  if (height === undefined || width === undefined) {
    next('spcefiy height or height');
  }
  if (filename === undefined) {
    next('no such file founded');
  }
  next();
};

const storeImage = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const filename = req.query.filename as string;
  const height = parseInt(<string>req.query.height);
  const width = parseInt(<string>req.query.width);
  const newImagePath = `assets/thumb/${filename}-${height}-${width}.jpg`;
  await fs
    .readFile(newImagePath)
    .then(async (chachedFile: Buffer) => {
      res.end(chachedFile);
    })
    .catch(() => {
      next();
    });
};

export { fileValidate, storeImage };
