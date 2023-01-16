import styled from 'styled-components'

const Wrapper = styled.section`
  .wallpaper-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .wallpaper-image {
      width: 85%;
      border-radius: 10px;
      overflow: hidden;
    }

    .btn-group {
      width: 85%;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      button:nth-child(1) {
        margin-right: 20px;
      }
    }
  }
`
export default Wrapper
