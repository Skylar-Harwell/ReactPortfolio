import React, { useState } from 'react';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import Nav from './nav'

export default function Main() {
    const [currentPage, setCurrentPage] = useState('Landing');

    const renderPage = () => {
        if (currentPage === 'Landing') {
            return <Landing />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> 
            <br/>
            <br/>
            <br/>
            {renderPage()}
        </div>
    );
}