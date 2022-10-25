import Image from 'components/Image';
import Layout from 'components/Layout';
import Link from 'components/Link';
import home from 'contents/home.json';
import meta from 'contents/pages.json';
import { NextSeo } from 'next-seo';
import { useCallback, useState } from 'react';
import { getAllImage } from 'utils/image';
import { allWorks } from 'utils/work';

const Index = ({ types, works, title, description, headline, ogImage }) => {
  const [activeType, setActiveType] = useState('All');
  const isActiveType = useCallback(type => activeType === type, [activeType]);
  const isIncludeActiveType = useCallback(
    type => type.includes(activeType),
    [activeType],
  );

  return (
    <Layout title={title} p="x-5 lg:x-32.5 2xl:x-5 2xl:t-8">
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
        p="lg:y-22.5 y-8"
        m="x-0 lg:x-0 b-10"
        grid="~ cols-12 gap-5"
        border="rounded-lg border border-white"
      >
        <h1
          grid="col-span-12"
          font="redhat leading-lh01 semibold md:leading-tight"
          className="text-white text-fs01 md:text-7xl"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
      </div>

      {/* Chip buttons */}
      <div
        m="b-10"
        flex="~ wrap"
        grid="gap-3"
        font="medium"
        text="md:xl leading-6"
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
                : 'hover:bg-bg11 transition-colors duration-300'
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
                    >
                      <h2 text="white 3xl">{name}</h2>
                      <p text="tc05 3xl" m="b-5" w="lg:2/4">
                        {description}
                      </p>
                      <p className="text-tc05">
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
  const { title, headline, description } = home;
  const { ogImage } = meta;

  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  const worksByOrder = allWorks.sort(
    (first, second) => second.order - first.order,
  );

  const allTypes = worksByOrder.reduce((acc, i) => [...acc, ...i.category], []);
  const types = ['All', ...new Set(allTypes)];

  const images = await getAllImage('home');
  const worksWithImage = worksByOrder.map(work => ({
    ...work,
    preview: images[work.preview],
  }));

  return {
    props: {
      types,
      works: worksWithImage,
      title,
      description,
      headline,
      ogImage: addedHostUrlOgImage,
    },
  };
}
