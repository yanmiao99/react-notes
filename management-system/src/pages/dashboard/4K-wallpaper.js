import httpThirdParty from "../../utils/request-third-party"
import {useEffect, useState} from "react";
import Wrapper from "../../assets/wrappers/4K-wallpaper";


const Wallpaper = () => {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        getVideoData()
    }, [])

    const getVideoData = async () => {
        const res = await httpThirdParty.get("https://v.api.aa1.cn/api/api-fj-1/index.php?aa1=yuantu")
        console.log(res);
        // setImgUrl(res.data.mp4)
    }

    return (
        <Wrapper>
            <div className="wallpaper-box">

            </div>
        </Wrapper>
    )
}


export default Wallpaper
