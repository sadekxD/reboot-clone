"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card1 } from "@/components/cards/card1";
import { projects } from "@/data/mockData";
import { Card2 } from "./cards/card2";

export function Portfolio() {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const [focusedItem, setFocusedItem] = useState<number | null>(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const target = scrollRef.current;
		const scrollWidth = target?.offsetWidth as number;
		let tween = gsap.to(target, {
			x: -scrollWidth + 538,
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
		<div className="mt-10">
			<div ref={scrollRef} className="w-fit gap-10 hidden md:flex">
				{projects.map((project, _) => (
					<Card1
						key={_}
						focusedItem={focusedItem}
						setFocusedItem={setFocusedItem}
						{...project}
					/>
				))}
			</div>
			<div className="w-fit gap-6 flex flex-col md:hidden">
				{projects.map((project, _) => (
					<Card2
						key={_}
						focusedItem={focusedItem}
						setFocusedItem={setFocusedItem}
						{...project}
					/>
				))}
			</div>
		</div>
	);
}
