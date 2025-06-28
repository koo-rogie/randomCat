import type { Action, State } from "@/types/types";

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { items: [...action.payload, ...state.items], loading: false, error: null };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_MORE_SUCCESS":
      return {
        ...state,
        items: [...action.payload, ...state.items],
        loading: false,
        error: null,
      };
    case "CLEAR_ITEMS":
      return { ...state, items: [], error: null };
    default:
      return state;
  }
}
