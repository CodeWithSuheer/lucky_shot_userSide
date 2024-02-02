import React from 'react';
import Marquee from 'react-fast-marquee';

const TextData = () => {
    return (
        <p>
            I can be a React component, multiple React hello this is marquee
        </p>
    );
};

const Header = () => {
    return (
        <div className="header bg-[#0035D4] text-white py-2 text-md overflow-hidden">
            <Marquee speed={70}>
                <TextData />
                <TextData />
            </Marquee>
        </div>
    );
};

export { Header as default };
