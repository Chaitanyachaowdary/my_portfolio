
import React, { useState } from 'react';
import Section from './Section';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        // Simulate a form submission API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });

            // Hide the success message after a few seconds so the user can send another message
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1000);
    };

    return (
        <section id="contact-info">
    <h2>Contact Me</h2>
    <p>I'm always open to new opportunities and collaborations!</p>
    <ul>
        <li><strong>Email:</strong> <a href="mailto:yalamasettychaitanyachowdary@gmail.com">yalamasettychaitanyachowdary@gmail.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5" target="_blank" rel="noopener noreferrer">linkedin.com/in/chaitanya-yelamasetty-a1487b2a5</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Chaitanyachaowdary" target="_blank" rel="noopener noreferrer">github.com/Chaitanyachaowdary</a></li>
        <li><strong>Phone (Optional):</strong> +91-799385693</li>
        <li><strong>Location (Optional):</strong> Bengaluru, India</li>
    </ul>
    <p>Feel free to reach out!</p>
</section>
    );
};

export default Contact;