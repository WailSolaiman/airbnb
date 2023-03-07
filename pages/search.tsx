import React from 'react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { ParsedUrlQuery } from 'querystring'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface PostPageQuery extends ParsedUrlQuery {
	location: string
	startDate: string
	endDate: string
	numberOfGuests: string
}

type ResultsDataType = {
	img: string
	location: string
	title: string
	description: string
	star: number
	price: string
	total: string
	long: number
	lat: number
}

export default function Search(props: { searchResults: ResultsDataType[] }) {
	const router = useRouter()
	const { location, startDate, endDate, numberOfGuests } =
		router.query as PostPageQuery
	const startDateFormated = format(new Date(startDate), 'dd MMMM yy')
	const endDateFormated = format(new Date(endDate), 'dd MMMM yy')
	const range = `${startDateFormated} - ${endDateFormated}`

	return (
		<div>
			<Header
				placeHolder={`${location} | ${range} | ${numberOfGuests} Guest(s)`}
			/>

			<main className='flex'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'>
						300+ Stays - {range} - for {numberOfGuests} Guest(s)
					</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>
						Stays in {location}
					</h1>
					<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
						<p className='button'>Cancellation Flexibility</p>
						<p className='button'>Price</p>
						<p className='button'>Location</p>
						<p className='button'>Rooms & Beds</p>
					</div>

					{props.searchResults?.map((item: ResultsDataType) => (
						<div key={item.title}>
							<p>{item.title}</p>
							<p className='mb-8'>{item.description}</p>
						</div>
					))}
				</section>
			</main>

			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
		(res) => res.json()
	)

	return {
		props: {
			searchResults,
		},
	}
}
