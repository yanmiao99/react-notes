import React from 'react';
import {Image, Modal,Empty} from "antd";
import Wrapper from "../../assets/wrappers/CosplayAlbumDetail"

const CosplayAlbumDetail = ({isModalOpen, setIsModalOpen, modalItem}) => {
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title="图片详情列表"
            width={1000}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose
        >
            <Wrapper>
                <Image.PreviewGroup>
                    {
                        modalItem.length > 0 ?
                            modalItem.map((item, index) => {
                                return (
                                    <Image
                                        key={index}
                                        height={400}
                                        className='detail-image'
                                        src={item}
                                    />
                                )
                            }) : <Empty/>
                    }
                </Image.PreviewGroup>
            </Wrapper>
        </Modal>
    )
}


export default CosplayAlbumDetail;
