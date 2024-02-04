import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Tutors() {
    const navigate = useNavigate();
    const location = useLocation();
    const [tutorSearch, setTutorSearch] = useState("");
    const [tutors, setTutors] = useState(undefined);

    useEffect(() => {
        async function getTutors() {
            const response = await axios.get('http://localhost:5000/tutors/collect');
            const data = response.data;
            const arrayOfTuples = [];

            for (let i = 0; i < data[0].length; i += 5) {
                const tuple = data[0].slice(i, i + 5);
                arrayOfTuples.push(tuple);
            }

            setTutors(arrayOfTuples);
        }

        getTutors();
    }, []);

    useEffect(() => {
        async function getStatus() {
            if (tutors) {
                const updatedTutors = await Promise.all(tutors.map(async tutor => {
                    const tutorUsername = tutor[2].trim().substring(1, tutor[2].length - 1);
                    const response = await axios.get(`http://localhost:5000/tutors/status/${tutorUsername}`);
                    console.log(response.data);
                    const status = response.data.split(', ')[1] === 'online' ? 'offline' : 'online';
                    return { ...tutor, status };
                }));
                setTutors(updatedTutors);
            }
        }

        setTimeout(getStatus, 5000);
    }, [tutors]);

    return (
        <div className="w-screen">
            {location.pathname === '/tutors' ? (
                <div className="w-screen mt-20">
                    <input placeholder="Search for A Tutor" name="tutorSearch" value={tutorSearch} onChange={(e) => setTutorSearch(e.target.value)} className="w-5/6 border-2 focus:outline-none ml-40 px-10 py-3 text-xl rounded-md border-gray-500 bg-gray-100 bg-no-repeat bg-right-10" />
                    <div className="flex justify-center flex-col items-center">
                        {tutors && tutors.map((tutor, index) => {
                            let image;

                            if (tutor[4].includes(")]")) {
                                image = `./src/assets/${tutor[4].substring(1, tutor[4].length - 3)}`;
                            } else {
                                image = `./src/assets/${tutor[4].substring(1, tutor[4].length - 2)}`;
                            }


                            return (
                                <div key={index} className="my-5 w-3/6 flex flex-row">
                                    {image && <img src={image} className="px-5 py-5 w-28 h-28"/>}
                                    <div className="w-full">
                                        <div className="flex flex-row w-full items-center py-5 px-5">
                                            <h1 className={`text-2xl font-semibold ${!tutor.status ? 'mr-auto' : 'mr-2'}`}>{tutor[2].trim().substring(1, tutor[2].length - 1)}</h1>
                                            {tutor.status && <p className="mr-auto">{tutor.status == 'online' ? "🟢" : "🔴"}</p>}
                                            <p className="text-2xl font-bold">${tutor[1].trim()}</p>
                                        </div>
                                        <div className="px-5">{tutor[0].includes('(') ? tutor[0].substring(2, tutor[0].length - 1): tutor[0].substring(1, tutor[0].length - 1)}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <Outlet/>
            )}
        </div>
    );
}
