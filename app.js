import fs from "node:fs";
import path from "node:path";

const files = fs.readdirSync("downloads");
console.log(files.length);

for (const file of files) {
  const extension = path.extname(file);
  const mainPath = "downloads";

  switch (extension) {
    case ".pdf":
      {
        const subfolder = path.join(mainPath, "PDF");
        fs.mkdirSync(subfolder, { recursive: true });
        const source = path.join(mainPath, file);
        const destination = path.join(subfolder, file);
        fs.renameSync(source, destination);
      }
      break;

    case ".jpg":
      {
        const subfolder = path.join(mainPath, "JPG");
        fs.mkdirSync(subfolder, { recursive: true });
        const source = path.join(mainPath, file);
        const destination = path.join(subfolder, file);
        fs.renameSync(source, destination);
      }
      break;

    case ".png":
      {
        const subfolder = path.join(mainPath, "PNG");
        fs.mkdirSync(subfolder, { recursive: true });
        const source = path.join(mainPath, file);
        const destination = path.join(subfolder, file);
        fs.renameSync(source, destination);
      }
      break;

    case ".mp3":
      {
        const subfolder = path.join(mainPath, "MP3");
        fs.mkdirSync(subfolder, { recursive: true });
        const source = path.join(mainPath, file);
        const destination = path.join(subfolder, file);
        fs.renameSync(source, destination);
      }
      break;

    case ".mp4":
      {
        const subfolder = path.join(mainPath, "MP4");
        fs.mkdirSync(subfolder, { recursive: true });
        const source = path.join(mainPath, file);
        const destination = path.join(subfolder, file);
        fs.renameSync(source, destination);
      }
      break;

    case ".txt":
      {
        const subfolder = path.join(mainPath, "TEXT");
        fs.mkdirSync(subfolder, { recursive: true });
        const source = path.join(mainPath, file);
        const destination = path.join(subfolder, file);
        fs.renameSync(source, destination);
      }
      break;
    // default: {
    //   const subfolder = path.join(mainPath, "OTHERS");
    //   fs.mkdirSync(subfolder, { recursive: true });
    //   const source = path.join(mainPath, file);
    //   const destination = path.join(subfolder, file);
    //   fs.renameSync(source, destination);
    // }
  }
}
