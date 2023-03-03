import { Outlet } from "react-router-dom";
import { HeaderNav } from "./Header/HeaderNav";

export const Main = () => {

    return (
        <>
            <HeaderNav />
            <Outlet />
        </>
    )
}