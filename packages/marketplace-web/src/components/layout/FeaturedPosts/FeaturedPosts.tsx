'use client';

import CardContainer from '@/components/ui/card/CardContainer';
import galpon from '@/assets/SETLOCAL1.png';

const FeaturedPosts = () => {
	return (
		<section className="py-16">
			<span className="flex items-center justify-center bg-[#D9D9D9] rounded-xl px-6 py-1">
				<h2 className="text-5xl font-bold text-center text-primary-color">DESTACADOS DEL MES</h2>
			</span>

			<h3 className="font-semibold text-light-color text-3xl my-10 px-6">LOCALES Y GALPONES</h3>

			<div className="flex flex-col items-center gap-28 p-4">
				<article>
					<CardContainer
						title="Venta de local comercial"
						price="U$S489"
						location="En Montserrat"
						info={'215 m2'}
						bat={'1 baño'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lacinia ornare pharetra, curabitur morbi mus quisque feugiat aenean leo consequat eros.'
						}
						image={galpon}
					/>
				</article>

				<article>
					<CardContainer
						title="Venta de local comercial"
						price="U$S489"
						location="En Montserrat"
						info={'215 m2'}
						bat={'1 baño'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lacinia ornare pharetra, curabitur morbi mus quisque feugiat aenean leo consequat eros.'
						}
						image={galpon}
					/>
				</article>

				<article>
					<CardContainer
						title="Venta de local comercial"
						price="U$S489"
						location="En Montserrat"
						info={'215 m2'}
						bat={'1 baño'}
						description={
							'Lorem ipsum dolor sit amet consectetur adipiscing elit commodo lacinia ornare pharetra, curabitur morbi mus quisque feugiat aenean leo consequat eros.'
						}
						image={galpon}
					/>
				</article>
			</div>
		</section>
	);
};

export default FeaturedPosts;
