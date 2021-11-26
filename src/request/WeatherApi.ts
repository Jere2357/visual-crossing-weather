import axios from "axios";

import { HEADERS } from "./Config";
import { FORECAST } from "../globals/Constants";

export const apiForeCastDetails = async (params: any) => {
  var options = {
    method: 'GET',
    url: FORECAST,
    params: {city: params},
    ...HEADERS,
  };

  const apiResponse = await axios
    .request(options)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });

  return apiResponse;
};
