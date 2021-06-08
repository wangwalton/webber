
export enum Sender {
  // eslint-disable-next-line no-unused-vars
  React,
}

export interface ChromeMessage {
  from: Sender,
  message: any
}
