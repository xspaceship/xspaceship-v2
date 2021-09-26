import { useState, useCallback } from 'react';
import Link from 'components/Link';
import Layout from 'components/Layout';
import Image from 'components/Image';
import meta from 'meta.json';

const Index = ({ types, works, title, headline }) => {
	const [activeType, setActiveType] = useState('All');
	const isActiveType = useCallback(type => activeType === type, [activeType]);
	const isIncludeActiveType = useCallback(
		type => type.includes(activeType),
		[activeType],
	);

	return (
		<Layout title={title} container="2xl:~" m="2xl:x-auto" p="x-5 lg:x-32.5">
			{/* Headline */}
			<div m="y-7.5 md:y-10 lg:y-20" grid="~ gap-5 cols-12">
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
						className={`${isActiveType(type) ? 'bg-white text-black' : ''}`}
						onClick={() => setActiveType(type)}
						key={index}
					>
						{type}
					</div>
				))}
			</div>

			{/* Works */}
			<div grid="~ gap-5 cols-12">
				{works.map(({ name, type, image, id }) => {
					if (activeType === 'All' || isIncludeActiveType(type)) {
						const { name: src, span = 12, w, h } = image;
						return (
							<Link href={`/work/${id}`} key={id}>
								<a className={`col-span-${span}`}>
									<Image src={src} alt={name} width={w} height={h} />
								</a>
							</Link>
						);
					}
					return null;
				})}
			</div>
		</Layout>
	);
};

export default Index;

export async function getStaticProps() {
	const { works, title, headline } = meta.home;

	const allTypes = works.reduce((acc, i) => [...acc, ...i.type], []);
	const types = ['All', ...new Set(allTypes)];

	return { props: { types, works, title, headline } };
}
