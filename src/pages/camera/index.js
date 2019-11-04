import * as React from 'react';
import router from 'umi/router';

const IndexPage = function() {
  React.useEffect(() => {
    router.replace({ pathname: '/camera/into', query: { k: new Date().getTime() } });
  }, []);

  return <React.Fragment />;
};

export default IndexPage;
