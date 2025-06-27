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

export type Action = { type: "FETCH_INIT" } | { type: "FETCH_SUCCESS"; payload: CatList["items"] } | { type: "FETCH_FAILURE"; payload: string };
