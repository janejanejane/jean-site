import { useEffect, useState } from "react";

export const Resume = () => {
    const [resumeData, setResumeData] = useState([]);

    const url = `https://script.google.com/macros/s/AKfycby9-9bHD6DkuqpCMxDQYgbpTSeZDclv0RaOqyDeXLYneEd_pTD1HmzIrgo-K_-Wa1pJPQ/exec`;


    useEffect(() => {

        fetch(url)
        .then((response) => {
            // check for successful response (status code 200)
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then((data) => {
            // process data json
            setResumeData(data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });

    }, []);

    return (
        <div>
            <h1>Work Experience</h1>
            <div>
                <ul>
                    {
                        resumeData.map((item, i) => (
                            <li key={i}>
                                {
                                    Object.values(item).map((value, j) => (
                                        <span key={j}>{value}</span>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}