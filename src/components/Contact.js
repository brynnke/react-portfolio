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

    const
}