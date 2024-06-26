const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_Name = document.getElementById("city_Name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_Name.innerText = `please write the city name first to get the data`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=427a3e7980d9ab93501c1d06b913f0af`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_Name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
    } catch {
      city_Name.innerText = `please write the city name first to get the data`;
    }
  }
};
submitBtn.addEventListener("click", getInfo);
