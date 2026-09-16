import { Link } from "react-router-dom";
import useExplorerName from "../store/useExplorerName";

export const Header = () => {
    const { clearExplorerName } = useExplorerName();
    const handleClear = () => {
        clearExplorerName();
    };
    return (
        <header className="head-site">
            <h2 className="site-title">CalimaBoard</h2>
            <nav className="head-nav">
                <Link to={"/"}>Home</Link>
                <Link to={"/app/search"}>Search</Link>
                <Link to={"/app/favorites"}>Favorites</Link>
            </nav>
            <button className="clear-btn" onClick={handleClear}>
                Clear
            </button>
        </header>
    );
};
