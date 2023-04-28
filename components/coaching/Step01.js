const TOPICS = [
  'Review your portfolio, project, and resume',
  'Improve your design skills through technical coaching',
  'Brush up your interview skills through mock interviews, app critique, and jam sessions.',
];

const Step01 = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="text-tc04 font-medium mb-3 text-lg">
          Which topics would you like to cover?
        </div>
        <div className="flex flex-col gap-3">
          {TOPICS.map((t, index) => (
            <div key={index} className="flex items-center gap-4">
              <input
                className="coaching-checkbox"
                type="checkbox"
                checked={value.topic.includes(t)}
                onChange={() =>
                  onChange(
                    'topic',
                    value.topic.includes(t)
                      ? value.topic.filter(i => i !== t)
                      : [...value.topic, t],
                  )
                }
              />
              <label className="text-tc04 font-light">{t}</label>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <div className="mb-2">
          <span className="text-tc04">Hours needed</span>{' '}
          <span className="text-tc01">(max 3)</span>
        </div>
        <input
          className="w-full rounded px-4 py-3 border border-bc06 mb-3 outline-none bg-transparent placeholder-neutral-700"
          type="number"
          placeholder="1"
          max={3}
          min={1}
          value={value.duration}
          onChange={e => onChange('duration', e.target.value)}
          onBlur={e => {
            if (
              !e.target.value ||
              Number(e.target.value) > 3 ||
              Number(e.target.value) < 0
            ) {
              onChange('duration', 1);
            }
          }}
        />
        <p className="text-tc04 text-sm font-light">
          Please keep in mind that each topic will take at least 30 minutes.
        </p>
      </div> */}

      <div>
        <div className="mb-2 flex justify-between">
          <span className="text-tc04">Message</span>{' '}
          <span className="text-tc01">{value.message.length}/200</span>
        </div>
        <textarea
          className="w-full rounded px-4 py-3 border border-bc06 mb-3 outline-none bg-transparent placeholder-neutral-700"
          placeholder="You can include any special requests, and URLs to your portfolio, projects here."
          value={value.message}
          onChange={e => onChange('message', e.target.value)}
          maxLength="200"
          rows={2}
        />
        <p className="text-tc04 text-sm font-light">
          You can also send any files to hello@xspaceship.com. Please remember
          to put your name on the subject line.
        </p>
      </div>

      <div>
        <div className="mb-2 flex justify-between">Your email address</div>
        <input
          className="w-full rounded px-4 py-3 border border-bc06 mb-3 outline-none bg-transparent placeholder-neutral-700"
          type="email"
          value={value.email}
          onChange={e => onChange('email', e.target.value)}
        />
      </div>

      <div>
        <div className="mb-2 flex">
          <span className="text-tc04">Your phone number</span>&nbsp;
          <span className="text-tc01">(optional)</span>
        </div>
        <input
          className="w-full rounded px-4 py-3 border border-bc06 mb-3 outline-none bg-transparent placeholder-neutral-700"
          placeholder="+1 (XXX) XXX-XXXX"
          value={value.phone}
          onChange={e => onChange('phone', e.target.value)}
          type="tel"
        />
      </div>
    </div>
  );
};

export default Step01;
