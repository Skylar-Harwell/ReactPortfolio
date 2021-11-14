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
                    <a href="https://drive.google.com/file/d/1T_109ZCFPTnaM3Ll_eQbuLzugNELLxDx/view?usp=sharing">
                    <img
                        src='/images/resume1.png'
                        alt='resume'
                        className='resume-img'
                    />
                    </a>
                    <div>
                        <h1 className='resume-banner' style={{color: '#ffffff', borderRadius: '10px', width: '40%', margin: 'auto', marginTop: ''}}>Would you like to know More?</h1>
                    </div>
                    </div>
                </Cell>
            </Grid>
            </div>
      </div>
    );

}