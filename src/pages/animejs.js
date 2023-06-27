import React, { useEffect } from 'react';
import Head from 'next/head';
import anime from 'animejs';
import { Particles } from "react-tsparticles";

export default function Home() {
    useEffect(() => {
        const textAnimation = anime.timeline();
        textAnimation
            .add({
                targets: '.logo',
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
            });
    }, []);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-gray-400 text-white">
            <Head>
                <title>Flare - Coming Soon</title>
                <link rel="icon" href="https://static.wikia.nocookie.net/minecraft/images/b/b2/Torch.png/revision/latest?cb=20200814160849" />
            </Head>

            <Particles
                id="tsparticles"
                className="particles"
                options={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 5,
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 2,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />

            <main className="text-center">
                <h1 className="text-7xl font-bold mb-4 logo font-pt-sans">Flare</h1>
                <p className="text-2xl subtitle font-pt-sans">Coming Soon!</p>
            </main>
        </div>
    );
}
