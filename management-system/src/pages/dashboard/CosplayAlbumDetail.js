import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Card, Image} from "antd";
import Wrapper from "../../assets/wrappers/CosplayAlbumDetail"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"
import {useNavigate} from 'react-router-dom'


const Back = () => {
    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate(-1)
    }
    return (
        <div className="detail-back" onClick={handleClickBack}>
            <BsFillArrowLeftSquareFill/>
            <span>返回上一级</span>
        </div>
    )
}


const CosplayAlbumDetail = () => {

    /*
        state参数
        传递的内容不会在地址栏展示，与组件的状态（state）不同
        注册路由(无需声明，在路由表中正常注册即可)
        接收参数：const {state: {id, title, content}} = useLocation()
        备注：刷新也可以保留住参数，但清除浏览器数据后不可
    * */

    const {state: {pics}} = useLocation()

    // 在路由表中声明接收参数
    const {id} = useParams()

    return (
        <Wrapper>
            <Card className='detail-card' title="图片详情列表" extra={<Back/>}>
                <Image.PreviewGroup>
                    {
                        pics.map((item, index) => {
                            return (
                                <Image
                                    key={index + id}
                                    height={400}
                                    className='detail-image'
                                    src={item}
                                />
                            )
                        })
                    }
                </Image.PreviewGroup>
            </Card>
        </Wrapper>
    )
}
export default CosplayAlbumDetail;
