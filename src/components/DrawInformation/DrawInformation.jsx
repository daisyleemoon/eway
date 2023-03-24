import Button from '../Button/Button';
import Form from '../Form/Form';

import './DrawInformation.style.scss';

function DrawInformation() {
  return (
    <div className="drawInformationContainer">
      <Form />
      <Button>submit</Button>
    </div>
  );
}

export default DrawInformation;
