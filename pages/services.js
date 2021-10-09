import { useCallback } from 'react';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';
import { getAllImage } from 'utils/image';

const About = ({
	title,
	headline,
	product,
	branding,
	development,
	quote01,
	quote02,
}) => {
	const getRoundClass = useCallback(index => {
		const m = ['rounded-bl rounded-br', 'rounded', 'rounded-tl rounded-tf'];
		return m[index] || '';
	}, []);

	return (
		<Layout title={title} container="2xl:~" m="2xl:x-auto">
			{/* Headline */}
			<div
				p="x-5 y-7.5 lg:x-22.5 lg:y-32"
				m="x-5 b-5 lg:x-10"
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
			{/* Product */}
			<div
				m="lg:x-10"
				p="5 lg:x-22.5 lg:y-0"
				bg="bg03"
				grid="lg:~ lg:cols-12 lg:gap-5"
			>
				<div
					grid="lg:col-span-5"
					flex="~ col"
					justify="center"
					p="t-5 b-10 lg:y-0"
				>
					<div grid="lg:~ lg:cols-5 lg:gap-x-5">
						<h3
							font="questrial"
							m="b-5 lg:b-12"
							grid="col-span-3"
							className="text-3xl lg:text-4xl"
						>
							{product.headline}
						</h3>
						<ul
							className="triangle-bullet"
							font="worksans medium"
							space="y-3"
							grid="lg:col-span-4"
						>
							{product.list.map((li, index) => (
								<li
									key={index}
									style={{ backgroundImage: "url('/images/triangle.png')" }}
								>
									{li}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					display="hidden"
					grid="lg:~ lg:col-span-7 lg:cols-7 lg:gap-2 lg:gap-5"
				>
					{product.image.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image {...name} alt="" className={getRoundClass(index)} />
						</div>
					))}
				</div>
				<div display="lg:hidden" grid="~ col-span-7 cols-7 gap-2 lg:gap-5">
					{product.imageM.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image {...name} alt="" className="rounded" />
						</div>
					))}
				</div>
			</div>
			{/* Quote 01 */}
			<div
				m="lg:x-10"
				p="x-5 y-10 lg:x-22.5 lg:y-24"
				grid="lg:~ lg:cols-12 lg:gap-5"
				bg="bg06"
			>
				<div
					font="medium"
					grid="lg:col-span-8 lg:col-start-3"
					className="text-center text-tc03 text-2xl"
				>
					<h3 m="b-4">{quote01.text}</h3>
					<h4>{quote01.author}</h4>
				</div>
			</div>
			{/* Branding */}
			<div
				m="lg:x-10"
				p="5 lg:x-22.5 lg:y-0"
				bg="bg04"
				grid="lg:~ lg:cols-12 lg:gap-5"
				flex="~ col"
			>
				<div
					display="hidden"
					grid="lg:~ lg:col-span-7 lg:cols-7 lg:gap-2 lg:gap-5"
				>
					{branding.image.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image {...name} alt="" className={getRoundClass(index)} />
						</div>
					))}
				</div>
				<div
					display="lg:hidden"
					grid="~ col-span-7 cols-7 gap-2 lg:gap-5"
					order="1"
				>
					{branding.imageM.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image {...name} alt="" className="rounded" />
						</div>
					))}
				</div>
				<div
					grid="lg:col-span-5"
					flex="~ col"
					justify="center"
					p="t-5 b-10 lg:y-0"
				>
					<div grid="lg:~ lg:cols-5 lg:gap-x-5">
						<h3
							font="questrial"
							m="b-5 lg:b-12"
							grid="col-span-3 col-start-2"
							className="text-3xl lg:text-4xl"
						>
							{branding.headline}
						</h3>
						<ul
							className="triangle-bullet"
							font="worksans medium"
							space="y-3"
							grid="lg:col-span-4 lg:col-start-2"
						>
							{branding.list.map((li, index) => (
								<li
									key={index}
									style={{ backgroundImage: "url('/images/triangle.png')" }}
								>
									{li}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			{/* Quote 02 */}
			<div
				m="lg:x-10"
				p="x-5 y-10 lg:x-22.5 lg:y-24"
				grid="lg:~ lg:cols-12 lg:gap-5"
				bg="bg06"
			>
				<div
					font="medium"
					grid="lg:col-span-8 lg:col-start-3"
					className="text-center text-tc03 text-2xl"
				>
					<h3 m="b-4">{quote02.text}</h3>
					<h4>{quote02.author}</h4>
				</div>
			</div>
			{/* Development */}
			<div
				m="lg:x-10"
				p="5 lg:x-22.5 lg:y-0"
				bg="bg05"
				grid="lg:~ lg:cols-12 lg:gap-5"
			>
				<div
					grid="lg:col-span-5"
					flex="~ col"
					justify="center"
					p="t-5 b-10 lg:y-0"
				>
					<div grid="lg:~ lg:cols-5 lg:gap-x-5">
						<h3
							font="questrial"
							m="b-5 lg:b-12"
							grid="col-span-3"
							className="text-3xl lg:text-4xl"
						>
							{development.headline}
						</h3>
						<ul
							className="triangle-bullet"
							font="worksans medium"
							space="y-3"
							grid="lg:col-span-4"
						>
							{development.list.map((li, index) => (
								<li
									key={index}
									style={{ backgroundImage: "url('/images/triangle.png')" }}
								>
									{li}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					display="hidden"
					grid="lg:~ lg:col-span-7 lg:cols-7 lg:gap-2 lg:gap-5"
				>
					{development.image.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image {...name} alt="" className={getRoundClass(index)} />
						</div>
					))}
				</div>
				<div display="lg:hidden" grid="~ col-span-7 cols-7 gap-2 lg:gap-5">
					{development.imageM.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image {...name} alt="" className="rounded" />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default About;

export async function getStaticProps() {
	const images = await getAllImage('services');
	const services = { ...meta.services };

	const transformImage = src => {
		src.image = src.image.map(({ name, span }) => ({
			span,
			name: images[name],
		}));
		src.imageM = src.imageM.map(({ name, span }) => ({
			span,
			name: images[name],
		}));
	};

	transformImage(services.product);
	transformImage(services.branding);
	transformImage(services.development);

	console.log(services.product.image);

	return { props: { ...services } };
}
