import * as React from 'react';
import { useGetSet } from 'react-use';

const useRotateCamera = function(viewport, map, disable) {
  const [viewState, setViewState] = React.useState({});
  const [getDirection, setDirection] = useGetSet(!0);

  React.useLayoutEffect(() => {
    if (!map || !disable) return;

    const speedFactor = 15;
    let animation;
    let startTime = 0;

    let { bearing } = viewport;

    const rotateCamera = (timestamp) => {
      const progress = timestamp - startTime;
      if (progress > speedFactor) {
        startTime = timestamp;

        bearing >= 180 && setDirection(!1);
        bearing <= 0 && setDirection(!0);

        setViewState((viewState) => ({
          ...viewState,
          bearing: bearing,
          transitionDuration: 0,
        }));

        bearing = getDirection() ? bearing + 0.05 : bearing - 0.05;
      }

      animation = requestAnimationFrame(rotateCamera);
    };

    startTime = performance.now();
    rotateCamera(startTime);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [map, disable]);

  return [viewState];
};

export default useRotateCamera;
