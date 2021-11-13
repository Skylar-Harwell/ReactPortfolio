import React from "react";
import { Grid, Cell } from 'react-mdl';

export default function Resume() {
    
    return (
      <div>
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='resume'>
                <Cell col={12}>
                    <br/>
                    <br/>
                    <br/>
                    <div>
        
                    <img
                        src='/images/Resume-Updated.pdf'
                        alt='resume'
                        className='resume-img'
                    />
                    </div>
                </Cell>
            </Grid>
            </div>
      </div>
    );

}