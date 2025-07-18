
import React from 'react';

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-medium-gray hover:text-accent transition-colors duration-300">
        {children}
    </a>
);

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20">
            <div className="max-w-3xl animate-fade-in-up">
                <p className="text-accent text-lg font-medium mb-2">Hi, my name is</p>
                <h1 className="text-5xl md:text-7xl font-extrabold text-light-gray mb-4">Chaitanya Yelamasetty.</h1>
                <h2 className="text-4xl md:text-6xl font-extrabold text-medium-gray mb-6">Aspiring Full Stack Web Developer.</h2>
                ```
                                <p className="text-medium-gray text-lg max-w-xl mb-8">
                                    I am an aspiring developer With a strong foundation in programming fundamentals and a passion for creating intuitive user experiences, I am an aspiring Full Stack Web Developer. My expertise includes building responsive web applications using modern frontend technologies like React.js, HTML5, CSS3, and Tailwind CSS, complemented by backend skills in Java, Python, and JavaScript. I am eager to apply my problem-solving abilities to contribute to innovative projects and grow within a collaborative development environment.
                                </p>
                                <div className="flex items-center space-x-6">
                                    <a href="#projects" className="px-6 py-3 bg-accent text-primary font-bold rounded-md hover:bg-accent-hover transition-colors duration-300 shadow-lg">
                                        See My Projects
                                    </a>
                                    <div className="flex items-center space-x-4">
                                       <SocialLink href="https://github.com/Chaitanyachaowdary">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.
                    <a href="#projects" className="px-6 py-3 bg-accent text-primary font-bold rounded-md hover:bg-accent-hover transition-colors duration-300 shadow-lg">
                        See My Projects
                    </a>
                    <div className="flex items-center space-x-4">
                       <SocialLink href="https://github.com/Chaitanyachaowdary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                       </SocialLink>
                       <SocialLink href="https://www.linkedin.com/in/chaitanya-yelamasetty-a1487b2a5">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.47 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z"/></svg>
                       </SocialLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
