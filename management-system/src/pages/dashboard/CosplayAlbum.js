import {List, Spin} from 'antd';
import React, {useEffect, useState} from 'react';
import Wrapper from "../../assets/wrappers/CosplayAlbum"
import requestThirdParty from "../../utils/request-third-party";
import {useNavigate} from "react-router-dom";


const CosplayAlbum = () => {

    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getListData(1)
    }, [])

    const getListData = async (page) => {
        setLoading(true)
        const {data} = await requestThirdParty.get(`https://v.api.aa1.cn/api/api-tplist/go.php/api/picture/index?page=${page}`)
        const list = data.data
        setDataList(list)
        setLoading(false)
    }

    const navigate = useNavigate()
    const handleItemClick = (item) => {
        // console.log(item);
        navigate(`/cosplay-album/${item.setid}`, {
            state: {
                pics: item.pics
            }
        })
    }

    return (
        <Wrapper>
            <Spin tip="加载中..." size="large" spinning={loading} >
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            getListData(page)
                        },
                        simple: true,
                        total: 1000,
                        position: 'bottom'
                    }}
                    dataSource={dataList}
                    renderItem={(item) => (
                        <List.Item
                            key={item.setid}
                            onClick={() => handleItemClick(item)}
                            extra={
                                <img
                                    width={200}
                                    alt="Exhibit"
                                    src={item.cover}
                                />
                            }
                        >
                            <List.Item.Meta title={item.setname}/>
                            {item.desc}
                        </List.Item>
                    )}
                />
            </Spin>
        </Wrapper>
    )
}
export default CosplayAlbum;
