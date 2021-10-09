import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';

// images
import IMG01 from 'public/images/about/01.png';
import IMG02 from 'public/images/about/02.png';
import IMG03 from 'public/images/about/03.png';
import IMG04 from 'public/images/about/04.png';
import IMG05 from 'public/images/about/05.png';
import IMG06 from 'public/images/about/06.png';

const images = {
	'01': IMG01,
	'02': IMG02,
	'03': IMG03,
	'04': IMG04,
	'05': IMG05,
	'06': IMG06,
};

const About = ({ title, headline, why, what, brand }) => (
	<Layout title={title} container="2xl:~" m="2xl:x-auto">
		{/* Headline */}
		<div
			p="x-5 y-7.5 lg:x-22.5 lg:y-32"
			m="x-5 lg:x-10"
			grid="~ cols-12 gap-5"
			border="rounded-lg"
			bg="bg02"
		>
			<h3
				grid="col-span-12 md:col-span-9 2xl:col-span-11"
				font="questrial ld01 md:leading-tight"
				className="text-white text-fs01 md:text-7xl"
				dangerouslySetInnerHTML={{ __html: headline }}
			/>
		</div>

		{/* Section: Why */}
		<div
			m="lg:x-10"
			p="y-5 lg:x-22.5 lg:y-24"
			grid="lg:cols-12 lg:gap-5"
			flex="col"
			display="flex lg:grid"
		>
			<div
				grid="col-span-4"
				font="worksans medium"
				order="2 lg:1"
				p="5 lg:0"
				bg="bg08 lg:transparent"
			>
				<h2 m="y-6" text="4xl">
					{why.headline}
				</h2>
				<p m="b-2" text="md:lg">
					{why.text}
				</p>
				<p text="md:lg">{why.subtext}</p>
			</div>
			<div grid="col-span-7 col-start-6" order="1">
				<Image src={images[why.image]} alt="" />
			</div>
		</div>

		{/* Section: What */}
		<div pos="relative">
			<Image src={images[what.image]} alt="" />
			<div pos="lg:absolute lg:bottom-24" grid="lg:~ lg:cols-12 lg:gap-5">
				<div
					className="text-tc03 text-center text-2xl"
					p="x-5 y-10 lg:x-10"
					font="worksans"
					border="b bc02 lg:white lg:~ lg:rounded-lg"
					bg="lg:black"
					grid="lg:col-span-8 lg:col-start-3"
				>
					<h3 m="b-4" className="text-gradient-01 uppercase text-4xl">
						{what.headline}
					</h3>
					<h3 font="medium" className="text-2xl">
						{what.text}
					</h3>
				</div>
			</div>
		</div>

		{/* Section: Brand */}
		<div m="x-5 y-10 lg:x-32.5 lg:y-24">
			<h3
				font="medium worksans"
				display="block"
				w="full"
				m="b-5"
				className="text-lg leading-7 text-tc05 text-center"
			>
				{brand.headline}
			</h3>
			<div grid="md:~ md:cols-12 md:gap-5">
				{brand.image.map((i, index) => (
					<div
						grid="md:col-span-3"
						w="48 md:full"
						className="scale-img-child"
						m="x-auto"
						key={index}
					>
						<Image src={images[i]} alt="" />
					</div>
				))}
			</div>
		</div>
	</Layout>
);

export default About;

export async function getStaticProps() {
	return { props: { ...meta.about } };
}
