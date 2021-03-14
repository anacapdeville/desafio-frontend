import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AreaSeries, XYPlot } from 'react-vis';

class Assets extends React.Component {
  constructor() {
    super();
    this.state = {
      // assetsReceived: []
    }
  }

  // componentDidMount() {
  //   const { assets } = this.props;
  //   this.setState({assetsReceived: assets})
  // }

  // static getDerivedStateFromProps(props, state) {
  //   const {assets} = props;
  //   console.log(assets)
  //   const {assetsReceived} = state;
  //   if(assets !== assetsReceived) {
  //     return {
  //       assetsReceived: assets
  //     }
  //   }
  // }
  componentDidUpdate(prevProps) {
    console.log(prevProps)
  }
  // componentDidMount() {
  //   const { assets } = this.props;
  //   this.setState({ assetsReceived: assets });
  // }

  // static getDerivedStateFromProps(nextProps) {
  //   const nextAssets = nextProps.assets;
  //   this.setState({ assetsReceived: nextAssets })
  // }

  render() {
    const { assets } = this.props;
    return (
      <div>
        {assets.map((asset) => (
          <div key={asset.stock}>
            <h3>{asset.stock}</h3>
            <XYPlot height={200} width={600}>
              <AreaSeries
                data={asset.chart}
                opacity={0.5}
                style={{}}
              />
            </XYPlot>
          </div>
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
