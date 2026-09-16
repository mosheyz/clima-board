import { useMutation } from "@tanstack/react-query";
import React from "react";
import { addCityToFavorites } from "../services/fetchServices";
import useExplorerName from "../store/useExplorerName";

const FavoritesButton = ({ city }: { city: any }) => {
    const { explorerName } = useExplorerName();
    const { mutate, error, isPending, isSuccess } = useMutation({
        mutationFn: () => addCityToFavorites(explorerName, city),
    });

    return (
        <div>
            <button onClick={() => mutate()} disabled={isPending}>Add city to favorites
            </button>
                {error && <p>Error {error.message}</p>}
                {isPending && <p>Saving...</p>}
                {isSuccess && <p>Saved!</p>}

        </div>
    );
};

export default FavoritesButton;
