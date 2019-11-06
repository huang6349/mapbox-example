import * as React from 'react';
import * as classNames from 'classnames';
import ReactMapGL, { TRANSITION_EVENTS, LinearInterpolator } from 'react-map-gl';
import { RotateSpeedControl, RotateModeControl } from '@/components';
import { LIGHT } from '@/services/mapbox';
import { useRotateCamera } from '@/hooks';
import styles from './index.css';

const { MAPCENTRE } = process.env;

const DEFAULT_SPEED = 5;

const IndexPage = () => {
  const [map, setMap] = React.useState(null);

  const [viewport, setViewport] = React.useState({
    longitude: MAPCENTRE[0],
    latitude: MAPCENTRE[1],
    zoom: 16,
    bearing: 0,
    pitch: 60,
    scrollZoom: !1,
    dragPan: !1,
    dragRotate: !1,
    doubleClickZoom: !1,
  });

  const [speed, setSpeed] = React.useState(DEFAULT_SPEED);
  const [mode, setMode] = React.useState('default');

  const [rotateCameraViewport] = useRotateCamera({ viewport, map, disable: !0, speed, mode });

  React.useEffect(() => {
    setViewport((viewport) => ({ ...viewport, ...rotateCameraViewport }));
  }, [rotateCameraViewport]);

  const handleViewportChange = (viewState) => setViewport({ ...viewport, ...viewState });

  return (
    <ReactMapGL
      {...viewport}
      preventStyleDiffing={!1}
      mapStyle={LIGHT}
      width="100%"
      height="100%"
      minZoom={11}
      maxZoom={18}
      transitionInterruption={TRANSITION_EVENTS.IGNORE}
      transitionInterpolator={new LinearInterpolator()}
      onLoad={({ target }) => setMap(target)}
      onViewportChange={handleViewportChange}
    >
      <div className={styles['control']}>
        <RotateSpeedControl
          defaultValue={DEFAULT_SPEED}
          onAfterChange={(value) => setSpeed(value)}
        />
      </div>
      <div className={classNames([styles['control'], styles['mode']])}>
        <RotateModeControl mode={mode} onChange={(value) => setMode(value)} />
      </div>
    </ReactMapGL>
  );
};

export default IndexPage;
