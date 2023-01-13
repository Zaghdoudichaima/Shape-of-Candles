// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//     destination: "",
//     filename: (req, file, cb) => {
//         cb(
//             null,
//             file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//         );
//     },
// });
// const upload = multer({
//     storage: storage,
  
//     fileFilter: (req, file, cb) => {
//         const filterTypes = /jpeg|jpg|png/gi;
//         const mimeType = filterTypes.test(file.mimetype);
//         if (mimeType) {
//             cb(null, true);
//         } else {
//             cb(null, false);
//         }
//     },
// });
// module.exports = upload;
