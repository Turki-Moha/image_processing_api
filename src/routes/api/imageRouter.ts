import express from 'express';
import { promises as fs } from 'fs';
import { fileValidate, storeImage } from '../../imageChecker';
import resizer from '../../utilities/imageSizer';

const imageRouter = express.Router();

imageRouter.get(
  '/',
  [fileValidate, storeImage],
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.filename as string;
    const height = parseInt(<string>req.query.height);
    const width = parseInt(<string>req.query.width);
    const newImageSpecs = {
      filename,
      height,
      width,
    };

    await resizer(newImageSpecs)
      .then(async (newImagePath: string) => {
        res.writeHead(200);
        const imageSpec = await fs.readFile(newImagePath);
        res.end(imageSpec);
      })
      .catch(() => {
        res.end('error occured');
      });
  }
);

export default imageRouter;
