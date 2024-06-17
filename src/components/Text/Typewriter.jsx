import React from 'react';
import Typewriter from 'react-typewriter-effect';

const TypewriterComponent = () => {
    return (
        <span className="proftext lg:text-4xl font-semibold text-lg flex">
            I'm a&nbsp;
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
                'UI/UX Designer',
            ]}
            multiTextDelay={2000}
            typeSpeed={100}
            deleteSpeed={50}
            multiTextLoop
        />
        </span>

    );
};

export default TypewriterComponent;
