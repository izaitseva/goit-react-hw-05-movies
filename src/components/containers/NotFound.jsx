import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1500);
    })

    return (
        <h1> Page is not found </h1>
    )
}