import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = () => {
    return (
        <h1 className="proftext md:text-4xl font-semibold text-xl">
            <Typewriter
            textStyle={{
                fontFamily: 'Montserrat, sans-serif',
                cursorHeight: '1px',
            }}
            startDelay={100}
            cursorColor="#273E47"
            multiText={[
                'Student',
                'Front-End Developer',
                'Web Developer',
                'UI/UX Designer',
            ]}
            multiTextDelay={2000}
            typeSpeed={100}
            deleteSpeed={50}
            multiTextLoop
        />
        </h1>

    );
};

export default TypewriterComponent;
