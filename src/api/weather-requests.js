import { callServer } from "../utils/request-util";
import { apikey } from "../utils/constants";

export function searchPlace(text) {
  return new Promise((resolve, reject) => {
    callServer({
      url: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${text}`,
      method: "GET",
      headers:  {
        "content-type": "application/json"
      }
    }).then(
      response => {
        resolve(response);
      },
      error => {
        reject(error);
      }
    );
  });
}

export function getCurrentWeather(key) {
  return new Promise((resolve, reject) => {
    callServer({
      url: `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apikey}`,
      method: "GET",
      headers:  {
        "content-type": "application/json"
      }
    }).then(
      response => {
        resolve(response);
      },
      error => {
        reject(error);
      }
    );
  });
}

export function getForecast(key) {
  return new Promise((resolve, reject) => {
    callServer({
      url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apikey}&metric=true`,
      method: "GET",
      headers:  {
        "content-type": "application/json"
      }
    }).then(
      response => {
        resolve(response);
      },
      error => {
        reject(error);
      }
    );
  });
}
