import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  /*   border: 2px solid ${props => props.theme.darkCerulean};
    border-radius: 25px; */
    min-height: 40vh;
    padding: 2rem;
    
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    font-size: large;
    border-style: hidden;
    &:focus {
    outline-color: ${props => props.theme.lightBlu};
    }
`

const Message = styled.textarea`
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    margin-bottom: 0px;
    padding: 10px;
    border-radius: 5px;
    font-size: large;
    border-style: hidden;
    height: 150px;
    &:focus {
    outline-color: ${props => props.theme.lightBlu};
    }
`
function submit_message () { 
    alert("The message was submitted")
};
 
function ContactMee() {

    return (
    
        <Box> 
            <form  onSubmit={submit_message} id="contact_form" action="https://bolatah.com/contact/process.php" method="post">
            <input type="hidden" name="form_tools_form_id" value="5" />
                <div class="form_field">
                    <div class="form_input">
                        <Input type="text" id="Name" name="Name" placeholder="*Name" minLength="2" maxLength="50"required/>
                    </div>
                </div>

                <div class="form_field">
                    <div class="form_input">
                        <Input type="email" id="Email" name="Email" placeholder="*Email" minLength="5" maxLength="100" required/>
                    </div>
                </div>

                <div class="form_field">
                    <div class="form_input">
                        <Message id="Message" name="Message" rows="6" minLength="5" maxLength="3000" placeholder="*Message" required></Message>
                    </div>
                </div>

                <div class="form_field">
                    <button type="submit" className="btn" style={{backgroundColor:'#F8A3BA'}}> Submit</button>
                </div>
            </form>
        </Box>
    
    );
}
export default ContactMee;
