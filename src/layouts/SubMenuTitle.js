import * as React from 'react';
import { Icon } from 'antd';

const SubMenuTitle = ({ icon, name }) => {
  return (
    <React.Fragment>
      <Icon type={icon} /> <span>{name}</span>
    </React.Fragment>
  );
};

export default SubMenuTitle;
