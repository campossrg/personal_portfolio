import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

class Cta extends Component{
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      name: '',
      phone: '',
      content: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const item = this.state;

    await fetch('/sendEmail', {
      method: "POST",
      headers: {
           'Content-Type': 'application/json'
      },
        body: JSON.stringify(item),
    }).then(response => {
      if(response.ok){
        return alert("Correo enviado satisfactoriamente!")
      }else{
        return alert("Error interno!")
      }
    });
  }

  render(props){

    const outerClasses = classNames(
      'cta section center-content-mobile reveal-from-bottom',
      this.props.topOuterDivider && 'has-top-divider',
      this.props.bottomOuterDivider && 'has-bottom-divider',
      this.props.hasBgColor && 'has-bg-color',
      this.props.invertColor && 'invert-color',
      this.props.className
    );

    const innerClasses = classNames(
      'cta-inner section-inner',
      this.props.topDivider && 'has-top-divider',
      this.props.bottomDivider && 'has-bottom-divider',
      this.props.split && 'cta-split'
    );  

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div id="Contact" className="container">
          <div
            className={innerClasses}
          >
            <p className="cta-action-title">Contact</p>
              <div className="cta-action">
                <Input id="from" type="email" value={this.state.from} name="from" label="Email" placeholder="Email direction" onChange={this.handleChange}/>
                <Input id="name" type="text" value={this.state.name} name="name" label="Name" hasIcon="right" placeholder="Your name" onChange={this.handleChange}/>
                <Input id="phone" type="tel" value={this.state.phone} name="phone" label="Phone" hasIcon="right" placeholder="Your telephone number" onChange={this.handleChange}/>
              </div>
              <div className="cta-action ml-16">
                <Input id="content" type="textarea" value={this.state.content} name="content" label="Text" hasIcon="right" placeholder="Insert your message here..." 
                      rows="7" onChange={this.handleChange}/>
              </div>
              <div className="cta-action-button ml-16">
                <Button tag="a" color="dark" wideMobile href="#About" type="submit" onClick={this.handleSubmit}>
                    Send
                </Button>
              </div>
          </div>
        </div>
      </section>
    );

  }
}


Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;