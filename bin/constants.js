"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generables = {
    application: "application",
    action: "action",
    effect: "effect",
    reaction: "reaction",
    component: "component"
};
exports.quest = {
    list: "list",
    checkbox: "checkbox",
    confirm: "confirm",
    input: "input",
    password: "password"
};
exports.action = `
export const MyAction = action(() => {
  Store.MyAction = "An action must always modify the State";
});
`;
exports.effect = `
export const MyEffect = Something => {
  console.log("reactioned to Something", Something);
};
`;
exports.component = `
import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../State/store";

@observer
export class Component extends React.Component<{}, {}> {
  render() {
    return <div>{Store.myProperty}</div>;
  }
}
`;
//# sourceMappingURL=constants.js.map