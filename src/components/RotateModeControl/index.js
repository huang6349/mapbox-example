import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { Card, Icon } from 'antd';
import styles from './index.css';

export default class RotateModeControl extends BaseControl {
  static displayName = 'RotateModeControl';

  static propTypes = {
    mode: PropTypes.oneOf(['default', 'spiral']).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    captureScroll: false,
    captureDrag: false,
    captureClick: false,
    captureDoubleClick: false,
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
      <Card className={styles['wrapper']} ref={this._containerRef} onClick={this._handleClick}>
        <Icon type={mode === 'default' ? 'sync' : 'redo'} />
      </Card>
    );
  }
}
