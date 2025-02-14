import { useEffect, useState } from "react";
import axios from "axios";
import localforage from "localforage"; 

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cachedData, setCachedData] = useState(null);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        if(!url) return;

        // Fetch quote/joke from api source if none is saved in browser
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

        // Update both the (1) stored value in indexeddb and (2) the data shown to user
        const setContentValue = async (values) => {
            setLoading(true);

            if(!values) {
                setError(Error('No data found.'));
            }

            const updatedValues = [...values];
            
            setData({
                type: options.key, 
                value: updatedValues.shift() // get the first value in the array
            });
            setCachedData(values);

            try {
                await localforage.setItem(options.key, updatedValues);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        // Decide whether to get from indexeddb or from api source
        const getSingleValue = async () => {
            setLoading(true);

            try {
                const value = await localforage.getItem(options.key); // get the quotes/jokes

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

        // 
        const getSaved = async () => {
            setLoading(true);

            try {
                const keys = await localforage.keys();
                
                for (const k of keys) {
                    const value = await localforage.getItem(k);
                    let num = 0;
    
                    if(value) {
                        if(Array.isArray(value)) {
                            num = value.length
                        } else if (typeof value === 'object') {
                            num = Object.keys(value).length;
                        }
                    }
    
                    setStats(prev => {
                        const found = prev.findIndex(item => item.key === k);
    
                        if(found > -1) {
                            // Update existing
                            return prev.map((item, idx) => idx === found ? { ...item, total: num} : item);
                        } else {
                            // Add new item
                            return [...prev, {key: k, total: num}];
                        }
                    })
                }
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };


        // Check if the user requests the same resource as before e.g. quote -> quote
        if(data && data.type === options.key) {
            setContentValue(cachedData);
        };

        getSingleValue();
        getSaved();

    }, [url, options]); // url has to have value; triggers the fetching of data

    return {data, loading, error, stats};
}