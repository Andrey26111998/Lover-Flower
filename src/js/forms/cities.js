import FetchHandler from "/src/js/handlers/fetch_handler.js";
import ElementHandler from "/src/js/handlers/element_handler.js";

const orderCity = document.querySelector("#order-city");
const countryCode = "BY";
const queryParams = new URLSearchParams({
    limit: "10",
    offset: "0",
    types: "CITY",
    languageCode: "ru",
    sort: "name"
});
const requestAddress = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/places?${queryParams.toString()}`;
const headers = {
    "x-rapidapi-key": "d90aecfd12msh4eccc80e051deffp10b9bejsn383f5cbfd6de",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
};

FetchHandler.fetchData(requestAddress, headers).then(result => {
    const cities = result.data;
    for (const city of cities) {
        const cityName = city.name;
        const cityNameOption = ElementHandler.createElement("option", {
            attributes: {
                value: cityName,
            },
            properties: {
                textContent: cityName,
            }
        });
        orderCity.appendChild(cityNameOption);
    }
});