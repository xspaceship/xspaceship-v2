import { NextSeo } from 'next-seo';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';
import { getAllImage } from 'utils/image';
import FullWidth from 'components/md/FullWidth';
import TwoColumns from 'components/md/TwoColumns';

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
				grid="col-span-12 md:col-span-9 2xl:col-span-11"
				font="questrial ld01 md:leading-tight"
				className="text-white text-fs01 md:text-7xl"
				dangerouslySetInnerHTML={{ __html: headline }}
			/>
		</div>

		{/* Working here */}

		{/* <FullWidth>
			<TwoColumns>
				<div>
					<h1 font="questrial" className="text-3xl lg:text-4xl" m="b-5" grid="col-span-3 col-start-2"> 
						Working here
					</h1>
					<h2 font="questrial" className="text-3xl lg:text-4xl">Professional growth</h2>
				</div>
			</TwoColumns>
		</FullWidth> */}

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
					<Image {...i} alt="" />
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
