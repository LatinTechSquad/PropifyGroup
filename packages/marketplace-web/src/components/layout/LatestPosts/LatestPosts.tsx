'use client';

import CardProduct from '@/components/ui/card/CardProduct';
import img1 from '@/assets/IMAGEN1.png';
import img2 from '@/assets/IMAGEN2.png';

const LatestPosts = () => {
	return (
		<section className="w-full p-4">
			<div className="grid grid-cols-12 items-center justify-around gap-2 col-span-12">
				<div className="flex gap-6 px-4 py-4 col-span-6">
					<article>
						<CardProduct img={img1} price="$$$" description="lorem ipsum dolor sit amet, consectetur adip incid id" />
					</article>
					<article>
						<CardProduct img={img1} price="$$$" description="lorem ipsum dolor sit amet, consectetur adip incid id" />
					</article>
				</div>

				<div className="col-span-6 gap-6 px-4 py-4">
					<article>
						<CardProduct img={img2} price="$$$" description="lorem ipsum dolor sit amet, consectetur adip incid id" />
					</article>
				</div>
			</div>

			<div className="grid grid-cols-12 items-center justify-around gap-2 col-span-12">
				<div className="col-span-6 gap-6 px-4 py-4">
					<article>
						<CardProduct img={img2} price="$$$" description="lorem ipsum dolor sit amet, consectetur adip incid id" />
					</article>
				</div>

				<div className="flex gap-6 px-4 py-4 col-span-6">
					<article>
						<CardProduct img={img1} price="$$$" description="lorem ipsum dolor sit amet, consectetur adip incid id" />
					</article>
					<article>
						<CardProduct img={img1} price="$$$" description="lorem ipsum dolor sit amet, consectetur adip incid id" />
					</article>
				</div>
			</div>
		</section>
	);
};

export default LatestPosts;
