
export const fetchWrapper = async (baseurl, options) => {
  let splitUrl = baseurl.split("/");
  let url = baseurl.replace(
    "/" + splitUrl[1],
    process.env["REACT_APP_" + splitUrl[1]]
  );
  const updateOptions = { ...options };
  let result = [];

  await fetch(url, updateOptions)
    .then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      return response;
    })
    .then((returnedResponse) => returnedResponse.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
};
