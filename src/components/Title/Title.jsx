import './Title.style.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import canoeIcon from '../../images/canoe.png';
import supIcon2 from '../../images/sup2.png';
import paddleIcon from '../../images/paddle.png';
import bubbleLIcon from '../../images/bubble_large.png';
import bubbleSIcon from '../../images/bubble_small.png';
import fireworkIcon from '../../images/firework.png';

function Title({ scrollToForm }) {
  return (
    <div className="titleContainer">
      <div className="titleContent">
        <p>
          There is no one
          <br />
          who loves pain
        </p>
        <Button buttonType="button" scrollToForm={scrollToForm}>
          FORM
        </Button>
        <div className="titleParagraphContainer">
          <Paragraph>paragraph</Paragraph>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
          <Paragraph>paragraph</Paragraph>
          <ol>
            <li>
              Quisque sodales leo
              <u>
                <b> vitae vulputate auctor.</b>
              </u>
            </li>
            <li>
              Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero
              a pellentesque blandit.
            </li>
            <li>
              Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
            </li>
            <li>
              Donec ultrices sapien
              <b> vitae leo venenatis ullamcorper.</b>
            </li>
          </ol>
          <div className="supAndBubble">
            <img className="smallBubble" src={bubbleSIcon} alt="" />
            <img className="largeBubble" src={bubbleLIcon} alt="" />
            <img className="sup" src={canoeIcon} alt="" />
            <img className="paddle" src={paddleIcon} alt="" />
          </div>
          <img className="firework" src={fireworkIcon} alt="" />
          <img className="sup2" src={supIcon2} alt="" />
        </div>
      </div>
      <div className="wave" />
    </div>
  );
}

Title.propTypes = {
  scrollToForm: PropTypes.func,
};

Title.defaultProps = {
  scrollToForm: () => {},
};

export default Title;
