import React from "react";
import { Grid, Cell } from 'react-mdl';

export default function Landing() {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <img
                        src='skylarPic.png'
                        alt='avatar'
                        className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                    <p>JavaScript (AJAX, JSON) | HTML | CSS | SQL | React | jQuery | Bootstrap | Materialize | Node.js (Express.js, Inquirer.js, File System, Sequelize) | Handlebars.js | GraphQL/Apollo Tools | MongoDB | MySQL | Git | GitHub | Command Line | Heroku | Jest | VSCode</p>

                    <div className='links'>
                        <a href="https://www.linkedin.com/in/skylar-harwell-31aaa0216/"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Skylar-Harwell"><i class="fa fa-github"></i></a>
                    </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}