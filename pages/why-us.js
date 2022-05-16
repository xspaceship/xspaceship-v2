import Features from 'components/Features';
import Image from 'components/Image';
import Layout from 'components/Layout';
import meta from 'contents/pages.json';
import whyUs from 'contents/why-us.json';
import { NextSeo } from 'next-seo';
import { getAllImage } from 'utils/image';

const About = ({
  title,
  description,
  ogImage,
  headline,
  why,
  // what,
  branding,
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
      p="y-7.5 lg:x-22.5 lg:y-32 2xl:x-0"
      m="x-5 b-0 lg:x-10 2xl:x-5"
      grid="~ cols-12 gap-5"
      border="rounded-lg"
    >
      <h1
        grid="col-span-12"
        font="redhat leading-lh01 semibold md:leading-tight"
        text="white fs01 md:7xl"
        dangerouslySetInnerHTML={{ __html: headline }}
      />
    </div>

    {/* Section: Why */}
    <div p="lg:x-22.5 2xl:x-0" m="x-5 lg:x-10 2xl:x-5">
      <div font="redhat semibold leading-lh02" text="2xl lg:fs01" m="b-10">
        {why.headline}
      </div>
      <div m="b-10">
        <div font="redhat semibold" text="2xl" m="b-5">
          {why.description01}
        </div>
        <Features features={why.feature01} />
      </div>
      <div m="b-10">
        <div font="redhat semibold" text="2xl" m="b-5">
          {why.description02}
        </div>
        <Features features={why.feature02} />
      </div>
    </div>

    {/* Section: What */}
    <div pos="relative" m="lg:x-10">
      456
    </div>

    {/* Section: Brand */}
    <div m="x-5 y-10 lg:x-10 lg:y-24" p="lg:x-22.5">
      <h3
        font="medium"
        display="block"
        w="full"
        m="b-5"
        text="fs01 leading-lh02 center"
      >
        {branding.headline}
      </h3>
      <div grid="md:~ md:cols-12 md:gap-5">
        {branding.image.map((i, index) => (
          <div
            grid="md:col-span-3"
            w="48 md:full"
            className="scale-img-child"
            m="x-auto"
            key={index}
          >
            <Image {...i} alt={branding.headline} />
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default About;

export async function getStaticProps() {
  const images = await getAllImage('about');
  const { ogImage } = meta;
  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  const { branding } = whyUs;

  const newWhyUs = {
    ...whyUs,
    branding: {
      ...branding,
      image: branding.image.map(i => ({ ...i, ...images[i.name] })),
    },
  };

  return { props: { ...newWhyUs, ogImage: addedHostUrlOgImage } };
}
