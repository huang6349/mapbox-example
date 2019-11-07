import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseControl } from 'react-map-gl';
import { Button } from 'antd';
import styles from './index.css';

export default class MapUndergroundControl extends BaseControl {
  static displayName = 'MapUndergroundControl';

  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    mode: PropTypes.oneOf(['ground', 'underground']).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    captureScroll: true,
    captureDrag: true,
    captureClick: true,
    captureDoubleClick: true,
    disabled: false,
    mode: 'ground',
  };

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const { mode, onChange } = this.props;
    typeof onChange === 'function' && onChange(mode === 'ground' ? 'underground' : 'ground');
  }

  _render() {
    const { disabled, mode } = this.props;

    return (
      <div className={styles['wrapper']} ref={this._containerRef}>
        <Button
          disabled={disabled}
          icon={mode === 'ground' ? 'vertical-align-bottom' : 'vertical-align-top'}
          onClick={this._handleClick}
        />
      </div>
    );
  }
}
