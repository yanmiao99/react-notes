import {IoBarChartSharp} from 'react-icons/io5'
import {MdQueryStats} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'
import {AiFillVideoCamera} from "react-icons/ai";

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
        icon: <AiFillVideoCamera/>,
    },
]

export default links
