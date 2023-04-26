// Create a react functional component for Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate=useNavigate();
    function openLogin(){
        navigate("/login");
    }
    return (
        <div className="home">
            <div className="boxContainer">
                <div className="typeBox" id="doctorBox" onClick={openLogin}>
                    <div className="boxHeading">Doctor</div>
                </div>
                <div className="typeBox" id="patientBox" onClick={openLogin}>
                    <div className="boxHeading">Patient</div>
                </div>
                <div className="typeBox" id="nurseBox" onClick={openLogin}>
                    <div className="boxHeading">Nurse</div>
                </div>
            </div>
        </div>
    )
}

export default Home

    
    