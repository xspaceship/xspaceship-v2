import Layout from 'components/Layout';
import Image from 'components/Image';

const Roomi = () => (
  <Layout title="Uber" container="2xl:~" m="2xl:x-auto" p="lg:x-32.5">
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
        An alert framework for global live ops.
      </h3>
      <h4 font="worksans" m="b-10" grid="col-span-12" className="text-xl">
        UberEats 2020
      </h4>
    </div>

    <div>
      <section className="px-5 pt-10 lg:grid lg:grid-cols-12 lg:gap-5 lg:py-10 lg:px-0">
        <div className="lg:col-span-8 lg:col-start-3">
          <h3 className="text-center text-base lg:text-xl lg:font-medium">
            Terra is UberEats’ marketplace real-time monitoring tool used by
            global Live Ops to manage our global marketplace dynamics. When
            there is an imbalance in supply and demand (a sudden spike in
            demand, for example), ops teams can pull various levers that help
            balance the marketplace in real-time.
          </h3>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          1 — The new feature
        </h2>
        <Image src="/images/uber/02.png" alt="" />
        <div className="px-5 pt-10 pb-5 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-5">
          <p className="text-center text-base lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            We designed and developed a new activity and alert framework within
            Terra that gave UberEats Live Ops team timely alerts and full
            context of global marketplace dynamics. This new feature led to:
          </p>
        </div>
        <div className="flex justify-center px-5 lg:py-10 lg:flex-row lg:px-0">
          <div className="lg:flex lg:gap-5">
            <div className="flex items-start mb-6 lg:mb-0">
              <Image
                src="/images/uber/arrow_up.png"
                alt=""
                className="mr-5 w-10 lg:mr-6 lg:w-16"
              />
              <ul>
                <li className="font-medium font-ubermove text-4xl lg:text-6xl">
                  25%
                </li>
                <li className="opacity-50 lg:text-xl">Agents productivity</li>
              </ul>
            </div>
            <div className="flex items-start">
              <Image
                src="/images/uber/arrow_down.png"
                alt=""
                className="mr-5 w-10 lg:mr-6 lg:w-16"
              />
              <ul>
                <li className="font-medium font-ubermove text-4xl lg:text-6xl">
                  15m
                </li>
                <li className="opacity-50 lg:text-xl">
                  Alerts resolvement time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          2 — The challenge
        </h2>
        <Image src="/images/uber/03.png" alt="" />
        <div className="flex flex-col gap-5 py-10 px-5 lg:gap-10 lg:mb-5 lg:py-20 lg:grid lg:grid-cols-12 lg:px-0">
          <div className="lg:text-xl lg:font-medium lg:col-start-2 lg:col-span-4">
            <p>
              There was not a centralized place to view actions taken to manage
              the marketplace.
            </p>
            <p>
              Ops needed multiple tools to understand what was happening in the
              marketplace:
            </p>
          </div>
          <div className="lg:col-start-7 lg:col-span-5 lg:text-xl">
            <div className="bg-white bg-opacity-10 p-5 rounded-xl mb-5">
              <h3 className="font-bold">Gchat bot</h3>
              <p className="font-medium">
                Ops built a bot that share real-time alerts in Gchat. However,
                this chat does not give agents full context of the marketplace
                dynamics.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-xl mb-5">
              <h3 className="font-bold">Klaxon web app</h3>
              <p className="font-medium">
                Independent app that stores global marketplace real-time alerts,
                which does not provide any context about marketplace health.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-xl">
              <h3 className="font-bold">Ops activity query</h3>
              <p className="font-medium">
                Terra logs all actions taken and state of the market at the
                time. However, this is only available in a database that must be
                queried externally and on an ad hoc basis.
              </p>
            </div>
          </div>
        </div>
        <Image src="/images/uber/04.png" alt="" />
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          3 — User research
        </h2>
        <div className="px-5 mb-10 lg:mb-20 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="border-opacity-20 border border-light-gray rounded-lg p-5 lg:p-10 lg:col-span-10 lg:col-start-2">
            <div className="pb-10 flex border-b border-s-light-gray flex-col lg:flex-row">
              <Image
                src="/images/uber/A01.png"
                alt=""
                className="mr-10 rounded-full w-32 h-32 mb-4 lg:mb-0"
              />
              <div>
                <h3 className="font-bold mb-4 text-2xl">Sam - Ops Manager</h3>
                <p className="font-medium lg:w-7/12">
                  Ensure consistent supply and demand across Eats marketplace
                  through continuous analytical assessment and intervention.
                  Manage a team of COEs.
                </p>
              </div>
            </div>
            <div className="flex pt-10 flex-col lg:flex-row">
              <div className="lg:w-6/12 lg:pr-4">
                <h4 className="font-bold leading-5 mb-4">
                  Tasks & Responsibilities
                </h4>
                <ul className="text-sm">
                  <li className="mb-2">
                    • Use Terra once a week for reviewing and reporting
                    purposes.
                  </li>
                  <li className="mb-2">
                    • Help COE agents when serious issues arise, or when COE
                    agents request to review their work
                  </li>
                  <li>• Run queries once a week to review COE performance</li>
                </ul>
              </div>
              <div className="lg:w-6/12 lg:pl-4">
                <h4 className="font-bold leading-5 mb-4">Core needs</h4>
                <ul className="text-sm">
                  <li className="mb-2">
                    • Comprehensive picture of Marketplace health and COEs’
                    actions. Data is real-time so historical metrics are crucial
                    in his evaluation of team performance.
                  </li>
                  <li>
                    • Deeply care about COE agents responsiveness to alerts and
                    the results of their actions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 mb-10 lg:mb-20 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="border-opacity-20 border border-light-gray rounded-lg p-5 lg:p-10 lg:col-span-10 lg:col-start-2">
            <div className="pb-10 flex border-b border-s-light-gray flex-col lg:flex-row">
              <Image
                src="/images/uber/A02.png"
                alt=""
                className="mr-10 rounded-full w-32 h-32 mb-4 lg:mb-0"
              />
              <div>
                <h3 className="font-bold mb-4 text-2xl">
                  Peter - Center of Excellence agent
                </h3>
                <p className="font-medium lg:w-7/12">
                  Monitor the Marketplace in real-time and resolve when problems
                  arise. If the problem is serious, escalate to Ops managers.
                </p>
              </div>
            </div>
            <div className="flex pt-10 flex-col lg:flex-row">
              <div className="lg:w-6/12 lg:pr-4">
                <h4 className="font-bold leading-5 mb-4">
                  Tasks & Responsibilities
                </h4>
                <ul className="text-sm">
                  <li className="mb-2">
                    • Use Terra daily for marketplace monitoring
                  </li>
                  <li className="mb-2">
                    • Depending on level of autonomy, fix problems when they
                    arise
                  </li>
                  <li>• For serious issues, escalate to Ops Managers</li>
                </ul>
              </div>
              <div className="lg:w-6/12 lg:pl-4">
                <h4 className="font-bold leading-5 mb-4">Core needs</h4>
                <ul className="text-sm">
                  <li className="mb-2">
                    • Monitor the latest alerts in real-time
                  </li>
                  <li className="mb-2">
                    • Avoid duplicated efforts by having insights into his
                    team’s work progress
                  </li>
                  <li>
                    • The ability to communicate to his team when special
                    circumstances happen that they decided to do something out
                    of the norm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Image src="/images/uber/05.png" alt="" />
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          4 — Setting goals
        </h2>
        <Image src="/images/uber/06.png" alt="" />
        <Image src="/images/uber/07.png" alt="" />
        <div className="flex justify-center font-ubermove px-5 pt-10 lg:pt-20 lg:px-0">
          <div>
            <div className="flex mb-5 items-center">
              <Image
                src="/images/uber/arrow_up.png"
                alt=""
                className="mr-5 w-5 lg:mr-10 lg:w-10"
              />
              <h3 className="font-bold text-lg lg:text-3xl lg:text-4xl">
                User adoption: 7-day active users
              </h3>
            </div>
            <div className="flex mb-5 items-center">
              <Image
                src="/images/uber/arrow_down.png"
                alt=""
                className="mr-5 w-5 lg:mr-10 lg:w-10"
              />
              <h3 className="font-bold text-lg lg:text-3xl lg:text-4xl">
                Time to alerts resolvement
              </h3>
            </div>
            <div className="flex mb-5 items-center">
              <Image
                src="/images/uber/arrow_up.png"
                alt=""
                className="mr-5 w-5 lg:mr-10 lg:w-10"
              />
              <h3 className="font-bold text-lg lg:text-3xl lg:text-4xl">
                # of markets per agent
              </h3>
            </div>
            <div className="flex items-center">
              <Image
                src="/images/uber/arrow_up.png"
                alt=""
                className="mr-5 w-5 lg:mr-10 lg:w-10"
              />
              <h3 className="font-bold text-lg lg:text-3xl lg:text-4xl">
                # of markets per agent
              </h3>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-5 border-t border-s-light-gray mt-15 mb-5 lg:mb-10 lg:mx-0" />
      <section>
        <h2 className="mb-10 font-montserrat text-2xl px-5 lg:px-0 lg:text-4xl lg:mb-15">
          5 — The solutions
        </h2>
        <Image src="/images/uber/08.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 pb-5 mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            We streamlined the workflow by removing the dependency on Klaxon.
            This helped conslidate the number of steps because agents have full
            context of marketplace dynamics within Terra. Team communication is
            streamlined since agents have visibility over who works on which
            tasks.
          </p>
        </div>
        <Image src="/images/uber/09.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 pb-5 mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            Agents can filter alerts by locations, down to the country and
            region level.
          </p>
        </div>
        <Image src="/images/uber/10.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 pb-5 mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            Tapping on each row reveals full context of marketplace dynamics at
            that time. A graph helps ops understand how and why the alert was
            fired.
          </p>
        </div>
        <Image src="/images/uber/11.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 pb-5 mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            On Activity tab, Ops managers can monitor team performance at any
            time. There’s no need to run hours long query anymore. Terra
            highlights actions that go against AI’s recommendations to make it
            easier for managers to inspect special cases.
          </p>
        </div>
        <Image src="/images/uber/12.png" alt="" />
        <div className="grid grid-cols-12 gap-5 px-5 pb-5 mb-5 lg:px-0">
          <p className="text-center col-span-12 lg:text-xl lg:font-medium lg:col-span-8 lg:col-start-3">
            We added alerts to the historical chart to help ops managers
            understand the relationship between alerts and market conditions.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Roomi;
