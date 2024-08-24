// CardContainer.tsx
import React, { CSSProperties } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardContainerProps {
	title: string;
	price: string;
	location: string;
	info: string;
	bat: string;
	description: string;
	image: StaticImageData;
}

const CardContainer: React.FC<CardContainerProps> = ({ title, price, location, info, bat, description, image }) => {
	// Define estilos base dentro del componente
	const containerStyles: CSSProperties = {
		position: 'relative',
		width: '100%',
		backgroundColor: '#F2EEE7',
		borderRadius: '8px',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	};

	const imageStyles: CSSProperties = {
		width: '50%',
		height: '100%',
		position: 'absolute',
		top: 0,
	};

	return (
		<div style={containerStyles}>
			<Image src={image} alt={title} style={imageStyles} />
			<div className="flex flex-col items-start">
				<h3 className="font-bold text-xl">{title}</h3>
				<p>{price}</p>
				<p>{location}</p>
				<p>{info}</p>
				<p>{bat}</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default CardContainer;
