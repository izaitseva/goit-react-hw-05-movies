import { HeaderNav } from "components/containers/Header/HeaderNav";
import { Outlet } from "react-router-dom";

export const Main = () => {

    return (
        <>
            <HeaderNav />
            <Outlet />
        </>
    )
}