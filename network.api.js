const baseURL = "https://free-api.heweather.com/v5/";

function requestFromServer(...props) {
  this.url = props.shift(1);
  this.options = props.shift(1);
  return fetch(this.url, Object.assign({}, this.options))
  .then((response) => {
    return response.json()
  });
}

export default {
  requestNowWeatherFromServer() {
    var subUrl = "now?city=beijing&key=9e6aa5cbcb994295ae8e54da94f48bba";
    return requestFromServer(`${baseURL}/${subUrl}`, {
      method: 'get',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
    });
  }
};
