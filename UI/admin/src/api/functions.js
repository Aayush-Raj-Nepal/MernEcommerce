import { API } from "./backend";

export const getMediaUrl = (url) => {
  return `${API}media/${url}`;
};
