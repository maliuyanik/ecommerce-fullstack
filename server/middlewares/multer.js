// server/middlewares/multer.js

import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    const uploadPath = path.join(__dirname, '../temp');


    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }


    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {

    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});


const upload = multer({ storage });

export default upload;
