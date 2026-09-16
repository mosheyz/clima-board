import { useEffect, useRef, useState } from "react";
import { searchCity } from "../services/fetchServices";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
      inputRef.current?.focus()
    }, [])

    const handleClick = async () => {
        setLoading(true);
        setError("")
        setResult([])
        try {
            const data = await searchCity(search);
            if (!data.length) setError("No cities found");
            else {
                setResult(data);
            }
            setLoading(false);
        } catch (error) {
            setError(`${error}`);
            setLoading(false);
        }
    };

    const handleCityClick = (city: any) =>{
      return navigate(`/app/cities/${city.name}`, {state: city})
    }

    return (
        <div>
            <label htmlFor="search">
                Enter city
                <input
                    type="text"
                    className="search-input"
                    name="search"
                    id="search"
                    ref={inputRef}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-btn" onClick={handleClick}>
                    Search
                </button>
            </label>
            {loading && <p>Searching cities...</p>}
            <ul>
                {!loading &&
                    result.map((city: any) => (
                        <li key={city.id} onClick={() => handleCityClick(city)}>
                            <p>{city.name} - {city.country}</p>
                        </li>
                    ))}
            </ul>
            {error && <p>{error}</p>}
        </div>
    );
};

export default SearchPage;
