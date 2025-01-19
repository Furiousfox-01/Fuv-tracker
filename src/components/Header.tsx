import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-primary-content p-3" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">Fuv Tracker</h1>
            </div>
        </header>
    );
};

export default Header;