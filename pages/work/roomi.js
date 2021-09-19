import Layout from 'components/Layout';
import Image from 'components/Image';

const Roomi = () => (
  <Layout title="Roomi" container="2xl:~" m="2xl:x-auto" p="lg:x-32.5">
    <div
      p="x-5 y-7.5 lg:x-22.5 lg:y-32"
      m="x-5 b-5 lg:x-0"
      grid="~ cols-12 gap-5"
      border="rounded-lg"
      bg="bg02">
      <h3
        font="questrial"
        grid="col-span-12 md:col-span-9 lg:col-span-7"
        className="text-6xl">
        Rent rooms and find roommates in a verified community.
      </h3>
      <h4 font="worksans" m="b-10" grid="col-span-12" className="text-xl">
        Roomi 2021
      </h4>
    </div>

    <Image src="/images/roomi/01.png" alt="" />

    <div>
      <section className="px-5 pt-10 lg:grid lg:grid-cols-12 lg:gap-5 lg:py-10 lg:px-0">
        <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-span-6 lg:col-start-4">
          <h3 className="text-center mb-5 lg:text-xl lg:font-medium">
            Roomi is the largest social network for roommates. It’s a dynamic
            marketplace where people can get verified, matched based on
            compatibility, search for their ideal rooms, and post their rooms
            for rent.
          </h3>
          <h3 className="text-center lg:text-xl lg:font-medium">
            We partnered with the Roomi team to revamp the mobile applications
            on iOS and Android, with a common goal to streamline user experience
            and maximize values to users.
          </h3>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          1 — Getting started
        </h2>
        <div className="grid gap-5 lg:mb-5 lg:grid-cols-2">
          <Image src="/images/roomi/02.png" alt="" />
          <Image src="/images/roomi/03.png" alt="" />
        </div>
        <div className="grid grid-cols-12 gap-5 px-5 pt-10 lg:py-10 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            After downloading the application, users can already browse listing
            without signing up. This lower the barrier to entry and enable users
            to get values out of the application immediately. The sign up
            experience is extremely simple with only a few basic questions.
            Users will then go through a phone verification to guarantee maximum
            security.
          </p>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          2 — Finding a place to stay
        </h2>
        <div className="grid gap-5 lg:mb-5 lg:grid-cols-2">
          <Image src="/images/roomi/04.png" alt="" />
          <Image src="/images/roomi/05.png" alt="" />
        </div>
        <div className="grid grid-cols-12 gap-5 px-5 py-10 mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            To find rooms and apartments, users go to the very first tab -
            Listings. Here users can scroll through thousands of listings with a
            high-level overview with important information. Tapping on each
            listing reveals a detailed screen that show case comprehensive and
            well-organized information, such as layouts, capacity, host profile,
            amenities, house rules, transportations, and more.
          </p>
        </div>
        <div className="grid gap-5 lg:mb-5 lg:grid-cols-2">
          <Image src="/images/roomi/06.png" alt="" />
          <Image src="/images/roomi/07.png" alt="" />
        </div>
        <div className="grid grid-cols-12 gap-5 px-5 pt-10 lg:py-10 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            To ensure that we are showing the best results. We have designed a
            robust filtering system, which enable users to tailor their search
            in various requirements, such as Location, neighborhood, listing
            type, number of beds, baths, budget, etc.
          </p>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          3 — Searching for a roommate
        </h2>
        <Image src="/images/roomi/08.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 py-10 lg:mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            Finding a roommate is like dating. We use an algorithm to give you
            the best roommate matches. The experience is gamified to make the
            search fun. We designed a rich profile experience that brings out
            diverse personalities.
          </p>
        </div>
        <div className="px-5 lg:px-0">
          <Image src="/images/roomi/09.png" alt="" />
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          4 — Getting verified
        </h2>
        <Image src="/images/roomi/10.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 pt-10 lg:py-10 lg:mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            Roomi’s biggest value proposition is being the safest social network
            with robust background verifications. We created digital touch
            points that appeared at the right moments to educate users about how
            Roomi verifies users and at the same time, prompt user to get
            verified.
          </p>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          5 — Boosts
        </h2>
        <Image src="/images/roomi/11.png" alt="" />
      </section>
    </div>
  </Layout>
);

export default Roomi;
