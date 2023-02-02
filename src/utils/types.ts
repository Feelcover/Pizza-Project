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
  count: number;
  itemParams: string;
};

export type TCategories = {
  value: number;
};

export type TSort = {
  name: string;
  sort: string;
};

export type TSortPopupProps = {
  value: TSort;
};

export type TPizzaItem = {
  category: number;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  sizes: number[];
  types: number[];
};

export type SearchPizzaProps = {
  sortType: sortType;
  order?: string;
  categoryId: number;
  searchValue: string;
  currentPage: number;
};

export type sortType = {
  name: string;
  sort: string;
};
