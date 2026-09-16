import React from "react";
import FavoritesList from "../components/FavoritesList";
import useExplorerName from "../store/useExplorerName";

const FavoritesPage = () => {
    const { explorerName } = useExplorerName();
    return (
        <div>
            <FavoritesList name={explorerName}/>
        </div>
    );
};

export default FavoritesPage;
