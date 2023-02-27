import React from 'react'
import Image from 'next/image'

export const LargeCard = ({
	img = '',
	title = '',
	description = '',
	buttonText = '',
}) => {
	return (
		<div className='relative py-16 cursor-pointer'>
			<div className='relative min-w-[300px] h-60 md:h-96'>
				<Image
					src={img}
					alt={title}
					className='rounded-2xl'
					fill
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					tyle={{ objectFit: 'cover' }}
				/>
			</div>
			<div className='absolute top-24 md:top-32 left-12'>
				<h3 className='text-2xl md:text-4xl mb-3 w-64'>{title}</h3>
				<p>{description}</p>
				<button
					className='text-sm text-white bg-gray-900 
                px-4 py-2 rounded-lg mt-5'>
					{buttonText}
				</button>
			</div>
		</div>
	)
}
