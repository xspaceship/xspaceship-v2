import Image from 'next/image';
import Cover from 'public/images/coaching/cover.png';

const Section01 = ({ setStep }) => (
  <div
    p="x-5 y-7.5 lg:x-22.5 lg:y-16 2xl:x-10"
    m="b-10 lg:x-10 2xl:x-5"
    border="rounded-lg"
    style={{
      background:
        'linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),#1F2030',
    }}
    grid="~ cols-1 lg:cols-2"
    gap="10"
  >
    <div>
      <h1 className="coaching-headline" m="b-5" text="7xl" font="questrial">
        Jump start your dream design career
      </h1>
      <h2 font="worksans medium" text="xl" m="b-10">
        Get personalized coaching from a FAANG designer.
      </h2>
      <p m="b-5" text="tc10" font="newyork">
        “The confidence and skills I acquired during my time at xSpaceship
        opened many doors for me to interview for product design positions at
        prominent companies such as <span text="tc11">Coinbase</span>,{' '}
        <span text="tc11" font="worksans">
          Squarespace
        </span>
        ,{' '}
        <span text="tc11" font="worksans">
          Scholastic
        </span>
        ,{' '}
        <span text="tc11" font="worksans">
          LinkedIn
        </span>
        ,{' '}
        <span text="tc11" font="worksans">
          Paycom
        </span>
        ,{' '}
        <span text="tc11" font="worksans">
          Sirius XM
        </span>
        , and{' '}
        <span text="tc11" font="worksans">
          IPG Health
        </span>
        .”
      </p>
      <p text="tc12" font="medium">
        - Billy Wu, Parsons School of Design, NYC
      </p>
    </div>
    <div className="p-10 bg-[#1F2030] rounded-lg">
      <Image src={Cover} m="b-5" />

      <h3 font="medium" text="3xl tc04" m="b-4">
        Tung Pham
      </h3>
      <p m="b-1">
        Founder @ xSpaceship. Previously @ WhatsApp (Meta), UberEats, WeWork,
        and various well-known startups.
      </p>
      <p text="tc09" font="newyork" m="b-4">
        “I brought a decade of experience designing at world-class tech firms to
        you through this coaching program. I firmly believe that anyone can
        achieve a successful design career through excellent career coaching.”
      </p>
      <button
        border="rounded-lg"
        p="y-4 x-5"
        text="tc13"
        className="coaching-button"
        font="medium"
        onClick={() => setStep(0)}
      >
        Book 1:1 coaching
      </button>
    </div>
  </div>
);

export default Section01;
