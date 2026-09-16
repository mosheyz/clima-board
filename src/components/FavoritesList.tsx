import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getFavorites } from "../services/fetchServices";
import { useNavigate } from "react-router-dom";

const FavoritesList = ({ name }: { name: string }) => {
    const navigate = useNavigate();
    const { error, isPending, data } = useQuery({
        queryKey: ["favorites", name],
        queryFn: () => getFavorites(name),
    });
    const handleCityClick = (city: any) => {
        return navigate(`/app/cities/${city.name}`, { state: { city } });
    };

    if (!data) {
        return <p>No favorite cities.</p>;
    }
    if (isPending) return "Loading...";
    if (error) return <span>Error: {error.message}</span>;

    return (
        <div>
            <ul>
                {data.map((c: any) => {
                    c.name = c.city;
                    return (
                        <li key={c.name} onClick={() => handleCityClick(c)}>
                            <p>{c.name}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FavoritesList;
