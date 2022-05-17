import React from 'react';

import AbstractSeries from 'react-vis/dist/plot/series/abstract-series';
import SVGDiagram from './SVGDiagram';

class CustomSVG extends AbstractSeries {
  static getParentConfig(attr) {
    const isDomainAdjustmentNeeded = false;
    const zeroBaseValue = attr === 'y';
    return {
      isDomainAdjustmentNeeded,
      zeroBaseValue
    };
  }

  render() {
    return (
      <SVGDiagram
        {...this.props}
        linePosAttr="x"
        valuePosAttr="y"
        lineSizeAttr="width"
        valueSizeAttr="height"
      />
    );
  }
}


export default CustomSVG;