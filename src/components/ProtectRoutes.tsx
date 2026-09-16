import useExplorerName from "../store/useExplorerName";
import { Navigate, Outlet} from "react-router-dom";

const ProtectRoutes = () => {
    const { explorerName } = useExplorerName();
    if (!explorerName) return <Navigate to={"/"} replace />;
    return <Outlet />;
};

export default ProtectRoutes;
