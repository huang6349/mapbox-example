import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { Button } from 'antd';
import styles from './index.css';

export default class RotateModeControl extends BaseControl {
  static displayName = 'RotateModeControl';

  static propTypes = {
    mode: PropTypes.oneOf(['default', 'spiral']).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    captureScroll: true,
    captureDrag: true,
    captureClick: true,
    captureDoubleClick: true,
    mode: 'default',
  };

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const { mode, onChange } = this.props;
    typeof onChange === 'function' && onChange(mode === 'default' ? 'spiral' : 'default');
  }

  _render() {
    const { mode } = this.props;

    return (
      <div className={styles['wrapper']} ref={this._containerRef}>
        <Button icon={mode === 'default' ? 'sync' : 'redo'} onClick={this._handleClick} />
      </div>
    );
  }
}
