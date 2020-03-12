import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { REACT_APP_SITE_NAME } from "../config";

const mapStateToProps = state => ({
  ...state.common,
  inProgress: state.common.hasError,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // no hooks for
  componentDidCatch(error, info) {
    // indicate error to state
    this.setState({ hasError: true });
    // TODO: log error here
  }

  render() {
    if (this.state.hasError) {
      // render error content
      return (
        <div className="main">
          <div className="main-wrap">
            <div className="Sigma">
              <h2 className="AltTitle">An error has occurred</h2>
              <div>
                If this error persists please contact {REACT_APP_SITE_NAME}{" "}
                customer service.
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary)
);
