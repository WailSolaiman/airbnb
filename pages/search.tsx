import React from 'react'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function Search() {
	return (
		<div>
			<Header />

			<main className='flex'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'>
						300+ Stays for 5 number of Guests.
					</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in Mars
					</h1>
					<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
						<p className='button'>Cancellation Flexibility</p>
						<p className='button'>Price</p>
						<p className='button'>Location</p>
						<p className='button'>Rooms & Beds</p>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
