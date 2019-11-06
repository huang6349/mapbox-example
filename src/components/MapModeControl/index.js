import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { Button } from 'antd';
import styles from './index.css';

export default class RotateModeControl extends BaseControl {
  static displayName = 'RotateModeControl';

  static propTypes = {
    inTransition: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    captureScroll: true,
    captureDrag: true,
    captureClick: true,
    captureDoubleClick: true,
  };

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const { viewport: { pitch = 0 } = {} } = this._context;
    const { onChange } = this.props;
    typeof onChange === 'function' && onChange(pitch === 0 ? '3D' : '2D');
  }

  _render() {
    const { viewport: { pitch = 0 } = {} } = this._context;
    const { inTransition } = this.props;

    return (
      <div className={styles['wrapper']} ref={this._containerRef}>
        <Button loading={inTransition} onClick={this._handleClick}>
          {inTransition ? '' : pitch === 0 ? '2D' : '3D'}
        </Button>
      </div>
    );
  }
}
