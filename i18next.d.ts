import { resources } from "./src/main";
declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources["en"];
  }
}
