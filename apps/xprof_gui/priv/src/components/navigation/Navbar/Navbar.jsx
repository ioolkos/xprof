import PropTypes from 'prop-types';
import React from 'react';
import { FunctionBrowser, TracingSwitch } from '../';
import logo from './logo.png';

const defaultProps = {
  position: -1,
  language: null,
  inputType: null,
  example: null,
};

const propTypes = {
  status: PropTypes.string.isRequired,
  toggleTraceStatus: PropTypes.func.isRequired,
  queryKeyDown: PropTypes.func.isRequired,
  queryInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  functions: PropTypes.arrayOf(PropTypes.string).isRequired,
  functionClick: PropTypes.func.isRequired,
  position: PropTypes.number,
  setPositionOnFunction: PropTypes.func.isRequired,
  language: PropTypes.string,
  inputType: PropTypes.string,
  example: PropTypes.string,
};

const Navbar = ({
  status,
  toggleTraceStatus,
  queryKeyDown,
  queryInputChange,
  query,
  functions,
  functionClick,
  position,
  setPositionOnFunction,
  language,
  inputType,
  example,
}) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="navbar-header">
      <a className="navbar-brand" href="#top">
        <img src={logo} alt="XProf logo" height="45px" />
      </a>
    </div>
    <div className="navbar-collapse collapse" id="navbar-collapsible">
      <TracingSwitch status={status} toggleTraceStatus={toggleTraceStatus} />
      <FunctionBrowser
        queryKeyDown={queryKeyDown}
        queryInputChange={queryInputChange}
        query={query}
        placeholder={(language && inputType && example)
          ? 'Hello BEAMer! I have detected that you are using an ' +
          `${language} project, please specify your ${inputType} ` +
          `here e.g. ${example}`
          : 'Hello BEAMer! Please specify your trace pattern here.'}
        functions={functions}
        functionClick={functionClick}
        position={position}
        setPositionOnFunction={setPositionOnFunction}
      />
    </div>
  </nav>
);

Navbar.defaultProps = defaultProps;
Navbar.propTypes = propTypes;

export default Navbar;