import httpThirdParty from "../../utils/request-third-party"
import {useEffect, useState} from "react";
import Wrapper from "../../assets/wrappers/4K-wallpaper";
import {Image, Button, message} from 'antd';
import {RedoOutlined, DownloadOutlined} from "@ant-design/icons"
import {getImageBase64} from "../../utils/common"


const Wallpaper = () => {

    const [imgUrl, setImgUrl] = useState('');
    const [downImgDisabled, setDownImgDisabled] = useState(false);
    const [nextImgDisabled, setNextImgDisabled] = useState(false);


    useEffect(() => {
        getImgData()
    }, [])

    // 请求数据
    const getImgData = async () => {
        setNextImgDisabled(true)
        const res = await httpThirdParty.get("https://v.api.aa1.cn/api/api-gqsh/index.php?key=s3s398eu7y6dt7e24&wopen=json")
        let tempArr = res.data.split('src=')
        let format_url = 'https:' + tempArr[1].slice(1, tempArr[1].length - 4)
        setImgUrl(format_url)
        setNextImgDisabled(false)
    }

    // 下载图片
    const downloadImg = () => {
        setDownImgDisabled(true)
        const link = document.createElement('a')
        link.setAttribute('download', '4k高清壁纸')
        const image = document.createElement('img')
        // 添加时间戳，防止浏览器缓存图片
        image.src = imgUrl
        // 设置 crossOrigin 属性，解决图片跨域报错
        image.setAttribute('crossOrigin', 'Anonymous')
        image.onload = () => {
            link.href = getImageBase64(image)
            link.click()
            message.success('图片下载成功')
            setDownImgDisabled(false)
            getImgData()
        }
    }

    return (<Wrapper>
        <div className="wallpaper-box">
            <Image
                rootClassName='wallpaper-image'
                src={imgUrl}
                placeholder
                alt='图片'/>

            <div className="btn-group">
                <Button
                    type="primary"
                    block
                    ghost
                    disabled={downImgDisabled}
                    onClick={() => downloadImg()}
                >
                    <DownloadOutlined/>
                    下载
                </Button>
                <Button
                    type="primary"
                    block onClick={() => getImgData()}
                    disabled={nextImgDisabled}
                >
                    <RedoOutlined/>
                    下一张
                </Button>
            </div>

            {/*<div dangerouslySetInnerHTML={{__html: imgUrl}}></div>*/}
        </div>
    </Wrapper>)
}


export default Wallpaper
