import React from 'react'
import Image from 'next/image'

export const Banner = () => {
	return (
		<div className='relative h-[300px] sm:h-[500px] lg:h-[600px]'>
			<Image
				src='/heroimage.webp'
				alt='Airbnb Heroimage'
				fill
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/>
			<div className='absolute top-1/2 w-full text-center'>
				<p className='text-sm sm:text-lg'>
					Not sure where to go? Perfect.
				</p>
				<button
					className='text-purple-500 bg-white px-10 py-4 
				shadow-md rounded-full font-bold my-3 hover:shadow-xl 
				active:scale-90 transition duration-150'>
					I'm flexible
				</button>
			</div>
		</div>
	)
}
