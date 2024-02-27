import { settings } from "@/lib/data/data";
import Image from '@components/site/Image'


export default async function Home() {

	return (
		<div className="relative">
			<video autoPlay loop className="fixed min-w-full h-auto left-0 top-0 -z-1">
				<source src="https://littleportugaltorontobia.com/wp-content/uploads/2020/01/dundaswest_homevid.mp4" type="video/mp4" />
			</video>
			<div className="relative w-full min-w-full min-h-screen top-0 after:absolute after:inset-0 after:bg-accent/65  after:brightness-[0.35] after:saturate-[1.2] after:-hue-rotate-[5deg]">

					<div className="relative main-padding z-10 pt-80">

						<a href='/' aria-label='Link to the site home.' className='relative z-10'>
							{settings.logo &&
								<Image image={settings.logo} size={{ width: 500, height: 200, sizes: "(max-width: 300px) 40vw, (max-width: 244px) 20vw, 20vw" }} />
							}
						</a>

					</div>

			</div>
		</div>
	)
}