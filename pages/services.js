import { useCallback } from 'react';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';

// images
import IMG01 from 'public/images/services/01.png';
import IMG02 from 'public/images/services/02.png';
import IMG03 from 'public/images/services/03.png';
import IMG04 from 'public/images/services/04.png';
import IMG05 from 'public/images/services/05.png';
import IMG06 from 'public/images/services/06.png';
import IMG07 from 'public/images/services/07.png';
import IMG08 from 'public/images/services/08.png';
import IMG09 from 'public/images/services/09.png';
import IMG10 from 'public/images/services/10.png';
import IMG11 from 'public/images/services/11.png';
import IMG12 from 'public/images/services/12.png';
import IMG13 from 'public/images/services/13.png';
import IMG14 from 'public/images/services/14.png';
import IMG15 from 'public/images/services/15.png';
import IMG16 from 'public/images/services/16.png';
import IMG17 from 'public/images/services/17.png';
import IMG18 from 'public/images/services/18.png';
import IMG19 from 'public/images/services/19.png';
import IMG20 from 'public/images/services/20.png';

const images = {
	'01': IMG01,
	'02': IMG02,
	'03': IMG03,
	'04': IMG04,
	'05': IMG05,
	'06': IMG06,
	'07': IMG07,
	'08': IMG08,
	'09': IMG09,
	10: IMG10,
	11: IMG11,
	12: IMG12,
	13: IMG13,
	14: IMG14,
	15: IMG15,
	16: IMG16,
	17: IMG17,
	18: IMG18,
	19: IMG19,
	20: IMG20,
};

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
							<Image
								src={images[name]}
								alt=""
								className={getRoundClass(index)}
							/>
						</div>
					))}
				</div>
				<div display="lg:hidden" grid="~ col-span-7 cols-7 gap-2 lg:gap-5">
					{product.imageM.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image src={images[name]} alt="" className="rounded" />
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
							<Image
								src={images[name]}
								alt=""
								className={getRoundClass(index)}
							/>
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
							<Image src={images[name]} alt="" className="rounded" />
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
							<Image
								src={images[name]}
								alt=""
								className={getRoundClass(index)}
							/>
						</div>
					))}
				</div>
				<div display="lg:hidden" grid="~ col-span-7 cols-7 gap-2 lg:gap-5">
					{development.imageM.map(({ name, span }, index) => (
						<div key={index} className={`col-span-${span}`}>
							<Image src={images[name]} alt="" className="rounded" />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default About;

export async function getStaticProps() {
	return { props: { ...meta.services } };
}
