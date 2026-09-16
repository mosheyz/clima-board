import { create } from "zustand";

interface ExplorerState {
    explorerName: string;
    setExplorerName: (name: string) => void;
    clearExplorerName: () => void;
}

const useExplorerName = create<ExplorerState>((set) => ({
    explorerName: localStorage.getItem("explorerName") || "",

    setExplorerName: (name) => {
        localStorage.setItem("explorerName", name);
        set(() => ({ explorerName: name }));
    },
    
    clearExplorerName: () => {
        localStorage.setItem("explorerName", "");
        set(() => ({ explorerName: "" }));
    },
}));

export default useExplorerName;
