import React from "react";
import { Grid, Cell } from 'react-mdl';

export default function Contact() {
    return (
        <div>
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='contact'>
                <Cell col={12}>
                    <br/>
                    <div style={{color: '#ffffff', borderRadius: '10px', width: '40%', margin: 'auto', marginTop: ''}}>
                        <h1 href="randompinkerton@gmail.com">Feel Free to Reach out by sending me an email!</h1>
                        <a style={{color: '#ffffff',}} href="mailto:randompinkerton@gmail.com">Send Email </a>
                    </div>
                </Cell>
            </Grid>
            </div>
        </div>
    )
}
// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default Contact