import React, { Component } from "react";
import "./ScrollToTopBtn.css";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 3000) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  componentWillUnmount() {
    this.is_visible = false;
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scrolltop">
        {is_visible && (
          <div className="scrolltop__btn" onClick={() => this.scrollToTop()}>
            <div className="scrolltop__ico"></div>
            <div className="scrolltop__ico"></div>
            <div className="scrolltop__ico"></div>
            <p className="scrolltop__btn_text">Наверх</p>
          </div>
        )}
      </div>
    );
  }
}
