import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Assets extends React.Component {
  render() {
    const { assets } = this.props;
    return (
      <div>
        {assets.map((asset) => (
          
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  assets: state,
});

Assets.propTypes = {
  assets: PropTypes.arrayOf.isRequired,
}

export default connect(mapStateToProps)(Assets);