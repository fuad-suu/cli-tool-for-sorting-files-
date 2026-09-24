// import fs from "node:fs";
// import path from "node:path";

// const files = fs.readdirSync("downloads");
// console.log(files.length);

// for (const file of files) {
//   const extension = path.extname(file);
//   const mainPath = "downloads";

//   switch (extension) {
//     case ".pdf":
//       {
//         const subfolder = path.join(mainPath, "PDF");
//         fs.mkdirSync(subfolder, { recursive: true });
//         const source = path.join(mainPath, file);
//         const destination = path.join(subfolder, file);
//         fs.renameSync(source, destination);
//       }
//       break;

//     case ".jpg":
//       {
//         const subfolder = path.join(mainPath, "JPG");
//         fs.mkdirSync(subfolder, { recursive: true });
//         const source = path.join(mainPath, file);
//         const destination = path.join(subfolder, file);
//         fs.renameSync(source, destination);
//       }
//       break;

//     case ".png":
//       {
//         const subfolder = path.join(mainPath, "PNG");
//         fs.mkdirSync(subfolder, { recursive: true });
//         const source = path.join(mainPath, file);
//         const destination = path.join(subfolder, file);
//         fs.renameSync(source, destination);
//       }
//       break;

//     case ".mp3":
//       {
//         const subfolder = path.join(mainPath, "MP3");
//         fs.mkdirSync(subfolder, { recursive: true });
//         const source = path.join(mainPath, file);
//         const destination = path.join(subfolder, file);
//         fs.renameSync(source, destination);
//       }
//       break;

//     case ".mp4":
//       {
//         const subfolder = path.join(mainPath, "MP4");
//         fs.mkdirSync(subfolder, { recursive: true });
//         const source = path.join(mainPath, file);
//         const destination = path.join(subfolder, file);
//         fs.renameSync(source, destination);
//       }
//       break;

//     case ".txt":
//       {
//         const subfolder = path.join(mainPath, "TEXT");
//         fs.mkdirSync(subfolder, { recursive: true });
//         const source = path.join(mainPath, file);
//         const destination = path.join(subfolder, file);
//         fs.renameSync(source, destination);
//       }
//       break;
//   }
// }

import fs from "node:fs";
import path from "node:path";

const ext_map = {
  ".pdf": "PDF",
  ".jpg": "JPG",
  ".png": "PNG",
  ".mp3": "MP3",
  ".mp4": "MP4",
  ".txt": "TEXT",
};

const mainPath = "downloads";
const files = fs.readdirSync(mainPath);
console.log(`Found ${files.length} files`);

for (const file of files) {
  const ext = path.extname(file);
  const folderName = ext_map[ext] ?? "OTHERS";

  const fullpath = path.join(mainPath, file);
  if (fs.statSync(fullpath).isDirectory()) continue;

  const subfolder = path.join(mainPath, folderName);
  fs.mkdirSync(subfolder, { recursive: true });
  fs.renameSync(fullpath, path.join(subfolder, file));
}
