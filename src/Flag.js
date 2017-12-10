import React, { Component } from 'react';
import PropTypes from 'prop-types';
import availableFlags from "./flags.json5";
import find from "lodash/collection/find";
import countries from "!filter-loader?cca2,cca3!world-countries/countries.json";

export default class extends Component {

  static propTypes = {
    basePath: PropTypes.string,
    country: PropTypes.string,
    format: PropTypes.oneOf(["png", "icns", "ico"]),
    height: PropTypes.number,
    name: PropTypes.string,
    pngSize: PropTypes.oneOf([16, 24, 32, 48, 64]),
    shiny: PropTypes.bool,
    width: PropTypes.number,
  };

  static defaultProps = {
      basePath: "/img/flags",
      country: "_unknown",
      name: null,
      format: "png",
      pngSize: 32,
      shiny: false
    };
  

  // Get information about a country using the alpha-3 ISO code.
  cca3To2 = (cca3) => {
    let country = find(countries, {"cca3": cca3});
    return country ? country.cca2 : "_unknown";
  };

  /**
   * React render
   */
  render() {
    let country = this.props.name ? this.props.name : this.props.country;

    country = country.length === 3 ? this.cca3To2(country) : country;

    const type = this.props.shiny ? "shiny" : "flat";

    const folder = (
      this.props.format === "icns" ||
      this.props.format === "ico"
    ) ? this.props.format : this.props.pngSize;

    const file = country.charAt(0) === "_" ? country : country.toUpperCase();

    const flag = ~availableFlags.flags.indexOf(file) ? file : "_unknown";

    return (
      <img
        src={
          this.props.basePath + "/" +
          type +
          "/" +
          folder +
          "/" +
          flag +
          "." +
          this.props.format
        }
      />
    );
  }
};
