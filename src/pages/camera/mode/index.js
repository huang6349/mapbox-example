import * as React from 'react';
import ReactMapGL, { TRANSITION_EVENTS, LinearInterpolator } from 'react-map-gl';
import { MapModeControl } from '@/components';
import { LIGHT } from '@/services/mapbox';
import styles from './index.css';

const { MAPCENTRE } = process.env;

const IndexPage = () => {
  const [viewport, setViewport] = React.useState({
    longitude: MAPCENTRE[0],
    latitude: MAPCENTRE[1],
    zoom: 11,
    bearing: 0,
    pitch: 0,
    scrollZoom: !0,
    dragPan: !0,
    dragRotate: !1,
    doubleClickZoom: !0,
  });

  const [inTransition, setInTransition] = React.useState(!0);

  const [mode, setMode] = React.useState('2D');

  React.useLayoutEffect(() => {
    setViewport((viewport) => ({
      ...viewport,
      pitch: mode === '2D' ? 0 : 60,
      transitionDuration: 1000,
    }));
  }, [mode]);

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
      onLoad={() => setMode('3D')}
      onViewportChange={handleViewportChange}
      onInteractionStateChange={({ inTransition }) => setInTransition(inTransition)}
    >
      <div className={styles['control']}>
        <MapModeControl inTransition={inTransition} onChange={(value) => setMode(value)} />
      </div>
    </ReactMapGL>
  );
};

export default IndexPage;
