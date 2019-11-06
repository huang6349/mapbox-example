import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { Card, Slider } from 'antd';
import styles from './index.css';

export default class SpeedControl extends BaseControl {
  static displayName = 'SpeedControl';

  static propTypes = {
    defaultValue: PropTypes.number,
    onAfterChange: PropTypes.func,
  };

  static defaultProps = {
    captureScroll: false,
    captureDrag: false,
    captureClick: false,
    captureDoubleClick: false,
    defaultValue: 0,
  };

  _render() {
    const { defaultValue, onAfterChange } = this.props;
    return (
      <Card className={styles['wrapper']} ref={this._containerRef}>
        <Slider defaultValue={defaultValue} onAfterChange={onAfterChange} />
      </Card>
    );
  }
}
