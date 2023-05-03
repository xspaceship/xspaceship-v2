import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const Step02 = ({ value, onChange }) => {
  useCalendlyEventListener({
    onEventScheduled: () => onChange('scheduled', true),
  });

  return (
    <div>
      <InlineWidget
        isLoading={false}
        url="https://calendly.com/xspaceship/coaching-1-hour"
        prefill={{
          name: value.email,
          email: value.email,
        }}
      />
    </div>
  );
};

export default Step02;
