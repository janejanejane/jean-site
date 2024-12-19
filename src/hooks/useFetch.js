import { useEffect, useState } from "react";
import axios from "axios";
import localforage from "localforage"; 

const key = 'zenQuotes';

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const setQuote = async (quotes) => {
        if(!quotes) {
            setError(Error('No data found.'));
        }

        const updatedQuotes = [...quotes];
        setData(updatedQuotes.shift()); // get the first quote in the array

        try {
            await localforage.setItem(key, updatedQuotes);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(data) return;

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios(url, options); // get quotes from api

                await localforage.setItem(key, response.data);
                setQuote(response.data); // call custom function that sets the data
            } catch(err) {
                setError(response.err);
            } finally {
                setLoading(false);
            }
        };

        const getRandomQuote = async () => {
            try {
                const keys = await localforage.keys(); // checks existing databases

                if(keys.length === 0) {
                    fetchData();
                }

                const value = await localforage.getItem(key); // get the quotes

                if(value.length) {
                    console.log('value from indexeddb:', value);
                    setQuote(value); // call custom function that sets the data
                } else {
                    fetchData();
                }
            } catch(err) {
                setError(err);
            }
        };

        getRandomQuote();

    }, []); // empty array means component called only once on mount

    return {data, loading, error};
}