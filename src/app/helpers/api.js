import { create } from "apisauce";
import CLIENT from "../constants/client";

const API_KEY = "2c05a105987c4b7e90e7ee6ee58222f3";

const api = create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

api.addRequestTransform((request) => {
  request.params["APPID"] = API_KEY;
});

api.addMonitor((response) => {
  if (CLIENT.IS_DEVELOPMENT) {
    console.log({ url: response.config.url, detail: response });
  }
});

export default api;
