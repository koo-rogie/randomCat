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
export type Action = { type: "SUCCESS"; payload: Cat[] } | { type: "CLEAR_ITEMS" };
