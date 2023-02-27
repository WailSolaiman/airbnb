import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { SmallCard } from '../components/SmallCard'
import { MediumCard } from '../components/MediumCard'

type ExploreDataType = {
	img: string
	location: string
	distance: string
}

type CardsDataType = {
	img: string
	title: string
}

export default function Home(props: {
	exploreData: ExploreDataType[]
	cardsData: CardsDataType[]
}) {
	return (
		<div>
			<Head>
				<title>Airbnb</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Banner />
			<main className='max-w-6xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>
						Explore Nearby
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{props.exploreData?.map((item: ExploreDataType) => (
							<SmallCard
								key={item.location}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className='text-4xl font-semibold py-8'>
						Live Anywhere
					</h2>
					<div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
						{props.cardsData?.map((item: CardsDataType) => (
							<MediumCard
								key={item.title}
								img={item.img}
								title={item.title}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
		(res) => res.json()
	)

	const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
		(res) => res.json()
	)

	return {
		props: {
			exploreData,
			cardsData,
		},
	}
}
