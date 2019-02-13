const getWeather = () => {
  // getting search term from HTML
  const searchTerm = document.querySelector('.search-term').value
  console.log(searchTerm)

  // building url dynamically based on search term
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=4c28b3456e1cb7581acdb0bdab614828`
  console.log(url)
  // make GET request to weatherAPI

  fetch(url)
    // parse request
    // add current weather to HTML

    // getting the response back
    .then(resp => {
      console.log(resp)
      return resp.json()
    })

    // opening the response, weather is actual data that we want
    .then(cityWeather => {
      console.log(cityWeather)
      document.querySelector('.weather').textContent =
        cityWeather.weather[0].description
    })
}

// document.querySelector('.weather').textContent = currentWeather.setup

document.querySelector('.search-button').addEventListener('click', getWeather)
