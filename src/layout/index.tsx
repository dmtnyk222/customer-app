import { useMemo } from "react";
import Nav from "./nav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import API from "../utils/api/api";
// import { useUserData } from "../utils/jotai";
// import { UserData } from "../utils/jotai/atomTypes";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({children}: AppLayoutProps) => {
    const location = useLocation()
    // const [userData, setUserData] = useState<UserData>()

    const isShowNav = useMemo(() => !['/signin', 'reset-password', 'new-password', '/create-customer'].includes(location.pathname), [location.pathname])
    const isAdmin = useMemo(() => location.pathname.includes('/admin'), [location.pathname])

    useEffect(() => {
        API.getApiToken();
        // API.getRateSchemes();
    }, [])

    return (
        <div>
            {isShowNav && <Nav isAdmin={isAdmin} />}
            <div className={isShowNav ? `${isAdmin ? "mt-39" : "mt-25"} py-12.5 px-30 bg-tangerine` : ""}>
                {children}
            </div>
        </div>
    )
}

export default AppLayout