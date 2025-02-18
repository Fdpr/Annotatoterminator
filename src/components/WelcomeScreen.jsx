import React, { useState, useEffect } from 'react';
import '../styles/WelcomeScreen.css';
import logo from '../assets/annotaterminator.png'
import { Button } from 'rsuite';

function WelcomeScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const handleButtonClick = () => {
        // Trigger fade-out animation
        setFadeOut(true);
        setTimeout(() => setIsVisible(false), 1000); // Delay to let the fade-out animation complete
    };

    return (
        isVisible && (
            <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
                <div className={`${fadeOut ? 'fade-out' : 'fade-in'}`}>
                    <div className='blur' />
                    <div className='welcome-content'>

                        <h1 className="title">Annotaterminator</h1>
                        <img
                            src={logo}
                            alt="Welcome"
                            className="welcome-image"
                        />
                        <h2 className='welcome-greeting'>You are now entering the world of annotations</h2>
                        <Button color="cyan" appearance="ghost" onClick={handleButtonClick} size="lg">
                            Start annotating
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
}

export default WelcomeScreen;
