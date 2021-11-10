import axios from "axios";

export const autoSuggest = (
  city,
  setState,
  state,
  inputName,
  inputValue,
  setCitiesArray
) => {
  setState({ ...state, [inputName]: inputValue });
  var options = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places/autocomplete",
    params: { limit: "10", skip: "0", q: city, type: "CITY" },
    headers: {
      "x-rapidapi-host": "spott.p.rapidapi.com",
      "x-rapidapi-key": "a4ddece52bmsh91011e3f06f0b0cp1fc05fjsn4ca31e287d7f",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log("api call");

      setCitiesArray(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
