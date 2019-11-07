import * as React from 'react';
import { Layout, Menu } from 'antd';
import router from 'umi/router';
import { usePerformanceMonitor } from '@/hooks';
import SubMenuTitle from './SubMenuTitle';
import styles from './index.css';

const BasicLayout = ({ location: { pathname }, children }) => {
  const [breadcrumb, setBreadcrumb] = React.useState('视角/进场视角');

  React.useEffect(() => {
    if (pathname === '/camera/mode') {
      setBreadcrumb('视角/（2D/3D）视角切换');
    } else if (pathname === '/camera/rotate2d') {
      setBreadcrumb('视角/2D旋转视角');
    } else if (pathname === '/camera/rotate3d') {
      setBreadcrumb('视角/3D旋转视角');
    } else if (pathname === '/camera/underground') {
      setBreadcrumb('视角/（地上/地下）模式转换');
    } else {
      setBreadcrumb('未知');
    }
  }, [pathname]);

  const [fps] = usePerformanceMonitor();

  function handleClick({ key }) {
    router.push({ pathname: key, query: { k: new Date().getTime() } });
  }

  return (
    <Layout className={styles['layout']}>
      <Layout.Sider theme="dark" defaultCollapsed={!0}>
        <Menu theme="dark" mode="inline" selectedKeys={[]} onClick={handleClick}>
          <Menu.SubMenu key="/camera" title={<SubMenuTitle icon="eye" name="视角" />}>
            <Menu.Item key="/camera/mode">2D/3D视角切换</Menu.Item>
            <Menu.Item key="/camera/rotate2d">2D旋转视角</Menu.Item>
            <Menu.Item key="/camera/rotate3d">3D旋转视角</Menu.Item>
            <Menu.Item key="/camera/underground">地上/地下视角切换</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout.Content className={styles['content']}>
        <div className={styles['breadcrumb']}>{`${breadcrumb}的例子`}</div>
        <div className={styles['monitor']}>{fps}</div>
        <React.Fragment>{children}</React.Fragment>
      </Layout.Content>
    </Layout>
  );
};

export default BasicLayout;
