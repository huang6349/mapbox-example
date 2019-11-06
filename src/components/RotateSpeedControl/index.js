import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { Slider } from 'antd';
import styles from './index.css';

export default class SpeedControl extends BaseControl {
  static displayName = 'SpeedControl';

  static propTypes = {
    defaultValue: PropTypes.number,
    onAfterChange: PropTypes.func,
  };

  static defaultProps = {
    captureScroll: true,
    captureDrag: true,
    captureClick: true,
    captureDoubleClick: true,
    defaultValue: 0,
  };

  _render() {
    const { defaultValue, onAfterChange } = this.props;

    return (
      <div className={styles['wrapper']} ref={this._containerRef}>
        <Slider defaultValue={defaultValue} onAfterChange={onAfterChange} />
      </div>
    );
  }
}
