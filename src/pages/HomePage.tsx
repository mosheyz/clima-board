import { useEffect, useRef, useState } from "react";
import useExplorerName from "../store/useExplorerName";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const { setExplorerName } = useExplorerName();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        inputRef.current?.focus()
    })

    function handleClick() {
        if (name.trim() === "") return <p>You must enter ayour name</p>;
        setExplorerName(name);
        navigate("/app/dashboard");
    }

    return (
        <div>
            <label htmlFor="name">
                Enter your name:
                <input
                    type="text"
                    id="name"
                    name="name"
                    ref={inputRef}
                    placeholder="your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="enter-btn" onClick={handleClick}>
                    Enter
                </button>
            </label>
        </div>
    );
};
