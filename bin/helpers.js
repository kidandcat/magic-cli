"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("src/constants");
const { execSync } = require("child_process");
const fs = require("fs");
function generateApp(name) {
    try {
        execSync("git clone https://github.com/kidandcat/architecture-react-hot.git");
        exports.deleteFolderRecursive("./architecture-react-hot/.git");
        fs.renameSync("architecture-react-hot", name);
        execSync("npm install -g parcel-bundler");
        execSync("npm install -g tsc");
    }
    catch (e) {
        console.log("Process failed, reverting...", e.message);
        exports.deleteFolderRecursive("architecture-react-hot");
        console.log("Reverted");
    }
}
exports.generateApp = generateApp;
exports.deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                exports.deleteFolderRecursive(curPath);
            }
            else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
function checkExists(path) {
    return fs.existsSync(path);
}
exports.checkExists = checkExists;
function generateAction() {
    if (checkExists("./src/State/actions.ts")) {
        fs.appendFileSync("./src/State/actions.ts", constants_1.action);
    }
    else if (checkExists("./State/actions.ts")) {
        fs.appendFileSync("./State/actions.ts", constants_1.action);
    }
    else if (checkExists("./actions.ts")) {
        fs.appendFileSync("./actions.ts", constants_1.action);
    }
    else {
        console.error("Cannot find actions.ts");
    }
}
exports.generateAction = generateAction;
function generateEffect() {
    if (checkExists("./src/State/effects.ts")) {
        fs.appendFileSync("./src/State/effects.ts", constants_1.effect);
    }
    else if (checkExists("./State/effects.ts")) {
        fs.appendFileSync("./State/effects.ts", constants_1.effect);
    }
    else if (checkExists("./effects.ts")) {
        fs.appendFileSync("./effects.ts", constants_1.effect);
    }
    else {
        console.error("Cannot find effects.ts");
    }
}
exports.generateEffect = generateEffect;
//# sourceMappingURL=helpers.js.map