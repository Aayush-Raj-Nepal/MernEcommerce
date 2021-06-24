import { API } from "./backend";

export const getMediaUrl = (url) => {
  return `${API}media/${url}`;
};
export const getDiscountedPrice = (price, discount) => {
  parseInt(price);
  parseInt(discount);
  return Math.floor(price - price * (discount / 100));
};
