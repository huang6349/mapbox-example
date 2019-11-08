import * as React from 'react';

const useMapSkin = function({ map, skin = 'default' }) {
  React.useEffect(() => {
    if (!map || skin === 'default') return;
    const opacitys = map.getStyle()['layers'].map(({ id, type }) => {
      const visibility = map.getLayoutProperty(id, 'visibility') || 'visible';
      const color = map.getPaintProperty(id, `${type}-color`);
      const opacity = map.getPaintProperty(id, `${type}-opacity`) || 1;
      return { id, type, visibility, color, opacity };
    });

    if (skin === 'underground') {
      opacitys.forEach(({ id, type, opacity }) => {
        if (id === 'background') {
          map.setPaintProperty('background', 'background-color', 'rgba(0, 0, 0, 1)');
        } else if (id === 'roads-case') {
          map.setLayoutProperty(id, 'visibility', 'none');
        } else if (id === 'buildings') {
          map.setPaintProperty(id, `${type}-opacity`, opacity * 0.25);
        } else {
          map.setPaintProperty(id, `${type}-opacity`, opacity * 0.0625);
        }
      });
    }

    return () => {
      opacitys.forEach(({ id, type, visibility, color, opacity }) => {
        if (id === 'background') {
          map.setPaintProperty('background', 'background-color', color);
        } else {
          map.setLayoutProperty(id, 'visibility', visibility);
          map.setPaintProperty(id, `${type}-opacity`, opacity);
        }
      });
    };
  }, [map, skin]);
};

export default useMapSkin;
