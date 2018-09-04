import { awesomeFn } from "@crixusshen/x-core";

export function cli() {
  awesomeFn();
  console.log(1)
  return Promise.resolve(true);
}
