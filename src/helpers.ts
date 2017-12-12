import { action, effect } from "src/constants";

const { execSync } = require("child_process");
const fs = require("fs");

export function generateApp(name: string): void {
  try {
    execSync(
      "git clone https://github.com/kidandcat/architecture-react-hot.git"
    );
    deleteFolderRecursive("./architecture-react-hot/.git");
    fs.renameSync("architecture-react-hot", name);
    execSync("npm install -g parcel-bundler");
    execSync("npm install -g tsc");
  } catch (e) {
    console.log("Process failed, reverting...", e.message);
    deleteFolderRecursive("architecture-react-hot");
    console.log("Reverted");
  }
}

export const deleteFolderRecursive = function(path: string): void {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index) {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

export function checkExists(path: string): boolean {
  return fs.existsSync(path);
}

export function generateAction() {
  if (checkExists("./src/State/actions.ts")) {
    fs.appendFileSync("./src/State/actions.ts", action);
  } else if (checkExists("./State/actions.ts")) {
    fs.appendFileSync("./State/actions.ts", action);
  } else if (checkExists("./actions.ts")) {
    fs.appendFileSync("./actions.ts", action);
  } else {
    console.error("Cannot find actions.ts");
  }
}

export function generateEffect() {
  if (checkExists("./src/State/effects.ts")) {
    fs.appendFileSync("./src/State/effects.ts", effect);
  } else if (checkExists("./State/effects.ts")) {
    fs.appendFileSync("./State/effects.ts", effect);
  } else if (checkExists("./effects.ts")) {
    fs.appendFileSync("./effects.ts", effect);
  } else {
    console.error("Cannot find effects.ts");
  }
}
