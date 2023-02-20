import {defineConfig} from 'umi';
import routes from "./routes"
import theme from "./theme"
import proxy from './proxy'

export default defineConfig({
  nodeModulesTransform: {  // 转换节点
    // 如果是 all , 兼容性好 , 但是速度慢
    // 如果是 none , 兼容性不如all , 但是速度快
    type: 'none',  // 可以设置为 all ,
  },
  // 路由配置
  routes,
  // 调试配置, 书写了就是开启了, 开启之后,会利于调试, 例如会保留活动的数据
  fastRefresh: {},
  // 更改server 配置文件
  devServer: {
    port: 8081, // .evn 里面也可以更改端口号, 而且权重更高
    // https:true // 配置是否请求的接口都是 https
  },
  proxy,
  title: '这里配置标题栏',
  favicon: './favicon.ico', // 这里配置favicon, 如果用的是本地图片, 那么图片需要放在 public 目录中,
  // 启动按需加载
  dynamicImport: {
    // @ 指向 src
    // loading: '@/components/loading', // 按需加载分包会弹出的loading
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  // 配置全局主题色
  theme,
});
