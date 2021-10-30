import { NextSeo } from 'next-seo';
import Layout from 'components/Layout';
import Image from 'components/Image';
import Button from 'components/Button';
import meta from 'content-careers.json';
import { getAllImage } from 'utils/image';
import { template } from '@antfu/utils';

const careers = ({
	title,
	description,
	ogImage,
	headline,
	location,
	team,
	positions,
	values,
	working,
}) => (
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
			p="x-16 y-16 lg:x-22.5 lg:y-22.5"
			m="x-5 lg:x-10 b-5 sm:x-5"
			grid="~ cols-12 gap-5"
			border="rounded-lg"
			bg="bg02"
		>
			<h1
				grid="col-span-8 md:col-span-8 2xl:col-span-8 sm:col-span-12"
				font="questrial ld01 md:leading-tight"
				className="text-white text-fs01 md:text-7xl"
				dangerouslySetInnerHTML={{ __html: headline }}
			/>
		</div>

		{/* Working here */}
		<div>
			<div className="grid grid-cols-12 font-worksans gap-x-12 gap-y-12 lg:mx-0 lg:px-22 md:px-16 lg:py-20 md:py-12 sm:py-8 sm:m-x-5">
				{/* Top section */}
				<div className="col-span-12">
					<h3 className="font-medium text-4xl">Working here</h3>
				</div>

				{/* Bottom section */}
				<div className="lg:col-span-8 md:col-span-6 sm:col-span-12">
					<div className="grid grid-cols-8 gap-x-12 gap-y-12">
						{/* Working here loop */}

						{working.working.map(({ name, description }, index) => (
							<div className="lg:col-span-4 md:col-span-8 sm:col-span-12 ">
								<h2 className="font-medium text-2xl"> {name} </h2>
								<p className="mt-4">{description}</p>
							</div>
						))}
					</div>
				</div>

				<div
					className="row-span-2 lg:col-span-4 md:col-span-6 sm:col-span-12 border border-bc03 rounded-lg md:row-span-2 sm:row-span-8"
					backgroundImage="{...team.image}"
				>
					{/* <Image {...team.image} alt="" /> */}
				</div>
			</div>
		</div>

		<div className="lg:mx-0 md:mx-0 sm:mx-5 font-worksans">
			<div className="col-span-12 md:px-22">
				<h3 className="font-medium text-4xl mb-8">Our values</h3>
			</div>
			<div className="grid grid-cols-3 gap-x-5 gap-y-5 pb-20 md:px-22 font-worksans">
				{/* Loop values */}

				{values.value.map(({ name }, index) => (
					<div className="p-8 border border-bc03 rounded-lg">
						<h4 className="text-2xl">{name}</h4>
					</div>
				))}
			</div>
		</div>

		{/* Location */}

		<div className="mx-5">
			{location.image.map((i, index) => (
				<div
					grid="col-span-12"
					w="auto md:full"
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
		</div>

		<div className="grid grid-cols-12 gap-x-5 gap-y-5 pb-0 md:px-22 font-worksans mt-16">
			<div className="border border-bc03 rounded-lg p-8 py-0 col-span-12">
				<div className="grid grid-cols-12">
					<div className="lg:col-span-4 md:col-span-4 sm:col-span-12">
						<h3 className="text-3xl lg:text-4xl mb-12 pt-8">Design</h3>
					</div>
					<div className="lg:col-span-8 md:col-span-8 sm:col-span-12">
						<div className="col-span-8 divide-y-1 divide-bc03">
							{/* Loop different jobs */}

							{positions.position.map(({ name, job_description }, index) => (
								<div className="p-8 pl-0">
									<h4 className="text-2xl mb-4">{name}</h4>
									<p className="mb-6">{job_description}</p>
									<Button text="Apply now" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default careers;

export async function getStaticProps() {
	const images = await getAllImage('careers');
	const careers = { ...meta.careers };
	const { ogImage } = meta;
	const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

	const { location, team, positions, values, working } = careers;

	const newCareers = {
		...careers,
		team: { ...team, image: { ...team.image, ...images[team.image.name] } },
		location: {
			...location,
			image: location.image.map(i => ({ ...i, ...images[i.name] })),
		},
		positions: {
			...positions,
			position: positions.map(i => ({ ...i })),
		},
		values: {
			...values,
			value: values.map(i => ({ ...i, ...images[i.name] })),
		},
		working: {
			...working,
			working: working.map(i => ({ ...i })),
		},
	};

	return { props: { ...newCareers, ogImage: addedHostUrlOgImage } };
}
