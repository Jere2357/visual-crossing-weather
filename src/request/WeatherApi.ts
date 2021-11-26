import axios from "axios";

import { HEADERS } from "./Config";
import { FORECAST } from "../globals/Constants";

export const apiForeCastDetails = async (params: any) => {
  const apiResponse = await axios
    .get(FORECAST, HEADERS)
    .then((response) => response)
    .catch((error) => error.response);
  return apiResponse;
};
