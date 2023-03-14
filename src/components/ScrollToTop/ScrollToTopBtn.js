import React, { Component } from 'react';
import arrow from '../../images/grungearrow.png';
import './ScrollToTopBtn.css';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    setTimeout(() => {
      if (window.pageYOffset > 3000) {
        this.setState({
          is_visible: true,
        });
      } else {
        this.setState({
          is_visible: false,
        });
      }
    }, 1000);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  componentWillUnmount() {
    this.is_visible = false;
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className={`scrolltop ${is_visible && 'scrolltop_active'}`}>
        {is_visible && (
          <div
            className={`scrolltop__btn `}
            onClick={() => (
              this.scrollToTop(),
              this.setState({
                is_visible: false,
              })
            )}
          >
            {/* <div className="scrolltop__ico"></div>
            <div className="scrolltop__ico"></div>
            <div className="scrolltop__ico"></div> */}
            <img src={arrow} alt='grunge arrow' className='scrolltop__arrow' />
            <p className='scrolltop__btn_text'>Наверх</p>
          </div>
        )}
      </div>
    );
  }
}
