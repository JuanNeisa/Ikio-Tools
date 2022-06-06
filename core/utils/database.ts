import path from "path";
import fs from "fs";

export function fileExists(path_: string) {
    try {
        fs.accessSync(path.join(path_));
        return true;
    } catch (e){
        return false
    }
  }