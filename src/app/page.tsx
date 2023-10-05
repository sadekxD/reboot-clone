import { MainNav } from "@/components/main-nav";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
	return (
		<main className="min-h-screen min-w-full scrollbar-hide">
			<div className="top-0 sticky px-5 md:px-10 lg:px-20 pb-24 scrollbar-hide">
				<MainNav />
				<section>
					<h1 className="text-2xl md:text-[32px] leading-[48px] font-bold mt-32">
						an independent product team
					</h1>
					<div className="space-y-1 mt-9">
						<p className="p1">
							We are product enthusiasts. Builders. Makers. Designers.
							Engineers.
						</p>
						<p className="p1">
							We develop our own ideas and partner with ambitious founders.
						</p>
						<p className="p1">We shape the future one product at a time.</p>
					</div>
					<div className="space-y-1 mt-[64px]">
						<p className="p1">We don't have time to build a fancy site.</p>
						<p className="p1">Here is where we spent.</p>
					</div>
				</section>

				<Portfolio />

				<div className="space-y-1 mt-10">
					<p className="p2">
						Read our <span className="font-medium">manifest</span> to know what
						we stand for.
					</p>
					<p className="p2">
						Tune our <span className="font-medium">radio</span> for a curated
						selection.
					</p>
					<p className="p2">
						Reach at <span className="font-medium">hey@reboot.studio</span>
					</p>
					<p className="p2">
						We’re on <span className="font-medium">twitter</span>
					</p>
				</div>
			</div>
			<div className="mb-8 hidden h-[calc((4/3)*(100vh-537.5px))] max-h-[calc(420px*(4/3))] min-h-[calc(278px*(4/3))] bg-transparent last:mb-0 last:h-[calc(((4/3)*(100vh-537.5px))-154px)] last:max-h-[calc((447px*(4/3))+(100vh-1150px))] last:min-h-[calc((278px*(4/3))+(100vh-1452px))] md:flex"></div>
			<div className="mb-8 hidden h-[calc((4/3)*(100vh-537.5px))] max-h-[calc(420px*(4/3))] min-h-[calc(278px*(4/3))] bg-transparent last:mb-0 last:h-[calc(((4/3)*(100vh-537.5px))-154px)] last:max-h-[calc((447px*(4/3))+(100vh-1150px))] last:min-h-[calc((278px*(4/3))+(100vh-1452px))] md:flex"></div>
			<div className="mb-8 hidden h-[calc((4/3)*(100vh-537.5px))] max-h-[calc(420px*(4/3))] min-h-[calc(278px*(4/3))] bg-transparent last:mb-0 last:h-[calc(((4/3)*(100vh-537.5px))-154px)] last:max-h-[calc((447px*(4/3))+(100vh-1150px))] last:min-h-[calc((278px*(4/3))+(100vh-1452px))] md:flex"></div>
			<div className="mb-8 hidden h-[calc((4/3)*(100vh-537.5px))] max-h-[calc(420px*(4/3))] min-h-[calc(278px*(4/3))] bg-transparent last:mb-0 last:h-[calc(((4/3)*(100vh-537.5px))-154px)] last:max-h-[calc((447px*(4/3))+(100vh-1150px))] last:min-h-[calc((278px*(4/3))+(100vh-1452px))] md:flex"></div>
		</main>
	);
}
