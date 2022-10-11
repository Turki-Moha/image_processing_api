import express from 'express';
import { promises as fs } from 'fs';
import {fileValidate,chache} from '../../imageChecker';
import resizer from '../../utilities/imageSizer';

const imageRouter = express.Router();

export default imageRouter;