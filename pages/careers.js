import { NextSeo } from 'next-seo';
import Layout from 'components/Layout';
// import Image from 'components/Image';
import meta from 'content-careers.json';
import { getAllImage } from 'utils/image';

const careers = ({
	title,
	description,
	ogImage,
	headline,
	// location,
	// team,
	// positions,
	values,
	workings,
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

		<div className="col-span-12 mx-10 rounded-lg">
			<img src="/images/careers/team.png" className="rounded-lg" />
		</div>

		{/* Working here */}
		<div className="lg:mx-32 md:mx-0 sm:mx-5 font-worksans divide-y-1 divide-bc03">
			<div className="grid grid-cols-12 font-worksans gap-x-12 gap-y-8 lg:mx-0 md:px-0 lg:py-20 md:py-12 sm:py-8 sm:m-x-5 mb-0">
				<div className="col-span-12">
					<h3 className="font-medium text-4xl mb-4">Working here</h3>
				</div>

				<div className="lg:col-span-12 md:col-span-6 sm:col-span-12">
					<div className="grid grid-cols-12 gap-x-5 gap-y-5">
						{/* Working here loop */}

						{workings.working.map(({ name, description, image }, index) => (
							<div key={index} className="md:col-span-6 sm:col-span-12">
								<div className="grid grid-cols-12 gap-x-8">
									<div className="col-span-12 rounded-lg p-8 row-span-3 bg-white bg-opacity-5">
										<img src={image.name} width="64" className="pb-4" />
										<h2 className="font-medium text-2xl"> {name} </h2>
										<p className="mt-2">{description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div>
				<div className="col-span-12 md:px-0 mt-20">
					<h3 className="font-medium text-4xl mb-12">Our values</h3>
				</div>
				<div className="grid grid-cols-3 gap-x-5 gap-y-5 pb-20 md:px-0 font-worksans">
					{/* Loop values */}
					{/* style={{backgroundColor: color}} */}
					{values.value.map(({ name, color }, index) => (
						<div key={index} className="p-8 rounded-lg bg-white bg-opacity-5">
							<h4 className="text-2xl">{name}</h4>
						</div>
					))}
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

	const { location, team, positions, values, workings } = careers;

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
		workings: {
			...workings,
			working: workings.map(i => ({ ...i, ...images[i.name] })),
		},
	};

	return { props: { ...newCareers, ogImage: addedHostUrlOgImage } };
}

// import { NextSeo } from 'next-seo';
// import Layout from 'components/Layout';
// import Image from 'components/Image';
// import Button from 'components/Button';
// import meta from 'content-careers.json';
// import { getAllImage } from 'utils/image';

// TEMPORARILY COMMENTED

// const careers = ({
// 	title,
// 	description,
// 	ogImage,
// 	headline,
// 	location,
// 	team,
// 	positions,
// 	values,
// 	working,
// }) => (
// 	<Layout title={title} p="2xl:t-8">
// 		{/* SEO */}
// 		<NextSeo
// 			title={title}
// 			description={description}
// 			openGraph={{
// 				title,
// 				description,
// 				images: [
// 					{
// 						url: ogImage,
// 						alt: title,
// 						type: 'png',
// 					},
// 				],
// 			}}
// 		/>

// 		{/* Headline */}
// 		<div
// 			p="x-16 y-16 lg:x-22.5 lg:y-22.5"
// 			m="x-5 lg:x-10 b-5 sm:x-5"
// 			grid="~ cols-12 gap-5"
// 			border="rounded-lg"
// 			bg="bg02"
// 		>
// 			<h1
// 				grid="col-span-8 md:col-span-8 2xl:col-span-8 sm:col-span-12"
// 				font="questrial ld01 md:leading-tight"
// 				className="text-white text-fs01 md:text-7xl"
// 				dangerouslySetInnerHTML={{ __html: headline }}
// 			/>
// 		</div>

// 		<div className="col-span-12 mx-10 rounded-lg">
// 			<img src="/images/careers/team.png" className="rounded-lg" />
// 		</div>

// 		{/* Working here */}
// 		<div className="lg:mx-32 md:mx-0 sm:mx-5 font-worksans divide-y-1 divide-bc03">
// 			<div className="grid grid-cols-12 font-worksans gap-x-12 gap-y-8 lg:mx-0 md:px-0 lg:py-20 md:py-12 sm:py-8 sm:m-x-5 mb-0">
// 				{/* Top section */}
// 				<div className="col-span-12">
// 					<h3 className="font-medium text-4xl mb-4">Working here</h3>
// 				</div>

// 				{/* Bottom section */}
// 				<div className="lg:col-span-12 md:col-span-6 sm:col-span-12">
// 					<div className="grid grid-cols-12 gap-x-5 gap-y-5">
// 						{/* Working here loop */}

// 						{working.working.map(({ name, description, image }, index) => (
// 							<div className="md:col-span-6 sm:col-span-12">
// 								<div className="grid grid-cols-12 gap-x-8">
// 									{/* <img
// 										src={image.name}
// 										width="auto"
// 										className="border border-bc03 rounded-lg p-6 col-span-3"
// 									/> */}

// 									<div class="col-span-12 rounded-lg p-8 row-span-3 bg-white bg-opacity-5">
// 										<img src={image.name} width="64" className="pb-4" />
// 										<h2 className="font-medium text-2xl"> {name} </h2>
// 										<p className="mt-2">{description}</p>
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 			<div>
// 				<div className="col-span-12 md:px-0 mt-20">
// 					<h3 className="font-medium text-4xl mb-12">Our values</h3>
// 				</div>
// 				<div className="grid grid-cols-3 gap-x-5 gap-y-5 pb-20 md:px-0 font-worksans">
// 					{/* Loop values */}
// 					{/* style={{backgroundColor: color}} */}
// 					{values.value.map(({ name, color }, index) => (
// 						<div className="p-8 rounded-lg bg-white bg-opacity-5">
// 							<h4 className="text-2xl">{name}</h4>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</div>

// 		{/* Location */}

// 		<div className="mx-10">
// 			{location.image.map((i, index) => (
// 				<div
// 					grid="col-span-12"
// 					w="auto md:full"
// 					className="scale-img-child"
// 					m="x-auto"
// 					key={index}
// 				>
// 					<Image
// 						{...i}
// 						alt=""
// 						caption="Our co-working space at Soho Works in Dumbo, Brooklyn, New York City"
// 						captionAlignment="center"
// 					/>
// 				</div>
// 			))}
// 		</div>

// 		<div className="grid grid-cols-12 gap-x-5 gap-y-5 pb-0 md:px-22 font-worksans mt-16">
// 			<div className="border border-bc03 rounded-lg p-8 py-0 col-span-12">
// 				<div className="grid grid-cols-12">
// 					<div className="lg:col-span-4 md:col-span-4 sm:col-span-12">
// 						<h3 className="text-3xl lg:text-4xl mb-12 pt-8">Design</h3>
// 					</div>
// 					<div className="lg:col-span-8 md:col-span-8 sm:col-span-12">
// 						<div className="col-span-8 divide-y-1 divide-bc03">
// 							{/* Loop different jobs */}

// 							{positions.position.map(({ name, job_description }, index) => (
// 								<div className="p-8 pl-0">
// 									<h4 className="text-2xl mb-4">{name}</h4>
// 									<p className="mb-6">{job_description}</p>

// 									{/* <Button text="Apply now" /> */}
// 									<button
// 										class="primary border px-6 py-2 rounded-md"
// 										type="button"
// 									>
// 										Apply
// 									</button>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</Layout>
// );

// export default careers;

// export async function getStaticProps() {
// 	const images = await getAllImage('careers');
// 	const careers = { ...meta.careers };
// 	const { ogImage } = meta;
// 	const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

// 	const { location, team, positions, values, working } = careers;

// 	const newCareers = {
// 		...careers,
// 		team: { ...team, image: { ...team.image, ...images[team.image.name] } },
// 		location: {
// 			...location,
// 			image: location.image.map(i => ({ ...i, ...images[i.name] })),
// 		},
// 		positions: {
// 			...positions,
// 			position: positions.map(i => ({ ...i })),
// 		},
// 		values: {
// 			...values,
// 			value: values.map(i => ({ ...i, ...images[i.name] })),
// 		},
// 		working: {
// 			...working,
// 			working: working.map(i => ({ ...i, ...images[i.name] })),
// 		},
// 	};

// 	return { props: { ...newCareers, ogImage: addedHostUrlOgImage } };
// }

// const Careers = () => <div>Careers Page</div>;

// export default Careers;
