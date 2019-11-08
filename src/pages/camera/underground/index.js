import * as React from 'react';
import ReactMapGL, { TRANSITION_EVENTS, LinearInterpolator } from 'react-map-gl';
import { MapboxLayer } from '@deck.gl/mapbox';
import { SimpleMeshLayer } from '@deck.gl/mesh-layers';
import { SphereGeometry } from '@luma.gl/core';
import { MapUndergroundControl } from '@/components';
import { useRotateCamera, useMapSkin } from '@/hooks';
import { LIGHT } from '@/services/mapbox';
import styles from './index.css';

const { MAPCENTRE } = process.env;

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

  const [rotateCameraViewport] = useRotateCamera({
    viewport,
    map,
    disable: !0,
    mode: 'spiral',
    speed: 10,
  });

  React.useEffect(() => {
    setViewport((viewport) => ({ ...viewport, ...rotateCameraViewport }));
  }, [rotateCameraViewport]);

  const [mode, setMode] = React.useState('ground');

  useMapSkin({ map, skin: mode === 'ground' ? 'default' : 'underground' });

  React.useEffect(() => {
    if (!map) return;

    const mySimpleMeshLayer = new MapboxLayer({
      id: 'my-simple-mesh',
      type: SimpleMeshLayer,
      data: [{ position: [114.27917, 30.5735] }],
      mesh: new SphereGeometry(),
      opacity: 1 * (mode === 'ground' ? 0.0625 : 0.8),
      sizeScale: 35,
      getColor: [24, 144, 255, 255],
      getTranslation: mode === 'ground' ? [0, 0, -500] : [0, 0, 100],
    });
    map.addLayer(mySimpleMeshLayer, 'buildings');
    return () => {
      map.getLayer('my-simple-mesh') && map.removeLayer('my-simple-mesh');
    };
  }, [map, mode]);

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
        <MapUndergroundControl disabled={!map} mode={mode} onChange={(value) => setMode(value)} />
      </div>
    </ReactMapGL>
  );
};

export default IndexPage;
