import React from "react";
import { Grid, Cell } from 'react-mdl';

export default function Projects() {
    return (
        <div>
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='projects'>
                <Cell col={12}>
                <br/>
                    <br/>
                    <div className='projects-banner'>
                        <h1>Facts about Skylar Harwell</h1>
                        <p>
                        Born and raised in Atlanta Georgia, I enjoy programming, design, sculpture, and am an avid baker. If i'm not behind a computer screen working then i'm in the kitchen behind the stove sweating to this weeks cookie, pie, or treat recipe I am trying. 
                        </p>
                    </div>
                </Cell>
            </Grid>
            </div>
        </div>
    )
}