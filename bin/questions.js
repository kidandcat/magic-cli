"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Qlist = (options) => ({
    ...options,
    choices: Object.keys(options.choices),
    type: "list",
    name: "data"
});
exports.Qcheckbox = (options) => ({
    ...options,
    choices: Object.keys(options.choices),
    type: "checkbox",
    name: "data"
});
exports.Qconfirm = (options) => ({
    ...options,
    type: "confirm",
    name: "data"
});
exports.Qpassword = (options) => ({
    ...options,
    type: "password",
    name: "data"
});
exports.Qinput = (options) => ({
    ...options,
    type: "input",
    name: "data"
});
//# sourceMappingURL=questions.js.map