import md5 from "md5";

export const getAuthHeader = () => {
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return md5("Valantis_" + currentDate);
};
