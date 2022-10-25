import Features from 'components/Features';
import Image from 'components/Image';
import Layout from 'components/Layout';
import { BREAKPOINT_LG } from 'consts';
import meta from 'contents/pages.json';
import whyUs from 'contents/why-us.json';
import { NextSeo } from 'next-seo';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';
import { getAllImage } from 'utils/image';

const About = ({
  title,
  description,
  ogImage,
  headline,
  why,
  what,
  branding,
}) => {
  const [feature, setFeature] = useState(why.description01);
  const [isLG, setIsLG] = useState(true);

  const handleResize = e => {
    setIsLG(e.target.innerWidth >= BREAKPOINT_LG);
  };

  const scrollTo = e => {
    e.preventDefault();
    const href = e.target.dataset.anchor;

    document.querySelector(`#${href}`).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (window && window.innerWidth < BREAKPOINT_LG) {
      setIsLG(false);
    } else {
      setIsLG(true);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
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
      <div p="lg:x-22.5 2xl:x-0" m="x-5 b-15 lg:b-0 lg:x-10 2xl:x-5">
        <div display="flex lg:hidden" align="items-center" m="t-8 b-15" gap="4">
          <NextImage
            src="/images/more.png"
            width={32}
            height={32}
            alt="Learn more"
          />
          <span text="sm" font="medium" data-anchor="x" onClick={scrollTo}>
            Learn more
          </span>
        </div>
        <div font="redhat semibold leading-lh02" text="2xl lg:fs01" m="b-10">
          {why.headline}
        </div>
        <div
          id="x"
          display="lg:hidden"
          flex="~"
          gap="4"
          font="worksans"
          m="b-5"
        >
          <button
            text="capitalize sm leading-4"
            font="medium"
            border="rounded-full"
            bg={feature === why.description01 ? 'bg15' : ''}
            p="x-3 y-2"
            className={`${
              feature === why.description01 ? 'text-white bg-bg15' : 'text-tc10'
            }`}
            onClick={() => setFeature(why.description01)}
          >
            {why.description01}
          </button>
          <button
            text="capitalize sm leading-4"
            font="medium"
            border="rounded-full"
            p="x-3 y-2"
            className={`${
              feature === why.description02 ? 'text-white bg-bg15' : 'text-tc10'
            }`}
            onClick={() => setFeature(why.description02)}
          >
            {why.description02}
          </button>
        </div>
        <div m="lg:b-10">
          <div
            display="hidden lg:block"
            font="redhat semibold"
            text="2xl"
            m="b-5"
          >
            Hiring {why.description01}
          </div>
          {(isLG || (!isLG && feature === why.description01)) && (
            <Features features={why.feature01} />
          )}
        </div>
        <div m="lg:b-10">
          <div
            display="hidden lg:block"
            font="redhat semibold"
            text="2xl"
            m="b-5"
          >
            Hiring {why.description02}
          </div>
          {(isLG || (!isLG && feature === why.description02)) && (
            <Features features={why.feature02} />
          )}
        </div>
      </div>

      {/* Section: What */}
      <div
        p="x-5 y-15 lg:x-22.5 lg:y-25 2xl:x-0"
        m="lg:x-10 2xl:x-5"
        border="lg:rounded-lg"
        bg="bg13 2xl:transparent"
      >
        <div font="redhat semibold leading-lh02" text="2xl lg:fs01" m="b-10">
          {what.headline}
        </div>
        <div space="y-6 lg:y-10">
          {what.feature.map((f, index) => (
            <div
              display="flex lg:grid"
              flex="col"
              grid="cols-12"
              gap="5 lg:10"
              p="6 lg:0"
              border="rounded-lg lg:none"
              bg="bg16 lg:transparent"
              key={index}
            >
              <div
                grid="col-span-4"
                bg="bg16"
                border="rounded-lg"
                p="lg:10"
                className={`order-2 lg:order-${(index % 2) + 1}`}
              >
                <div
                  m="b-3 lg:b-0"
                  display="flex lg:block"
                  align="items-center"
                  gap="3"
                >
                  <div w="8" h="8" m="lg:b-5">
                    <Image
                      {...f.icon}
                      alt=""
                      gradientFrom={f.icon.gradientFrom}
                      gradientTo={f.icon.gradientTo}
                    />
                  </div>
                  <h5 text="tc07 xl lg:2xl leading-lh01" m="lg:b-3">
                    {f.headline}
                  </h5>
                </div>
                <p text="tc09 leading-6">{f.description}</p>
              </div>
              <div grid="col-span-8" order="1">
                <Image
                  {...f.image}
                  alt=""
                  gradientFrom={f.image.gradientFrom}
                  gradientTo={f.image.gradientTo}
                  className="hidden lg:block"
                />
                <Image
                  {...f.imageM}
                  alt=""
                  gradientFrom={f.imageM.gradientFrom}
                  gradientTo={f.imageM.gradientTo}
                  className="lg:hidden"
                />
              </div>
            </div>
          ))}
        </div>
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
};

export default About;

export async function getStaticProps() {
  const images = await getAllImage('why-us');
  const { ogImage } = meta;
  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  const { branding, what } = whyUs;

  const newFeature = what.feature.map(f => {
    const { image, icon, imageM } = f;

    return {
      ...f,
      image: { ...image, ...images[image.name] },
      icon: { ...icon, ...images[icon.name] },
      imageM: { ...icon, ...images[imageM.name] },
    };
  });

  const newWhyUs = {
    ...whyUs,
    branding: {
      ...branding,
      image: branding.image.map(i => ({ ...i, ...images[i.name] })),
    },
    what: {
      ...what,
      feature: newFeature,
    },
  };

  return { props: { ...newWhyUs, ogImage: addedHostUrlOgImage } };
}
