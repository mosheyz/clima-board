import axios from "axios";
const URL = "http://localhost:8000";

export type City = {
    longitude: number;
    latitude: number;
    name: string;
};

export const searchCity = async (city: string) => {
    const result = await axios.get(URL + `/cities/${city}`);
    return result.data;
};

export const compareCity = async (city1: City, city2: City) => {
    const result = await axios.get(URL + `/cities/compare`, {
        params: {
            long1: city1.longitude,
            lat1: city1.latitude,
            long2: city2.longitude,
            lat2: city2.latitude,
        },
    });
    return result.data;
};

export const getFavorites = async (name: string) => {
    const result = await axios.get(URL + `/favorites/${name}`);
    return result.data;
};

export const addCityToFavorites = async (explorerName: string, city: City) => {
    const result = await axios.post(URL + `/favorites`, {
        name: explorerName,
        city: city.name,
        longitude: city.longitude,
        latitude: city.latitude,
    });
    return result.data;
};

export const deleteCityFromFavorites = async (name: string, city: City) => {
    const result = await axios.delete(URL + `/favorites`, {
        params: {
            name: name,
            longitude: city.longitude,
            latitude: city.latitude,
        },
    });
    return result.data;
};

export const getWeather = async (city: City) => {
    const result = await axios.get(URL + "/forecast", {
        params: {
            longitude: city.longitude,
            latitude: city.latitude,
        },
    });
    return result.data;
};

export const getWeatherWeekly = async (city: City) => {
    const result = await axios.get(URL + "/forecast/weekly", {
        params: {
            longitude: city.longitude,
            latitude: city.latitude,
        },
    });
    return result.data;
};

export const atbash = async (text: string) => {
    const result = await axios.get(URL + `/atbash/${text}`);
    return result.data;
};

// try {
//     console.log(
//         await atbash(""),
        // await getWeatherWeekly({ longitude: 35.496, latitude: 32.96465 }),
        // await deleteCityFromFavorites("hanan", {longitude: 35.496, latitude: 32.96465})
        // await getFavorites("hanan")
        //         await compareCity( {
        //     id: 293100,
        //     name: 'Safed',
        //     latitude: 32.96465,
        //     longitude: 35.496,
        //     elevation: 779,
        //     feature_code: 'PPL',
        //     country_code: 'IL',
        //     admin1_id: 294824,
        //     timezone: 'Asia/Jerusalem',
        //     population: 36094,
        //     country_id: 294640,
        //     country: 'Israel',
        //     admin1: 'Northern District'
        //   },
        //   {
        //     id: 1460299,
        //     name: 'Spī Qal‘ah',
        //     latitude: 34.17575,
        //     longitude: 67.90016,
        //     elevation: 2911,
        //     feature_code: 'PPL',
        //     country_code: 'AF',
        //     admin1_id: 1121863,
        //     admin2_id: 7732663,
        //     timezone: 'Asia/Kabul',
        //     country_id: 1149361,
        //     country: 'Afghanistan',
        //     admin1: 'Maidan Wardak Province',
        //     admin2: 'Markazi Bihsud District'
        //   },)
        // await searchCity("safed")
        // await addCityToFavorites("hanan", {
        //     name: "haifa",
        //     longitude: 35.496,
        //     latitude: 32.96465,
        // }),
//     );
// } catch (error) {
//     console.error({ error });
// }
