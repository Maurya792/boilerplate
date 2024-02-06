"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const constants_1 = require("../../constants");
class FileUploadService {
    static addStartingSlash(val) {
        return val.startsWith("/") ? val : "/" + val;
    }
    static removeStartingSlash(val) {
        return val.startsWith("/") ? val.slice(1) : val;
    }
    static getFileLocation(storageKey, storageName) {
        return (this.assetDir +
            this.addStartingSlash(storageKey) +
            this.addStartingSlash(storageName));
    }
    static getFileURL(fileLocation, updatedFilename) {
        return `${constants_1.API_HOST}${this.removeStartingSlash((0, path_1.join)(fileLocation, updatedFilename))}`;
    }
    static getFileLocationFromURL(url) {
        let path = url.replace(constants_1.API_HOST, "");
        return this.removeStartingSlash((0, path_1.join)(path.replace("/" + (0, path_1.basename)(path), "")));
    }
    static saveFile({ file, storageName, storageKey, fileName, }) {
        const fileLocation = this.getFileLocation(storageKey, storageName);
        if (!(0, fs_1.existsSync)((0, path_1.join)(process.cwd(), fileLocation))) {
            (0, fs_1.mkdirSync)((0, path_1.join)(process.cwd(), fileLocation), { recursive: true });
        }
        const filePath = (0, path_1.join)(process.cwd(), fileLocation, fileName);
        const buffer = Buffer.from(file, "base64");
        (0, fs_1.writeFileSync)(filePath, buffer);
        const fileUrl = this.getFileURL(fileLocation, fileName);
        return fileUrl;
    }
    static async deleteFile(url) {
        new Promise(async () => {
            try {
                const fileLocation = this.getFileLocationFromURL(url);
                const files = (0, fs_1.readdirSync)((0, path_1.join)(fileLocation));
                for (const file of files) {
                    if (file.startsWith((0, path_1.parse)(url).name)) {
                        const filePath = (0, path_1.join)(fileLocation, (0, path_1.basename)(file));
                        (0, fs_1.unlinkSync)(filePath);
                        console.log(`[SUCCESS] Successfully deleted file located at: ${filePath}`);
                    }
                }
                (0, fs_1.rmdirSync)(fileLocation);
            }
            catch (err) {
                console.log("\n[ERROR] Something went wrong while deleting asset:", url, "\n", err);
            }
        });
    }
}
exports.FileUploadService = FileUploadService;
FileUploadService.assetDir = "/public/uploads";
//# sourceMappingURL=index.js.map