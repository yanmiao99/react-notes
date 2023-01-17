import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .ant-image {
    margin-right: 20px;
    margin-top: 10px;

    &:last-child {
      margin-right: 0;
    }
  }


  @media (max-width: 992px) {
    flex-direction: column;
    
    .ant-image {
      width: 100%;
      height: auto !important;
      margin-bottom: 10px;
      margin-top: 0;
      margin-right: 0;

      .detail-image {
        height: auto !important;
      }
    }
  }
`
export default Wrapper
