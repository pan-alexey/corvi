import url from "url";

export const isHttps =  (requestUrl: string): boolean => {
  const URL = url.parse(requestUrl);

  return URL.protocol === 'https:';
};
