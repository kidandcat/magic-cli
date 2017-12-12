export interface listOpts {
  message: string;
  default: string;
  choices: object;
}

export const Qlist = (options: listOpts) => ({
  ...options,
  choices: Object.keys(options.choices),
  type: "list",
  name: "data"
});

export interface checkboxOpts {
  message: string;
  default: string[];
  choices: object;
}

export const Qcheckbox = (options: checkboxOpts) => ({
  ...options,
  choices: Object.keys(options.choices),
  type: "checkbox",
  name: "data"
});

export interface confirmOpts {
  message: string;
  default: boolean;
}

export const Qconfirm = (options: confirmOpts) => ({
  ...options,
  type: "confirm",
  name: "data"
});

export interface passwordOpts {
  message: string;
  default: string;
}

export const Qpassword = (options: passwordOpts) => ({
  ...options,
  type: "password",
  name: "data"
});

export interface inputOpts {
  message: string;
  default: string;
}

export const Qinput = (options: inputOpts) => ({
  ...options,
  type: "input",
  name: "data"
});
