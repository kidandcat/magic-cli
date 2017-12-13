#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questions_1 = require("./questions");
const constants_1 = require("./constants");
const helpers_1 = require("./helpers");
const cmd = require("inquirer");
cmd
    .prompt(questions_1.Qlist({
    choices: constants_1.generables,
    message: "What do you want to generate?",
    default: constants_1.generables.application
}))
    .then(res => {
    switch (res.data) {
        case constants_1.generables.action:
            helpers_1.generateAction();
            break;
        case constants_1.generables.application:
            cmd
                .prompt(questions_1.Qinput({
                message: "Enter your application name",
                default: "MyApp"
            }))
                .then(r => {
                helpers_1.generateApp(r.data);
            });
            break;
        case constants_1.generables.effect:
            helpers_1.generateEffect();
            break;
        case constants_1.generables.reaction:
            break;
        case constants_1.generables.component:
            break;
        default:
            console.log("Unknown option");
    }
});
//# sourceMappingURL=index.js.map