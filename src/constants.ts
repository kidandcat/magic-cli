export const generables = {
  application: "application",
  action: "action",
  effect: "effect",
  reaction: "reaction",
  component: "component"
};

export const quest = {
  list: "list",
  checkbox: "checkbox",
  confirm: "confirm",
  input: "input",
  password: "password"
};

export const action = `
export const MyAction = action(() => {
  Store.MyAction = "An action must always modify the State";
});
`;

export const effect = `
export const MyEffect = Something => {
  console.log("reactioned to Something", Something);
};
`;

export const component = `
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
