// eslint-disable-next-line import/no-named-as-default
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

const MetaData = (props) => {
  const title = props.title;
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
MetaData.propTypes = {
  title: PropTypes.string
};

export default MetaData;
