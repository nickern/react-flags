import React from "react";
import Flag from "./Flag.js";

const App = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div>
        <Flag
          name="CA"
          format="png"
          pngSize={64}
          shiny
          alt="Canada Flag"
        />
      </div>
    );
  }
});

React.render(<App />, document.body);
