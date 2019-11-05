import * as React from 'react';
import { useGetSet } from 'react-use';

const useRotateCamera = function({ viewport, map, speed = 5, mode = 'default', disable }) {
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

        setViewState((viewState) => ({
          ...viewState,
          bearing: bearing,
          transitionDuration: 0,
        }));

        if (mode === 'spiral') {
          bearing = (bearing >= 360 ? 0 : bearing) + speed / 100;
        } else {
          bearing >= 180 && setDirection(!1);
          bearing <= 0 && setDirection(!0);
          bearing = getDirection() ? bearing + speed / 100 : bearing - speed / 100;
        }
      }

      animation = requestAnimationFrame(rotateCamera);
    };

    startTime = performance.now();
    rotateCamera(startTime);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [map, speed, mode, disable]);

  return [viewState];
};

export default useRotateCamera;
