import Link from "next/link";
import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { useInView } from "react-intersection-observer";

interface CardProps {
	id: number;
	title: string;
	href: string;
	videoUrl: string;
	thumbnail: string;
	focusedItem: number | null;
	setFocusedItem: Dispatch<SetStateAction<number | null>>;
}

export function Card2({
	id,
	title,
	href,
	videoUrl,
	thumbnail,
	focusedItem,
	setFocusedItem,
}: CardProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [value, setValue] = useState(0);
	const { ref, inView, entry } = useInView({
		threshold: 1,
		rootMargin: "-20% 0px -20% 0px",
	});

	const increaseFractionally = () => {
		const increment = 2 / 100; // Fractional increment
		const interval = 200 / 1000; // Time interval in seconds (2ms)

		const timer = setInterval(() => {
			setValue((prevValue) => {
				const newValue = prevValue + increment;

				if (newValue >= 2) {
					clearInterval(timer);
					return 2; // Ensure the value is exactly 2
				}

				return newValue;
			});
		}, interval);
	};

	const _focus = (id: number) => {
		setFocusedItem(id);
		videoRef.current?.play();
	};

	const _blur = () => {
		setFocusedItem(null);
		videoRef.current?.pause();
	};

	useEffect(() => {
		if (inView) {
			increaseFractionally();
		} else {
			setValue(0);
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className="group pointer-events-none md:pointer-events-auto relative overflow-hidden max-w-full max-h-[500px] rounded-[10px] border"
			style={{
				backgroundImage: `url(${thumbnail})`,
				opacity: inView ? 1 : 0.5,

				filter: `blur(${inView ? "0px" : value + "px"})`,
			}}
			onMouseOver={() => _focus(id)}
			onMouseOut={_blur}
		>
			<Link href={href}>
				<video
					ref={videoRef}
					className="z-0 h-full w-full bg-transparent"
					loop
					muted
					poster={thumbnail}
					playsInline
					preload="auto"
					controlsList="nodownload"
				>
					<source src={videoUrl} type="video/webm" />
				</video>
				<div className="absolute bottom-0 left-0 w-full p-4">
					<p className="p1 font-medium !text-black">{title}</p>
					<p className="p1 group-hover:opacity-0">Public site</p>
					<p className="p1 absolute bottom-4 opacity-0 group-hover:opacity-100">
						Show live site
					</p>
				</div>
			</Link>
		</div>
	);
}
