import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function Nav({ currentPage, handlePageChange }) {
return (
    <div className="demo-big-content">
    <Layout fixedHeader>
        <Header className='header-color' title="Skylar Harwell's Portfolio" scroll>
            <Navigation>
                <a href="#home" onClick={() => handlePageChange('Landing')}>Home</a>
                <a href="#about" onClick={() => handlePageChange('About')}>About</a>
                <a href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a>
                <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Where to?">
            <Navigation>
            <a href="#home" onClick={() => handlePageChange('Landing')}>Home</a>
                <a href="#about" onClick={() => handlePageChange('About')}>About</a>
                <a href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a>
                <a href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
  );
}

export default Nav;