import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire soumises:', formData);
        // À cet endroit, vous pourriez par exemple envoyer les données à une API
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
            />
            <button type="submit">Envoyer</button>
        </form>
    );
};
