import * as React from 'react';
import ReactMapGL, { TRANSITION_EVENTS, LinearInterpolator } from 'react-map-gl';
import { SpeedControl } from '@/components';
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
    zoom: 12,
    bearing: 0,
    pitch: 0,
    scrollZoom: !1,
    dragPan: !1,
    dragRotate: !1,
    doubleClickZoom: !1,
  });

  const [speed, setSpeed] = React.useState(DEFAULT_SPEED);

  const [rotateCameraViewport] = useRotateCamera({ viewport, map, disable: !0, speed });

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
        <SpeedControl defaultValue={DEFAULT_SPEED} onAfterChange={(value) => setSpeed(value)} />
      </div>
    </ReactMapGL>
  );
};

export default IndexPage;
