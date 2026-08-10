import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classes from './../../assets/scss/core/elements/_backgroundVideo.module.scss';
import { useContactModal } from '../../utils/ContactModalContext';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const videoSource = require('./../../assets/images/video/bg_coding.mp4').default
  const { openContact } = useContactModal();

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="Hero" className="container-md">
        <div className={innerClasses}>

          <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>
                        <span className="text-color-secondary disable">Software Engineer</span> Architecture, Distributed Systems & AI
                    </h1>
                    <p>10+ years building backend solutions and service-oriented architectures across cloud (GCP, AWS) and on-premise (Red Hat OpenShift) environments.</p>
                    <div>
                        <ButtonGroup>
                            <Button tag="a" color="secondary" wideMobile href="#" onClick={openContact}>
                                Contact
                            </Button>
                            <Button tag="a" color="dark" wideMobile href="#Experience" onClick={() => {
                              document.querySelector('#Experience').scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }}>
                                Experience
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;