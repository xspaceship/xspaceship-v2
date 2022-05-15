import Image from 'components/Image';
import Layout from 'components/Layout';
import meta from 'contents/pages.json';
import { NextSeo } from 'next-seo';
import { getAllImage } from 'utils/image';

const About = ({
  title,
  description,
  ogImage,
  headline,
  why,
  what,
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
    <div
      m="lg:x-10"
      p="lg:x-22.5 lg:y-24 2xl:x-0"
      grid="lg:cols-12 lg:gap-5"
      flex="col"
      display="flex lg:grid"
    >
      <div
        grid="col-span-4"
        font="medium"
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
        <Image
          {...why.image}
          alt={why.headline}
          noRound
          className="lg:rounded-lg"
        />
      </div>
    </div>

    {/* Section: What */}
    <div pos="relative" m="lg:x-10">
      <Image
        {...what.image}
        alt={what.headline}
        noRound
        className="lg:rounded-lg"
      />
      <div pos="lg:absolute lg:bottom-24" grid="lg:~ lg:cols-12 lg:gap-5">
        <div
          text="tc03 center 2xl"
          p="x-5 y-10 lg:x-10"
          border="b bc02 lg:transparent lg:~ lg:rounded-lg"
          bg="lg:black"
          grid="lg:col-span-8 lg:col-start-3"
        >
          <h3 m="b-4" text="4xl" className="text-gradient-01">
            {what.headline}
          </h3>
          <h3 font="medium" text="2xl">
            {what.text}
          </h3>
        </div>
      </div>
    </div>

    {/* Section: Brand */}
    <div m="x-5 y-10 lg:x-10 lg:y-24" p="lg:x-22.5">
      <h3
        font="medium"
        display="block"
        w="full"
        m="b-5"
        text="lg leading-7 tc05 center"
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
  const about = { ...meta.about };
  const { ogImage } = meta;
  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  const { what, why, branding } = about;

  const newAbout = {
    ...about,
    what: { ...what, image: { ...what.image, ...images[what.image.name] } },
    why: { ...why, image: { ...why.image, ...images[why.image.name] } },
    branding: {
      ...branding,
      image: branding.image.map(i => ({ ...i, ...images[i.name] })),
    },
  };

  return { props: { ...newAbout, ogImage: addedHostUrlOgImage } };
}
