"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/card";
import { projects } from "@/data/mockData";

export function Portfolio() {
	const triggerRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		let tween = gsap.to(scrollRef.current, {
			x: -scrollRef.current?.offsetWidth + 538,
			scrollTrigger: {
				trigger: "main",
				scrub: 0.5,
				start: "top top",
				end: "bottom bottom",
			},
		});

		() => {
			tween.kill();
		};
	}, []);

	return (
		<div className="cards-wrapper mt-10">
			<div ref={scrollRef} className="cards flex w-fit gap-10">
				{projects.map((project, _) => (
					<Card key={_} {...project} />
				))}
			</div>
		</div>
	);
}
