import React, {useCallback, useEffect, useState} from 'react';
import Head from 'next/head';
import anime from 'animejs';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function Home() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSendEmail = () => {
        console.log(`Sending email to: ${email}`);
    };

    useEffect(() => {
        const textAnimation = anime.timeline();
        textAnimation
            .add({
                targets: '.title',
                opacity: [0, 1],
                translateY: [-50, 0],
                easing: 'easeOutExpo',
                duration: 1500,
            })
            .add({
                targets: '.subtitle',
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1500,
            })
            .add({
                targets: '.email',
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
            });

    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-gray-400 text-white">
            <Head>
                <title>Flare - Coming Soon</title>
                <link rel="icon" href="https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/b/b2/Torch.png" />
            </Head>

            <main className="text-center">
                <h1 className="text-7xl font-bold mb-4 title font-pt-sans">Flare</h1>
                <p className="text-2xl subtitle font-pt-sans">Coming Soon!</p>
                <div className="mt-14">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        className="px-4 py-2 email rounded-full bg-black text-white hover:text-white focus:outline-none focus:border-blue-300"
                    />
                    <button
                        onClick={handleSendEmail}
                        className="ml-4 px-4 py-2 email rounded-full bg-black text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                        Send
                    </button>
                </div>
            </main>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
