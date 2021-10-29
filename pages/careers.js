import { NextSeo } from 'next-seo';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';
import { getAllImage } from 'utils/image';
import FullWidth from 'components/md/FullWidth';
import TwoColumns from 'components/md/TwoColumns';
import Paragraph from 'components/md/Paragraph';
import RegularWidth from 'components/md/RegularWidth';

const careers = ({ title, description, ogImage, headline, location }) => (
	<Layout title={title} p="2xl:t-8">
		{/* SEO */}
		<NextSeo
			title={title}
			description={description}
			openGraph={{
				title,
				description,
				images: [
					{
						url: ogImage,
						alt: title,
						type: 'png',
					},
				],
			}}
		/>
		{/* Headline */}
		<div
			p="x-5 y-7.5 lg:x-22.5 lg:y-32"
			m="x-5 lg:x-10 b-5"
			grid="~ cols-12 gap-5"
			border="rounded-lg"
			bg="bg02"
		>
			<h1
				grid="col-span-6 md:col-span-9 2xl:col-span-6 sm:col-span-12"
				font="questrial ld01 md:leading-tight"
				className="text-white text-fs01 md:text-7xl"
				dangerouslySetInnerHTML={{ __html: headline }}
			/>
		</div>

		{/* Working here */}
		<RegularWidth>
			<div className="grid font-worksans divide-y-1 divide-white ">
				<div>
					{/* Top section */}
					<div className="mb-8 flex flex-col lg:flex-row mt-16">
						<div className="flex-grow">
							<h3 className="font-medium mb-4 text-4xl">Working here</h3>
						</div>
					</div>

					{/* Bottom section */}
					<div className="grid grid-cols-12 gap-x-24 gap-y-8 mb-16">
						<div className="col-span-5">
							<h2 className="font-medium mb-4 text-2xl">Professional growth</h2>
							<p className="mb-2">
								We understand your needs & strengths to help you design a career
								growth plan that’s clear, actionable, and achievable. You will
								also be provided with the right resources and mentorship to
								learn new skills.
							</p>
						</div>

						<div className="col-span-5">
							<h2 className="font-medium mb-4 text-2xl">Work / life balance</h2>
							<p className="mb-2">
								Happy employees mean productive employees. Our flexible time off
								policy allows you to take good care of yourself and your family.
								We believe that 10-6 is the best work schedule.
							</p>
						</div>

						<div className="col-span-5">
							<h2 className="font-medium mb-4 text-2xl">Start-up culture</h2>
							<p className="mb-2">
								We are nimble and flexible. We cut down on unecessary processes
								and focus on delivering the best work. We adopt a flat hierarchy
								and foster tight collaboration.
							</p>
						</div>

						<div className="col-span-5">
							<h2 className="font-medium mb-4 text-2xl">Remote-first</h2>
							<p className="mb-2">
								Do your best work from the comfort of your home. We use the best
								technology to make asynchronous collaboration as seamless as
								in-person. Whenever needed, use our New York office for offline
								meetings.
							</p>
						</div>
					</div>
				</div>
				<div className="pb-10 flex flex-col lg:flex-row">
					<div className="flex-grow mt-16">
						<h3 className="font-medium mb-4 text-4xl">Our work space</h3>
					</div>
				</div>
			</div>
		</RegularWidth>

		{/* Location */}
		<FullWidth>
			{location.image.map((i, index) => (
				<div
					grid="md:col-span-3"
					w="48 md:full"
					className="scale-img-child"
					m="x-auto"
					key={index}
				>
					<Image
						{...i}
						alt=""
						caption="Our co-working space at Soho Works in Dumbo, Brooklyn, New York City"
						captionAlignment="center"
					/>
				</div>
			))}
		</FullWidth>
	</Layout>
);

export default careers;

export async function getStaticProps() {
	const images = await getAllImage('careers');
	const careers = { ...meta.careers };
	const { ogImage } = meta;
	const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

	const { location } = careers;

	const newCareers = {
		...careers,
		// location: {
		// 	...location,
		// 	image: { ...location.image, ...images[location.image.name] },
		// },
		location: {
			...location,
			image: location.image.map(i => ({ ...i, ...images[i.name] })),
		},
	};

	return { props: { ...newCareers, ogImage: addedHostUrlOgImage } };
}
