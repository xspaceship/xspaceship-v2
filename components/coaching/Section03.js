import Image from 'next/image';

const HOW = [
  '“It’s been 6 months and I applied to 32 roles. Yet no one contacts me for a job.”',
  '“My portfolio isn’t high quality and realistic. I took an UX bootcamp course and my instructor didn’t care to give me detailed and personalized feedback.”',
  '“I bombed my interview.”',
  '“My future employer low-balled me.”',
  '“I can’t get a promotion.”',
];

const Section03 = () => (
  <div m="x-5 b-15 lg:b-10 lg:x-10 2xl:x-5" p="lg:x-22.5 2xl:x-0">
    <div p="4 lg:10" border="rounded-lg ~ bc03">
      <h4 font="medium" text="3xl lg:4xl" m="b-10">
        Top career blockers
      </h4>
      <ul font="medium" text="lg:xl">
        {HOW.map((item, index) => (
          <li
            key={index}
            border="not-first-of-type:(t bc03)"
            p="not-first-of-type:not-last-of-type:(y-5) last-of-type:(t-5) first-of-type:(b-5)"
            flex="~"
            gap="4"
            align="items-center"
          >
            <div className="min-w-[24px] min-h-[24px]">
              <Image
                src="/images/coaching/problem.png"
                width={24}
                height={24}
              />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Section03;
