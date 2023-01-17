import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  .ant-image {
    margin-right: 20px;
    margin-top: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  .detail-back {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--primary-500);

    span {
      margin-left: 5px;
    }
  }


  @media (max-width: 992px) {
    .ant-image {
      width: 100%;
      height: auto !important;
      margin-bottom: 10px;
      margin-top: 0;

      .detail-image {
        height: auto !important;
      }
    }
  }
`
export default Wrapper
