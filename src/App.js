import React, { useEffect, useState} from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { Profile } from "./components/Profile";
import { Basics } from "./components/Basics";
import { Introduction } from "./components/Introduction";

const resumeJson = "/website-resume.json";

export function App() {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(resumeJson)
            .then(response => {
                if(!response.ok) {
                    throw new Error(`Error status: ${response.status}`);
                }

                return response.json();
            })
            .then(data => {
                setApiData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(true);
            });
    }, []);

    if(loading) {
        return <LoadingScreen></LoadingScreen>
    }

    if(error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            {apiData && <Profile />}
            {apiData && <Introduction />}
            {apiData && <Basics resume={apiData} />}
        </div>
    )
}