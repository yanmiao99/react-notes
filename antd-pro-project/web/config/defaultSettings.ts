import { Settings as LayoutSettings } from '@ant-design/pro-components';

// 文档 https://procomponents.ant.design/components/layout

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '通用后台管理系统',
  pwa: false,
  /*
  * 关于logo 的注意点 :
  * 如果在 defaultSettings 中的logo中配置logo, 那么只能配置在线logo , 如果需要配置静态的logo
  * 那么则需要在app.tx 中的 layout 中进行配置
  * */
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
