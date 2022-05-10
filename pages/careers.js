import ButtonLink from 'components/ButtonLink';
import Image from 'components/Image';
import Layout from 'components/Layout';
import meta from 'contents/careers.json';
import { NextSeo } from 'next-seo';
import { getAllImage } from 'utils/image';

const Careers = ({
  title,
  description,
  ogImage,
  headline,
  location,
  positions,
  values,
  workings,
  team,
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
      p="y-8 lg:x-22.5 lg:y-22.5 2xl:x-0"
      m="x-5 lg:x-10 b-5"
      grid="~ cols-12 gap-5"
      border="rounded-lg"
    >
      <h1
        grid="col-span-12 lg:col-span-9 2xl:col-span-8"
        font="redhat leading-lh01 bold md:leading-tight"
        className="text-white text-fs01 md:text-7xl"
        dangerouslySetInnerHTML={{ __html: headline }}
      />
    </div>

    <div className="col-span-12 mx-5 lg:mx-10 md:mx-5 sm:mx-5 rounded-lg">
      <Image {...team.image} alt={team.image.name} />
    </div>

    {/* Working here */}
    <div className="col-span-12 lg:mx-10 md:mx-5 sm:mx-5 divide-y-1 divide-bc03 ">
      <div
        className="
				mt-16 lg:mb-0
				gap-x-12 gap-y-8
				lg:mx-0 md:px-0 sm:mx-0 mx-5 sm:px-0 px-5
				sm:px-0 px-0"
      >
        <h3 className="col-span-12 font-medium text-4xl lg:mb-12 md:mb-8 sm:mb-8 mb-8">
          Working here
        </h3>

        <div className="col-span-12 mb-16">
          <div className="grid grid-cols-12 gap-3 lg:gap-5">
            {/* Working here loop */}

            {workings.map(({ name, description, image }, index) => (
              <div
                key={index}
                className="col-span-12 lg:col-span-6 md:col-span-6 sm:col-span-12"
              >
                <div h="full" className="gap-x-8">
                  <div className="rounded-lg p-4 lg:p-8 row-span-3 bg-white bg-opacity-5">
                    <div w="16" p="b-4">
                      <Image
                        {...image}
                        alt={image.name}
                        gradientFrom={image.gradientFrom}
                        gradientTo={image.gradientTo}
                      />
                    </div>
                    <h2 className="font-medium text-2xl">{name}</h2>
                    <p className="mt-2">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:mx-0 md:mx-0 sm:mx-5 mx-5">
        <div className="col-span-12 md:px-0 mt-16">
          <h3 className="font-medium text-4xl lg:mb-12 md:mb-8 sm:mb-8 mb-8">
            Our values
          </h3>
        </div>
        <div className="col-span-12 pb-12 md:px-0 font-worksans">
          <div className="grid grid-cols-3 gap-3 lg:gap-5">
            {values.map(({ name }, index) => (
              <div
                key={index}
                className="p-4 lg:p-8 rounded-lg bg-white bg-opacity-5 lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-12"
              >
                <h4 className="text-2xl">{name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-0 col-span-12">
          {location.image.map((i, index) => (
            <div
              grid="col-span-12"
              w="auto md:full"
              className="scale-img-child"
              m="x-auto"
              key={index}
            >
              <Image
                {...i}
                alt="Our co-working space at Soho Works in Dumbo, Brooklyn, New York City"
                caption="Our co-working space at Soho Works in Dumbo, Brooklyn, New York City"
                captionAlignment="center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Jobs  */}
      <div gap="5" m="x-5 md:x-0 t-12">
        <h3 font="medium" text="4xl" m="b-8 lg:b-12 t-16">
          Job openings
        </h3>

        <div grid="md:~ md:cols-3" border="~ bc03 rounded-lg" p="4 md:8">
          <h3 text="3xl md:4xl" m="b-4 md:b-8" grid="md:col-span-1">
            Design
          </h3>
          <div grid="md:col-span-2" divide="y-1 bc03">
            {positions.map(
              ({ name, job_description, location, url }, index) => (
                <div
                  key={index}
                  p="not-first:t-4 not-last:b-4 md:not-first:t-8 md:not-last:b-8"
                  space="y-4"
                >
                  <h4 className="text-2xl">{name}</h4>
                  <p>{job_description}</p>
                  <div className="capitalize">Location: {location}</div>
                  <div m="!t-8">
                    <ButtonLink text="View" url={url} />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Careers;

export async function getStaticProps() {
  const images = await getAllImage('careers');
  const careers = { ...meta.careers };
  const { ogImage } = meta;
  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  const { location, team, workings } = careers;

  const newCareers = {
    ...careers,
    team: { ...team, image: { ...team.image, ...images[team.image.name] } },
    location: {
      ...location,
      image: location.image.map(i => ({ ...i, ...images[i.name] })),
    },
    workings: workings.map(i => ({
      ...i,
      image: { ...i.image, ...images[i.image.name] },
    })),
  };

  return { props: { ...newCareers, ogImage: addedHostUrlOgImage } };
}
