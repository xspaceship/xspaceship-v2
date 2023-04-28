import Layout from 'components/Layout';
import Section01 from 'components/coaching/Section01';
import Section02 from 'components/coaching/Section02';
import Section03 from 'components/coaching/Section03';
import Step01 from 'components/coaching/Step01';
import Step02 from 'components/coaching/Step02';
import Step03 from 'components/coaching/Step03';
import coaching from 'contents/coaching.json';
import meta from 'contents/pages.json';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Cover from 'public/images/coaching/cover.png';
import { useEffect, useMemo, useState } from 'react';
import { Dialog } from '@headlessui/react';

const NEXT_LABEL = ['Continue to schedule', 'Continue to payment', 'Finish'];

const sendEmail = async (payload = {}) => {
  await fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify({
      subject: '[xspaceship] Coaching',
      ...payload,
    }),
  });
};

const Coaching = ({ title, description, ogImage }) => {
  const [step, setStep] = useState(-1);
  const [info, setInfo] = useState({
    duration: 1,
    scheduled: null,
    message: '',
    phone: '',
    email: '',
    topic: [],
  });

  const closeModal = () => setStep(-1);

  const onChange = (key, value) => {
    setInfo(c => ({ ...c, [key]: value }));
  };

  const STEPS = [
    <Step01 key={1} value={info} onChange={onChange} />,
    <Step02 key={2} value={info} onChange={onChange} />,
    <Step03 key={3} value={info} onChange={onChange} />,
  ];

  const isDisabled = useMemo(() => {
    if (step === 0) {
      return !(info.email && info.topic.length && info.duration);
    }

    if (step === 1) {
      return !info.scheduled;
    }

    return false;
  }, [info, step]);

  useEffect(() => {
    if (step === 2) {
      const { message, email, topic, phone } = info;
      sendEmail({ message, email, topic, phone });
    }
  }, [step, info]);

  return (
    <Layout title="xspaceship | Coaching" p="2xl:t-8">
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
      <Section01 setStep={setStep} />
      <Section03 />
      <Section02 />

      <Dialog
        open={step !== -1}
        as="div"
        className="relative z-30"
        onClose={closeModal}
      >
        <div className="fixed inset-0 bg-black bg-opacity-75" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Dialog.Panel className="border border-[#2D2D40] rounded w-full max-w-6xl transform overflow-hidden text-left align-middle transition-all shadow coaching-modal">
              <Dialog.Title
                as="h3"
                className="flex justify-between items-center px-8 py-4 border-b border-[#2D2D40]"
              >
                <div className="text-xl font-medium text-tc04">
                  Book a coaching session
                </div>
                <button
                  className="py-1 px-[10px] mr-[-16px]"
                  onClick={() => setStep(-1)}
                >
                  <Image
                    src="/images/close.png"
                    width="12"
                    height="12"
                    alt="Close"
                  />
                </button>
              </Dialog.Title>
              <div className="px-8 py-8 max-h-[calc(100vh-77px-65px)] overflow-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="rounded bg-bg01 border border-bc03 p-5">
                      <Image src={Cover} m="b-4" />
                      <h3 font="medium" text="xl tc04 center" m="b-4">
                        Tung Pham
                      </h3>
                      <p m="b-4" text="center sm">
                        Founder @ xSpaceship. Previously @ WhatsApp (Meta),
                        UberEats, WeWork, and various well-known startups.
                      </p>
                      <div className="border-b border-bc03" m="b-4"></div>
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between gap-4 text-sm text-tc04">
                          <span>Coaching rates</span>
                          <span>$200/hour</span>
                        </div>
                        <div className="flex justify-between gap-4 text-sm text-tc04">
                          <span>Duration</span>
                          <span>
                            {info.duration} hour
                            {info.duration > 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="flex justify-between gap-4 text-sm text-tc04">
                          <span>Total</span>
                          <span>${info.duration * 200}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>{STEPS[step]}</div>
                </div>
              </div>

              <div className="px-8 py-4 border-t border-[#2D2D40] flex justify-between">
                <button
                  className={`px-4 py-3 text-sm font-medium bg-bg16 rounded`}
                  onClick={() => setStep(s => s - 1)}
                  style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
                >
                  Back
                </button>
                <button
                  disabled={isDisabled}
                  className={`px-4 py-3 text-sm font-medium bg-bg17 text-tc15 bg-bg16 rounded`}
                  onClick={() => setStep(s => (s === 2 ? -1 : s + 1))}
                  style={{
                    backgroundImage:
                      step === 2
                        ? 'linear-gradient(134.77deg, #D0E2DD 1.46%, #F7D060 77.78%)'
                        : '',
                    opacity: isDisabled ? '25%' : '100%',
                  }}
                >
                  {NEXT_LABEL[step]}
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Layout>
  );
};

export default Coaching;

export async function getStaticProps() {
  const { ogImage } = meta;
  const { title, description } = coaching;
  const addedHostUrlOgImage = (process.env.HOST || '') + ogImage;

  return {
    props: {
      title,
      description,
      ogImage: addedHostUrlOgImage,
    },
  };
}
