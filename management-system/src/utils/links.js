import {IoBarChartSharp} from 'react-icons/io5'
import {MdQueryStats,MdWallpaper} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'
import {FaImage} from "react-icons/fa";

const links = [
    {
        id: 1,
        text: '数据统计',
        path: '/',
        icon: <IoBarChartSharp/>,
    },
    {
        id: 2,
        text: '所有工作',
        path: 'all-jobs',
        icon: <MdQueryStats/>,
    },
    {
        id: 3,
        text: '个人信息',
        path: 'profile',
        icon: <ImProfile/>,
    },
    {
        id: 4,
        text: '4K壁纸',
        path: '4K-wallpaper',
        icon: <MdWallpaper/>,
    },
    {
        id: 5,
        text: 'Cosplay',
        path: '/cosplay-album',
        icon: <FaImage/>,
    },
]

export default links
