import * as React from 'react';
import ReactMapGL, { TRANSITION_EVENTS, LinearInterpolator } from 'react-map-gl';
import { LIGHT } from '@/services/mapbox';

const { MAPCENTRE } = process.env;

const IndexPage = () => {
  const [viewport, setViewport] = React.useState({
    longitude: MAPCENTRE[0],
    latitude: MAPCENTRE[1],
    zoom: 12,
    bearing: 0,
    pitch: 0,
    scrollZoom: !0,
    dragPan: !0,
    dragRotate: !1,
    doubleClickZoom: !0,
  });

  const handleLoad = () => {
    setViewport((viewport) => ({
      ...viewport,
      longitude: MAPCENTRE[0],
      latitude: MAPCENTRE[1],
      zoom: 12,
      pitch: 45,
      transitionDuration: 1000,
    }));
  };

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
      onLoad={handleLoad}
      onViewportChange={handleViewportChange}
    ></ReactMapGL>
  );
};

export default IndexPage;
