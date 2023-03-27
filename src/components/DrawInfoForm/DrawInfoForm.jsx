import PropTypes from 'prop-types';
import Form from '../Form/Form';

import './DrawInfoForm.style.scss';

function DrawInfoForm({ scrollTargetFormRef }) {
  return (
    <div className="drawInformationContainer">
      <Form scrollTargetFormRef={scrollTargetFormRef} />
    </div>
  );
}

DrawInfoForm.propTypes = {
  scrollTargetFormRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default DrawInfoForm;
