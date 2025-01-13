import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { useAuth } from "../context/AuthContext";

export function useContent() {
    const [contents, setContents] = useState([]);
    const { token } = useAuth();


    function refresh() {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                // "Authorization": localStorage.getItem("JWT")
                "Authorization": token
            }
        })
            .then((response) => {
                setContents(response?.data?.data)
            })
    }

    useEffect(() => {
        refresh()
        const interval = setInterval(() => {
            refresh()
        }, 10 * 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return { contents, refresh };
}