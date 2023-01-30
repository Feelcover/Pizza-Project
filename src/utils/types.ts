import { store } from "../services/store";
export type RootState = ReturnType<typeof store.getState>;


export type TPizza = {
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: number;
};

export type TPagination = {
  currentPage: number;
};

export type TBasketItem = {
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  type: number;
  count:number;
  itemParams: string;
};

export type TCategories={
  value:number
}


export type TSort = {
  name: string;
  sort: string;
};

export type TSortPopupProps = {
  value: TSort;
};
