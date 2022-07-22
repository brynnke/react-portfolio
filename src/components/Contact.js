import React, { useState } from "react";
import { useForm, ValidationError} from '@formspree/react';
import { validateEmail } from "../utlis/helpers";

function Contact() {
    const [state, handleSubmit] = useForm("xknyyydk");

    const [formState, setFormState] = useState({ name: '', email:'', messsage: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function refreshPage() {
        window.location.reload(false);
    }

    if (state.succeeded) {
        return (
            <div>
                <p>Appreciate your time!</p>
                <button className="button is-medium is-primary is-half m-6" onClick={refreshPage}>SUBMIT NEW</button>
            </div>
        );
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`A ${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div>
            <p className="content is-medium"> Contact</p>
            <hr />
            <form id= "contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name"> Name</label>
                </div>
            </form>
        </div>
    )
}