#!/usr/bin/env node

import { Qlist, Qinput } from "src/questions";
import { generables } from "src/constants";
import {
  deleteFolderRecursive,
  generateApp,
  generateAction,
  generateEffect
} from "src/helpers";

const cmd = require("inquirer");

cmd
  .prompt(
    Qlist({
      choices: generables,
      message: "What do you want to generate?",
      default: generables.application
    })
  )
  .then(res => {
    switch (res.data) {
      case generables.action:
        generateAction();
        break;
      case generables.application:
        cmd
          .prompt(
            Qinput({
              message: "Enter your application name",
              default: "MyApp"
            })
          )
          .then(r => {
            generateApp(r.data);
          });
        break;
      case generables.effect:
        generateEffect();
        break;
      case generables.reaction:
        break;
      case generables.component:
        break;
      default:
        console.log("Unknown option");
    }
  });
