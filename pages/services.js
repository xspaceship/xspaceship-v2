import Image from 'components/Image';
import Layout from 'components/Layout';
import meta from 'contents/pages.json';
import services from 'contents/services.json';
import { NextSeo } from 'next-seo';
import { useCallback } from 'react';
import { getAllImage } from 'utils/image';

const About = ({
  title,
  description,
  ogImage,
  headline,
  product,
  branding,
  development,
  quote01,
  quote02,
}) => {
  const getRoundClass = useCallback(index => {
    const m = [
      'rounded-bl-lg rounded-br-lg',
      'rounded-lg',
      'rounded-lg',
      'rounded-tl-lg rounded-tr-lg',
    ];
    return m[index] || '';
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
        m="x-5 b-5 lg:x-10 2xl:x-5"
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
      {/* Product */}
      <div
        m="lg:x-10 2xl:x-5"
        p="5 lg:x-22.5 lg:y-0"
        bg="bg03"
        border="lg:rounded-t-lg"
        grid="lg:~ lg:cols-12 lg:gap-5"
      >
        <div
          grid="lg:col-span-5"
          flex="~ col"
          justify="center"
          p="t-5 b-10 lg:y-0"
        >
          <div grid="lg:~ lg:cols-5 lg:gap-x-5">
            <h2
              font="redhat"
              m="b-5 lg:b-12"
              grid="col-span-3"
              text="3xl lg:4xl"
            >
              {product.headline}
            </h2>
            <ul
              className="triangle-bullet"
              font="medium"
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
          {product.image.map(
            ({ name, span, gradientTo, gradientFrom }, index) => (
              <div key={index} className={`col-span-${span}`}>
                <Image
                  {...name}
                  noRound={true}
                  alt=""
                  className={getRoundClass(index)}
                  gradientTo={gradientTo}
                  gradientFrom={gradientFrom}
                />
              </div>
            ),
          )}
        </div>
        <div display="lg:hidden" grid="~ col-span-7 cols-7 gap-2 lg:gap-5">
          {product.imageM.map(
            ({ name, span, gradientTo, gradientFrom }, index) => (
              <div key={index} className={`col-span-${span}`}>
                <Image
                  {...name}
                  noRound={true}
                  alt=""
                  className="rounded"
                  gradientTo={gradientTo}
                  gradientFrom={gradientFrom}
                />
              </div>
            ),
          )}
        </div>
      </div>
      {/* Quote 01 */}
      <div
        m="lg:x-10 2xl:x-5"
        p="x-5 y-10 lg:x-22.5 lg:y-24"
        grid="lg:~ lg:cols-12 lg:gap-5"
        bg="bg06"
      >
        <div
          font="medium"
          grid="lg:col-span-8 lg:col-start-3"
          text="center tc03 2xl"
        >
          <h3 m="b-4">{quote01.text}</h3>
          <h4>{quote01.author}</h4>
        </div>
      </div>
      {/* Branding */}
      <div
        m="lg:x-10 2xl:x-5"
        p="5 lg:x-22.5 lg:y-0"
        bg="bg04"
        grid="lg:~ lg:cols-12 lg:gap-5"
        flex="~ col"
      >
        <div
          display="hidden"
          grid="lg:~ lg:col-span-7 lg:cols-7 lg:gap-2 lg:gap-5"
        >
          {branding.image.map(
            ({ name, span, gradientTo, gradientFrom }, index) => (
              <div key={index} className={`col-span-${span}`}>
                <Image
                  {...name}
                  noRound={true}
                  alt=""
                  className={getRoundClass(index)}
                  gradientTo={gradientTo}
                  gradientFrom={gradientFrom}
                />
              </div>
            ),
          )}
        </div>
        <div
          display="lg:hidden"
          grid="~ col-span-7 cols-7 gap-2 lg:gap-5"
          order="1"
        >
          {branding.imageM.map(
            ({ name, span, gradientTo, gradientFrom }, index) => (
              <div key={index} className={`col-span-${span}`}>
                <Image
                  {...name}
                  noRound={true}
                  alt=""
                  className="rounded"
                  gradientTo={gradientTo}
                  gradientFrom={gradientFrom}
                />
              </div>
            ),
          )}
        </div>
        <div
          grid="lg:col-span-5"
          flex="~ col"
          justify="center"
          p="t-5 b-10 lg:y-0"
        >
          <div grid="lg:~ lg:cols-5 lg:gap-x-5">
            <h2
              font="redhat"
              m="b-5 lg:b-12"
              grid="col-span-3 col-start-2"
              text="3xl lg:4xl"
            >
              {branding.headline}
            </h2>
            <ul
              className="triangle-bullet"
              font="medium"
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
        m="lg:x-10 2xl:x-5"
        p="x-5 y-10 lg:x-22.5 lg:y-24"
        grid="lg:~ lg:cols-12 lg:gap-5"
        bg="bg06"
      >
        <div
          font="medium"
          grid="lg:col-span-8 lg:col-start-3"
          text="center tc03 2xl"
        >
          <h3 m="b-4">{quote02.text}</h3>
          <h4>{quote02.author}</h4>
        </div>
      </div>
      {/* Development */}
      <div
        m="lg:x-10 2xl:x-5"
        p="5 lg:x-22.5 lg:y-0"
        bg="bg05"
        border="lg:rounded-b-lg"
        grid="lg:~ lg:cols-12 lg:gap-5"
      >
        <div
          grid="lg:col-span-5"
          flex="~ col"
          justify="center"
          p="t-5 b-10 lg:y-0"
        >
          <div grid="lg:~ lg:cols-5 lg:gap-x-5">
            <h2
              font="redhat"
              m="b-5 lg:b-12"
              grid="col-span-3"
              text="3xl lg:4xl"
            >
              {development.headline}
            </h2>
            <ul
              className="triangle-bullet"
              font="medium"
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
          {development.image.map(
            ({ name, span, gradientTo, gradientFrom }, index) => (
              <div key={index} className={`col-span-${span}`}>
                <Image
                  {...name}
                  noRound={true}
                  alt=""
                  className={getRoundClass(index)}
                  gradientTo={gradientTo}
                  gradientFrom={gradientFrom}
                />
              </div>
            ),
          )}
        </div>
        <div display="lg:hidden" grid="~ col-span-7 cols-7 gap-2 lg:gap-5">
          {development.imageM.map(
            ({ name, span, gradientTo, gradientFrom }, index) => (
              <div key={index} className={`col-span-${span}`}>
                <Image
                  {...name}
                  noRound={true}
                  alt=""
                  className="rounded"
                  gradientTo={gradientTo}
                  gradientFrom={gradientFrom}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  const images = await getAllImage('services');
  const { ogImage } = meta;

  const { product, branding, development } = services;

  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  const transformImage = image =>
    image.map(i => ({ ...i, name: images[i.name] }));

  const getTransformedImage = src => {
    const image = transformImage(src.image);
    const imageM = transformImage(src.imageM);

    return { image, imageM };
  };

  const productImage = getTransformedImage(product);
  const brandingImage = getTransformedImage(branding);
  const developmentImage = getTransformedImage(development);

  const newServices = {
    ...services,
    product: { ...product, ...productImage },
    branding: { ...branding, ...brandingImage },
    development: { ...development, ...developmentImage },
  };

  return { props: { ...newServices, ogImage: addedHostUrlOgImage } };
}
