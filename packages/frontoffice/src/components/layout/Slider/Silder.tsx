'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const slides = [
	'/slider/slide0.png',
	'/slider/slide1.png',
	'/slider/slide2.png',
	'/slider/slide3.png',
	'/slider/slide4.png',
	'/slider/slide5.png',
];

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
	};

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
	};

	useEffect(() => {
		const interval = setInterval(() => {
			goToNext();
		}, 10000);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="relative w-full h-[50vh] overflow-hidden">
			<div className="absolute inset-0">
				<Image src={slides[currentIndex]} layout="fill" objectFit="cover" alt={`Slide ${currentIndex + 1}`} priority />
			</div>
			<button
				onClick={goToPrevious}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10"
			>
				0
			</button>
			<button
				onClick={goToNext}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full z-10"
			>
				0
			</button>
		</div>
	);
};

export default Slider;
