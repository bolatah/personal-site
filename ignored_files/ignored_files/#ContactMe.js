import React, { useState } from 'react'
import { Card } from 'reactstrap';

import Form from '../pages/ContactForm/Form';
import Success from '../pages/ContactForm/Success';
// import Content from '.';

const ContactMe = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <Card>
            {!isSubmitted ? 
                <Form submitForm = {submitForm}/> :
                <Success/>
            }
        </Card>
    )
}

export default ContactMe;