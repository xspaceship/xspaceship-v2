import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

const Step02 = ({ value, onChange }) => {
  useCalendlyEventListener({
    onEventScheduled: e =>
      onChange('scheduled', e.data?.payload?.invitee?.uri || ''),
  });

  return (
    <div>
      <InlineWidget
        isLoading={false}
        url="https://calendly.com/xspaceship-engineering/test-1-hour"
        prefill={{
          name: value.email,
          email: value.email,
        }}
      />
    </div>
  );
};

export default Step02;
