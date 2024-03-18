import {  useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


import React from 'react'

const Particlse = () => {

	const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles 
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

  return (
	<div> {init && <Particles
	id="tsparticles"
	particlesLoaded={particlesLoaded}
	options={{
		background: {
			color: {
				value: "#262626",
			},
		},
		fpsLimit: 120,
		interactivity: {
			events: {
				onClick: {
					enable: true,
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
					quantity: 8,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				},
			},
		},
		particles: {
			color: {
				value: "#ffdd40",
			},
			links: {
				color: "#ffdd40",
				distance: 200,
				enable: true,
				opacity: 0.5,
				width: 1,
			},
			move: {
				direction: "none",
				enable: true,
				outModes: {
					default: "bounce",
				},
				random: false,
				speed: 6,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					area: 800,
				},
				value: 80,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: "star",
			},
			size: {
				value: { min: 1, max: 5 },
			},
		},
		detectRetina: true,
	}}
/>}</div>
  )
}

export default Particlse