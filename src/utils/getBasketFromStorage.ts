import { itemsCalculate } from "./getTotalCalculate";

export const getBasketFromStorage = () => {
  const basket = localStorage.getItem("basket");
  const basketItems = basket ? JSON.parse(basket) : [];

  const totalPrice = itemsCalculate(basketItems);
  let counter = 0;
  if (basketItems.length) {
    for (let i = 0; i < basketItems.length; i++) {
      const el = basketItems[i];
      if (el.count > 1) {
        counter = counter + el.count - 1;
      }
    }
  }
  const totalItems = basketItems.length + counter;

  return { basketItems, totalPrice, totalItems };
};
