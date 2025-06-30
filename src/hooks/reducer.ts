import type { Action, Cat } from "@/types/types";

export default function reducer(state: Cat[], action: Action): Cat[] {
  switch (action.type) {
    case "SUCCESS":
      return action.payload.concat(state); // 배열을 합치는
    case "CLEAR_ITEMS":
      return [];
    default:
      return state;
  }
}
