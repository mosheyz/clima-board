import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/fetchServices";
import { useLocation } from "react-router-dom";
import FavoritesButton from "../components/FavoritesButton";
import CurrentWeather from "../components/CurrentWeather";
import WeeklyWeather from "../components/WeeklyWeather";

const CityDetailsPage = () => {
    const location = useLocation();
    const city = location.state?.city;
    const { isPending, data, error } = useQuery({
        queryKey: ["weather", city?.name],
        queryFn: () => getWeather(city),
        enabled: !!city,
    });
    if (!city) {
        return <p>No city selected. Please return to the search page.</p>;
    }
    if (isPending) return "Loading...";
    if (error) return <span>Error: {error.message}</span>;

    return (
        <div>
            <CurrentWeather city={city} data={data} />
            <br />
            <FavoritesButton city={city} />
            <br />
            <WeeklyWeather data={data} />
        </div>
    );
};

export default CityDetailsPage;
