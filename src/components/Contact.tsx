
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
        <Section id="contact" title="Get In Touch">
            <div className="max-w-xl mx-auto">
                {isSubmitted ? (
                    <div className="text-center bg-secondary p-8 rounded-lg animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-accent mb-4">Thank You!</h3>
                        <p className="text-light-gray">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 bg-primary border border-secondary rounded-md text-light-gray placeholder-medium-gray/50 focus:ring-1 focus:ring-accent focus:border-accent transition"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-medium-gray mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 bg-primary border border-secondary rounded-md text-light-gray placeholder-medium-gray/50 focus:ring-1 focus:ring-accent focus:border-accent transition"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-medium-gray mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 bg-primary border border-secondary rounded-md text-light-gray placeholder-medium-gray/50 focus:ring-1 focus:ring-accent focus:border-accent transition"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-accent text-primary text-lg font-bold rounded-md hover:bg-accent-hover transition-all duration-300 shadow-lg transform hover:scale-105 disabled:bg-medium-gray/50 disabled:cursor-not-allowed disabled:scale-100"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </Section>
    );
};

export default Contact;