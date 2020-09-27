import React, { Component } from "react";

import { InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    const breadcrumblist = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <Breadcrumb data={breadcrumblist} />
          </div>
        </div>
      </div>
    );
  }
}
