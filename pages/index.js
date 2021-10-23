import { useState, useCallback } from 'react';
import Link from 'components/Link';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';
import { allWorks } from 'utils/work';
import { getAllImage } from 'utils/image';

const Index = ({ types, works, title, headline }) => {
	const [activeType, setActiveType] = useState('All');
	const isActiveType = useCallback(type => activeType === type, [activeType]);
	const isIncludeActiveType = useCallback(
		type => type.includes(activeType),
		[activeType],
	);

	return (
		<Layout title={title} p="x-5 lg:x-32.5 2xl:x-5 2xl:t-8">
			{/* Headline */}
			<div p="y-7.5 md:y-10 lg:y-20 2xl:t-0" grid="~ gap-5 cols-12">
				<h3
					grid="col-span-12 md:col-span-9 2xl:col-span-6"
					font="questrial ld01 md:leading-tight"
					className="text-white text-fs01 md:text-7xl"
				>
					{headline}
				</h3>
			</div>

			{/* Chip buttons */}
			<div
				m="b-10"
				flex="~ wrap"
				grid="gap-3"
				font="worksans medium"
				className="md:text-xl leading-6"
			>
				{types.map((type, index) => (
					<div
						p="x-4 y-2"
						border="~ rounded-full bc02"
						cursor="pointer"
						display="inline-block"
						className={`${
							isActiveType(type)
								? 'bg-white text-black'
								: 'hover:bg-bg11 transition-all duration-300'
						}`}
						onClick={() => setActiveType(type)}
						key={index}
					>
						{type}
					</div>
				))}
			</div>

			{/* Works */}
			<div grid="~ gap-5 cols-12">
				{works.map(
					({
						slug,
						name,
						description,
						sub,
						year,
						preview,
						width,
						category,
						gradientFrom,
						gradientTo,
					}) => {
						if (activeType === 'All' || isIncludeActiveType(category)) {
							return (
								<Link href={`/work/${slug}`} key={slug}>
									<a
										className={`${
											width === 'full' ? 'col-span-12' : 'col-span-6'
										} relative parent`}
									>
										<Image
											{...preview}
											alt={name}
											gradientFrom={gradientFrom}
											gradientTo={gradientTo}
											className="rounded"
										/>
										<div
											className="child"
											display="hidden lg:block"
											border="rounded-lg"
											pos="absolute top-0 left-0"
											w="full"
											h="full"
											bg="bg09"
											p="10"
											font="worksans"
										>
											<h3 className="text-white text-3xl">{name}</h3>
											<p className="text-tc05 text-3xl" m="b-5" w="lg:2/4">
												{description}
											</p>
											<p font="jetbrain" className="text-tc05">
												{sub} | {year}
											</p>
										</div>
									</a>
								</Link>
							);
						}

						return null;
					},
				)}
			</div>
		</Layout>
	);
};

export default Index;

export async function getStaticProps() {
	const { title, headline } = meta.home;

	const worksByOrder = allWorks.sort(
		(first, second) => first.order - second.order,
	);

	const allTypes = worksByOrder.reduce((acc, i) => [...acc, ...i.category], []);
	const types = ['All', ...new Set(allTypes)];

	const images = await getAllImage('home');
	const worksWithImage = worksByOrder.map(work => ({
		...work,
		preview: images[work.preview],
	}));

	return { props: { types, works: worksWithImage, title, headline } };
}
