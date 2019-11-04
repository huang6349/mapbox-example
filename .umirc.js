export default {
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        antd: true,
        routes: {
          exclude: [
            /components\//,
            /hooks\//,
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
          ],
        },
        locale: {},
        dynamicImport: {
          webpackChunkName: true,
        },
        dll: false,
        hardSource: false,
        pwa: false,
        hd: false,
        fastClick: false,
        title: 'mapbox-example',
      },
    ],
  ],
  history: 'hash',
  targets: {
    ie: 9,
  },
  theme: {
    '@border-radius-base': '2px',
    '@table-padding-vertical': '10px',
    '@table-padding-horizontal': '12px',
  },
  define: {
    'process.env.GEOSERVER': {
      BASEURL: 'http://129.211.24.130:6066',
      TMSURL: '/geoserver/gwc/service/tms/1.0.0',
      WORKSPACE: 'wuhan',
      EPSG: '900913',
      WATER: 'water',
      ROAD: 'roads',
      BUILDING: 'buildings',
    },
    'process.env.MAPCENTRE': [114.27917, 30.5725],
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'react-use', libraryDirectory: 'lib', camel2DashComponentName: false },
    ],
  ],
};
