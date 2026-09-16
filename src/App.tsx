import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutPage from "./LayoutPage";
import { HomePage } from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";
import CityDetailsPage from "./pages/CityDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import ComparePage from "./pages/ComparePage";
import ProtectRoutes from "./components/ProtectRoutes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<LayoutPage />}>
                        <Route path="/" element={<HomePage/>} />
                        <Route element={<ProtectRoutes/>}>
                            <Route path="/app/favorites" element={<FavoritesPage/>} />
                            <Route path="/app/search" element={<SearchPage/>} />
                            <Route path="/app/compare" element={<ComparePage/>} />
                            <Route path="/app/dashboard" element={<DashboardPage/>} />
                            <Route path="/app/cities/:id" element={<CityDetailsPage/>} />
                        </Route>
                        <Route path="*" element={<NotFoundPage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
