export const API =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4000/api/"
    : "http://subidhaonline.com/api/";
export const HOME =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3001"
    : "http://subidhaonline.com";

// export const API='http://subidhaonline.com/api/'
