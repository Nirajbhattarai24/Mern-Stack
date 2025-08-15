//middleware because it is needed for other areas too, to upload file
import path from "path";
import multer from "multer";
import fs from "fs";
class FileServiceMiddleware {
  folderExists(folderName) {
    const filePath = `public/${folderName}`;
    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
      return true;
    } else {
      return true;
    }
  }
  fileUpload(uploadPath) {
    this.folderExists(uploadPath);
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "public/" + uploadPath);
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    });
    return multer({ storage: storage });
  }
}
export default FileServiceMiddleware;

let obj = new FileServiceMiddleware();
obj.folderExists("users");
