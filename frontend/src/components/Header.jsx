import React from 'react';
import Marquee from 'react-fast-marquee';

const TextData = () => {
    return (
        <p>
            I can be a React component, multiple React hello this is marquee
        </p>
    );
};

const style = {
    shadowBlue: {
        WebkitBoxShadow: '0px 50px 99px 7px rgba(0, 53, 212, 0.86)',
        MozBoxShadow: '0px 50px 99px 7px rgba(0, 53, 212, 0.86)',
        boxShadow: '0px 50px 99px 7px rgba(0, 53, 212, 0.86)',
    }
};



const Header = () => {
    return (
        <div style={style.shadowBlue} className="header bg-[#0035D4] text-white py-2 text-sm" >
            <Marquee speed={70}>
                <TextData />
                <TextData />
            </Marquee>
        </div>
    );
};

export { Header as default };
