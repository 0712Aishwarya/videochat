import React, { useState } from 'react';
import Hero from './Hero';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleJoinMeeting = () => {
        navigate(`/room/${value}`);
    };

    return (
        <>
            <Hero />
            <div className="container">
                <h1>Join Meeting</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder='Create New Meeting' 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button disabled={!value} onClick={handleJoinMeeting}>Join</button>
                </div>
            </div>
        </>
    );
};

export default Home;
