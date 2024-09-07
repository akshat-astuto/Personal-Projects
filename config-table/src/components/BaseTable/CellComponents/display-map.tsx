import { TextCell } from "./cell";

export enum DISPLAY_MAP {
  TEXT = "text",
}

export const displayMapVsCell = {
  [DISPLAY_MAP.TEXT]: TextCell,
};
