import md5 from "md5";

// declare function for the converted date and password to md5 crypto-format

export const getAuthHeader = () => {
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  console.log(md5("Valantis_" + currentDate));
  return md5("Valantis_" + currentDate);
};
