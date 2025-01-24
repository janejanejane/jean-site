import { useEffect, useState } from "react";
import axios from "axios";
import localforage from "localforage"; 

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cachedData, setCachedData] = useState(null);

    useEffect(() => {
        if(!url) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios(url, options); // get quote/joke from api

                await localforage.setItem(options.key, response.data);
                setContentValue(response.data); // call custom function that sets the data shown
            } catch(err) {
                setError(response.err);
            } finally {
                setLoading(false);
            }
        };

        const setContentValue = async (values) => {
            setLoading(true);

            if(!values) {
                setError(Error('No data found.'));
            }

            const updatedValues = [...values];
            
            setData(
                {
                    type: options.key, 
                    value: updatedValues.shift() // get the first value in the array
                }
            );
            setCachedData(values);

            try {
                await localforage.setItem(options.key, updatedValues);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        const getSingleValue = async () => {
            setLoading(true);

            try {
                const keys = await localforage.keys(); // checks existing databases
                const value = await localforage.getItem(options.key); // get the quotes

                if(value === null) {
                    fetchData();
                } else {
                    setContentValue(value); // call custom function that sets the data
                }
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };


        if(data && data.type === options.key) {
            setContentValue(cachedData);
        };

        getSingleValue();

    }, [url, options]); // url has to have value; triggers the fetching of data

    return {data, loading, error};
}