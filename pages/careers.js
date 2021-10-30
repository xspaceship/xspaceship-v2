import { NextSeo } from 'next-seo';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';
import { getAllImage } from 'utils/image';
// import FullWidth from 'components/md/FullWidth';
// import TwoColumns from 'components/md/TwoColumns';
// import Paragraph from 'components/md/Paragraph';
// import RegularWidth from 'components/md/RegularWidth';

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
			<div className="grid grid-cols-12 font-worksans gap-x-16 gap-y-12 lg:mx-0 md:px-22 py-20 sm:m-x-5">
				{/* Top section */}
				<div className="col-span-12">
					<h3 className="font-medium text-4xl">Working here</h3>
				</div>

				{/* Bottom section */}
				<div className="lg:col-span-4 md:col-span-6 sm:col-span-12">
					{/* <img
						src="https://i.pinimg.com/originals/e4/7c/2a/e47c2aa118c0b9143ea2c7cd93848bb9.jpg"
						noRound
						className="mb-8 rounded-full w-20 h-20"
					/> */}
					<h2 className="font-medium text-2xl">Professional growth</h2>
					<p className="mt-4">
						We understand your needs & strengths to help you design a career
						growth plan that’s clear, actionable, and achievable. You will also
						be provided with the right resources and mentorship to learn new
						skills.
					</p>
				</div>

				<div className="lg:col-span-4 md:col-span-6 sm:col-span-12 ">
					{/* <img
						src="https://i.pinimg.com/originals/e4/7c/2a/e47c2aa118c0b9143ea2c7cd93848bb9.jpg"
						noRound
						className="mb-8 rounded-full w-20 h-20"
					/> */}
					<h2 className="font-medium text-2xl">Work / life balance</h2>
					<p className="mt-4">
						Happy employees mean productive employees. Our flexible time off
						policy allows you to take good care of yourself and your family. We
						believe that 10-6 is the best work schedule.
					</p>
				</div>

				<div className="row-span-3 col-span-4 border border-bc03 rounded-lg"></div>

				<div className="lg:col-span-4 md:col-span-6 sm:col-span-12 ">
					{/* <img
						src="https://i.pinimg.com/originals/e4/7c/2a/e47c2aa118c0b9143ea2c7cd93848bb9.jpg"
						noRound
						className="mb-8 rounded-full w-20 h-20"
					/> */}
					<h2 className="font-medium text-2xl">Start-up culture</h2>
					<p className="mt-4">
						We are nimble and flexible. We cut down on unecessary processes and
						focus on delivering the best work. We adopt a flat hierarchy and
						foster tight collaboration.
					</p>
				</div>

				<div className="lg:col-span-4 md:col-span-6 sm:col-span-12 ">
					{/* <img
						src="https://i.pinimg.com/originals/e4/7c/2a/e47c2aa118c0b9143ea2c7cd93848bb9.jpg"
						noRound
						className="mb-8 rounded-full w-20 h-20"
					/> */}
					<h2 className="font-medium text-2xl">Remote-first</h2>
					<p className="mt-4">
						Do your best work from the comfort of your home. We use the best
						technology to make asynchronous collaboration as seamless as
						in-person. Whenever needed, use our New York office for offline
						meetings.
					</p>
				</div>
			</div>
		</div>

		<div>
			<div className="col-span-12 font-worksans md:px-22">
				<h3 className="font-medium text-4xl mb-8">Our values</h3>
			</div>
			<div className="grid grid-cols-3 gap-x-5 gap-y-5 pb-20 md:px-22">
				<div className="border border-bc03 rounded-lg p-8 text-2xl">
					Inquisitive
				</div>
				<div className="border border-bc03 rounded-lg p-8 text-2xl">Nimble</div>
				<div className="border border-bc03 rounded-lg p-8 text-2xl">
					Passionate
				</div>
				<div className="border border-bc03 rounded-lg p-8 text-2xl">
					High-craft
				</div>
				<div className="border border-bc03 rounded-lg p-8 text-2xl">Open</div>
				<div className="border border-bc03 rounded-lg p-8 text-2xl">
					Diverse
				</div>
			</div>
		</div>

		{/* Location */}
		<div>
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
		</div>

		{/* <div>
			<div className="col-span-12 font-worksans md:px-22">
				<h3 className="font-medium text-4xl mb-8">Open positions</h3>
			</div>
			<div className="grid grid-cols-12 border border-bc03 rounded-lg p-16 font-worksans">
				<div className="col-span-4">
					<h3 className="text-3xl lg:text-4xl">Design</h3>
				</div>
				<div className="col-span-8 divide-y-1 divide-white">
					<div className="p-8 pl-0 pt-0">
						<h4 className="text-2xl mb-4">Lead Product Designer</h4>
						<p>
							Both a strategic thinker and a masterful craftsman. Can lead a
							team, present in meetings with our clients and drive projects to
							the finish line.
						</p>
					</div>
					<div className="p-8 pl-0">
						<h4 className="text-2xl mb-4">Product Designer</h4>
						<p>
							Generalist designer who can lead a design process end-to-end.
							Equally skills with product thinking, interaction design and
							visual design.
						</p>
					</div>
					<div className="p-8 pl-0 pb-0">
						<h4 className="text-2xl mb-4">Design Intern</h4>
						<p>
							A designer with strong foundation and can execute tactical tasks.
						</p>
					</div>
				</div>
			</div>
		</div> */}

		<div className="grid grid-cols-12 gap-x-5 gap-y-5 pb-0 md:px-22 font-worksans mt-16 ">
			<div className="border border-bc03 rounded-lg p-8 col-span-12">
				<div className="grid grid-cols-12">
					<div className="col-span-4">
						<h3 className="text-3xl lg:text-4xl">Design</h3>
					</div>
					<div className="col-span-8">
						<div className="col-span-8 divide-y-1 divide-white">
							<div className="p-8 pl-0 pt-0">
								<h4 className="text-2xl mb-4">Lead Product Designer</h4>
								<p>
									Both a strategic thinker and a masterful craftsman. Can lead a
									team, present in meetings with our clients and drive projects
									to the finish line.
								</p>
							</div>
							<div className="p-8 pl-0">
								<h4 className="text-2xl mb-4">Product Designer</h4>
								<p>
									Generalist designer who can lead a design process end-to-end.
									Equally skills with product thinking, interaction design and
									visual design.
								</p>
							</div>
							<div className="p-8 pl-0 pb-0">
								<h4 className="text-2xl mb-4">Design Intern</h4>
								<p>
									A designer with strong foundation and can execute tactical
									tasks.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <div>
			<h3 className="col-span-12 font-medium lg:mt-12 text-4xl font-worksans lg:mb-12 md:m-x-5 sm:m-x-5">
				Open positions
			</h3>
			
		</div> */}
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
		location: {
			...location,
			image: location.image.map(i => ({ ...i, ...images[i.name] })),
		},
	};

	return { props: { ...newCareers, ogImage: addedHostUrlOgImage } };
}