import Link from "next/link";

interface CardProps {
	title: string;
	href: string;
	videoUrl: string;
	thumbnail: string;
}

export function Card({ title, href, videoUrl, thumbnail }: CardProps) {
	return (
		<Link href={href}>
			<div className="relative min-w-[538px] h-[403px] rounded-[10px] border">
				<video
					className="z-0 h-full w-full bg-transparent"
					loop
					muted
					poster={thumbnail}
					playsInline
					preload="auto"
				>
					<source src={videoUrl} type="video/webm" />
				</video>
				<div className="space-y-1 absolute left-5 bottom-5">
					<p className="p1 !text-black">{title}</p>
					<p className="p1 text-granite">Public site</p>
				</div>
			</div>
		</Link>
	);
}
