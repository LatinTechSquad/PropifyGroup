'use client';

import FeaturedPosts from '@/components/layout/FeaturedPosts/FeaturedPosts';
import LatestPosts from '@/components/layout/LatestPosts/LatestPosts';
import SearchBox from '@/components/layout/SearchBox/SearchBox';
import Slider from '@/components/layout/Slider/Silder';

export default function Home() {
	return (
		<>
			<div className="border-y-[12px] border-[#4A5271]">
				<Slider />
			</div>

			<div className="border-y-[12px] border-[#4A5271]">
				<SearchBox />
			</div>
			<div className="border-y-[12px] border-[#4A5271]">
				<LatestPosts />
			</div>

			<div className="border-y-[12px] border-[#4A5271]">
				<FeaturedPosts />
			</div>
		</>
	);
}
