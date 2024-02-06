import {
  readdirSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from "fs";
import { basename, join, parse } from "path";
import { API_HOST } from "../../constants";

export class FileUploadService {
  private static assetDir = "/public/uploads";
  private static addStartingSlash(val: string) {
    return val.startsWith("/") ? val : "/" + val;
  }
  private static removeStartingSlash(val: string) {
    return val.startsWith("/") ? val.slice(1) : val;
  }
  private static getFileLocation(storageKey: string, storageName: string) {
    return (
      this.assetDir +
      this.addStartingSlash(storageKey) +
      this.addStartingSlash(storageName)
    );
  }
  private static getFileURL(fileLocation: string, updatedFilename: string) {
    return `${API_HOST}${this.removeStartingSlash(
      join(fileLocation, updatedFilename)
    )}`;
  }
  //   private static getFilePathFromURL(url: string) {
  //     let path = url.replace(API_HOST, "");
  //     return this.publicDir + path;
  //   }
  private static getFileLocationFromURL(url: string) {
    let path = url.replace(API_HOST, "");
    return this.removeStartingSlash(
      join(path.replace("/" + basename(path), ""))
    );
  }
  public static saveFile({
    file,
    storageName,
    storageKey,
    fileName,
  }: {
    file: string;
    storageName: string;
    storageKey: string;
    fileName: string;
  }) {
    const fileLocation = this.getFileLocation(storageKey, storageName);
    if (!existsSync(join(process.cwd(), fileLocation))) {
      mkdirSync(join(process.cwd(), fileLocation), { recursive: true });
    }
    const filePath = join(process.cwd(), fileLocation, fileName);
    const buffer = Buffer.from(file, "base64");
    writeFileSync(filePath, buffer);
    const fileUrl = this.getFileURL(fileLocation, fileName);
    return fileUrl;
  }
  public static async deleteFile(url: string) {
    new Promise<void>(async () => {
      try {
        const fileLocation = this.getFileLocationFromURL(url);
        const files = readdirSync(join(fileLocation));
        for (const file of files) {
          if (file.startsWith(parse(url).name)) {
            const filePath = join(fileLocation, basename(file));
            unlinkSync(filePath);
            console.log(
              `[SUCCESS] Successfully deleted file located at: ${filePath}`
            );
          }
        }
        rmdirSync(fileLocation);
      } catch (err) {
        console.log(
          "\n[ERROR] Something went wrong while deleting asset:",
          url,
          "\n",
          err
        );
      }
    });
  }
}
