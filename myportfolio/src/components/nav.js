import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function Nav({ currentPage, handlePageChange }) {
return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Skylar Harwell's Portfolio" scroll>
            <Navigation>
                <a href="#home" onClick={() => handlePageChange('Landing')} className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}>Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
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