import sharp from 'sharp';

const resizer = async (metaData: {
  filename: string;
  height: number;
  width: number;
}): Promise<string> => {
  const newImagePath = `assets/thumb/${metaData.filename}-${metaData.height}-${metaData.width}.jpg`;
  //using the sharp documentation to resize and create new folder https://www.npmjs.com/package/sharp
  try {
    await sharp(`assets/full/${metaData.filename}.jpg`)
      .resize(metaData.width, metaData.height)
      .toFile(newImagePath);
    return newImagePath;
  } catch {
    return 'error occured';
  }
};

export default resizer;
