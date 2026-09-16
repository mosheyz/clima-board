import useExplorerName from "../store/useExplorerName";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/fetchServices";


const DashboardPage = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["weather", "jerusalem"],
        queryFn: () =>
            getWeather({
                name: "bnei brak",
                longitude: 34.8338,
                latitude: 32.0807,
            }),
    });
    const { explorerName } = useExplorerName();
    if (isPending) return "Loading...";
    if (error) return <span>Error: {error.message}</span>;
    return (
        <div>
            <h2 className="hello-msg">Wellcome {explorerName}</h2>
            <div>
                <p>Weather for: Bnei brak - Israel</p>
                <p>Time: {data.current.time}</p>
                <p>Now: {data.current.temperature_2m} Celsius</p>
                <p>Wind speed: {data.current.wind_speed_10m}</p>
                <br />
                <br />
            </div>
        </div>
    );
};

export default DashboardPage;
