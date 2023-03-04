import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HeaderNav } from "./Header/HeaderNav";
const Main = () => {

    return (
        <>
            <HeaderNav />
            <Suspense fallback={<p>Loading Page</p>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default Main;