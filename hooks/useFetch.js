import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(data) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios(url, options);
                setData(response.data);
            } catch(err) {
                setError(response.err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []); // empty array means component called only once on mount

    return {data, loading, error};
}