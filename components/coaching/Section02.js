import Image from 'next/image';

const HOW = [
  'Review your portfolio, projects, and resume',
  'Improve your design skills through personalized technical coaching',
  'Brush up your interview skills through mock interviews, app critique, and jam sessions.',
  'Ask me anything',
];

const Section02 = () => (
  <div m="x-5 b-15 lg:b-0 lg:x-10 2xl:x-5" p="lg:x-22.5 2xl:x-0">
    <div p="4 lg:10" border="rounded-lg ~ bc03">
      <h4 font="medium" text="3xl lg:4xl" m="b-10">
        How I can help
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
            <Image src="/images/coaching/solution.png" width={24} height={24} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Section02;
