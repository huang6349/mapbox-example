import * as React from 'react';
import ReactMapGL, { TRANSITION_EVENTS, LinearInterpolator } from 'react-map-gl';
import { LIGHT } from '@/services/mapbox';
import { useRotateCamera } from '@/hooks';

const { MAPCENTRE } = process.env;

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

  const [rotateCameraViewport] = useRotateCamera({ viewport, map, disable: !0 });

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
    ></ReactMapGL>
  );
};

export default IndexPage;
