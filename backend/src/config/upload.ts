import path from 'path';
import multer, { Options } from 'multer';

const options: Options = {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename(req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};

export default options;
