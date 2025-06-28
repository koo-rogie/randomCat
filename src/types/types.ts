export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatList {
  items: Cat[];
}

export type State = {
  items: CatList["items"];
  loading: boolean;
  error: string | null;
};

// types.ts
export type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: Cat[] }
  | { type: "FETCH_FAILURE"; payload: string }
  | { type: "FETCH_MORE_SUCCESS"; payload: Cat[] }
  | { type: "CLEAR_ITEMS"; };
