import { BaseInputCell, TextCell } from "./cell";

export enum DISPLAY_MAP {
  TEXT = "text",
  INPUT = "input",
}

export const displayMapVsCell = {
  [DISPLAY_MAP.TEXT]: TextCell,
  [DISPLAY_MAP.INPUT]: BaseInputCell,
};
