import React from 'react';
import Header from './Header';

const Master: React.FC = ({ children }) => {
    return (

        <Header>
            {children}
        </Header>

    );
};

export default Master;