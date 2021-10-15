/* eslint-disable no-control-regex */
import React, { Fragment} from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Box = styled.div`
    border: 2px solid ${props => props.theme.darkCerulean};
    border-radius: 25px;
    min-height: 40vh;
    padding: 2rem;
    background: lightgray;
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

const Error = styled.p`
    color: ${props => props.theme.darkCerulean};
    /* font-style: italic; */
    font-size: large;
    font-family: cursive;
    text-align: left;
    margin-left: 15px;
`
const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  return (
   <Fragment>
    <Box> 
    <form onSubmit={handleSubmit}>
  
    <Input  
            type="text"
            name="name" 
            placeholder="*Name" 
            ref={register({ 
                required: {value: true, message:"Name is required"},
                minLength: {value:2, message:"Name must be 2+ characters"},
                maxLength: {value:50, message:"Name must not exceed 50 characters"},
                pattern: {value: /^[a-z ,.'-]+$/i, message: "Please exclude any special characters other than periods, apostrophes, dashes, or commas"},
                validate: {
                    firstChar: value => /^[A-Za-z]/.test(value)
                }, 
            })} 
        />
        <br/>
        {errors.name && <Error>{errors.name.message}</Error>}
        {errors.name && errors.name.type === "firstChar" && <Error>The first character must be a letter</Error>}

        <Input
            type="email"
            name="email"
            placeholder="*E-mail"
            ref={register({ 
                required: {value: true, message:"E-mail is required"},
                pattern: {value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i, 
                message: "Please enter a valid e-mail address"},
            })}
        /><br/>
        {errors.email && <Error>{errors.email.message}</Error>}
        <Message
            type="text"
            name="message"
            placeholder="*Message"
            height="grande"
            ref={register({ 
                required: {value: true, message:"Message is required"},
                minLength: {value:5, message:"Message must be 5+ characters"},
                maxLength: {value:500, message:"Message must not exceed 500 characters"},
            })}
        />
        {errors.message && <Error>{errors.message.message}</Error>}
      
    </form>
    </Box>
    </Fragment> 
  );
};
 export default Form;