import styled from 'styled-components'

const Wrapper = styled.section`
  .ant-list-item {
    transition: box-shadow 0.3s;
  }

  .ant-list-item:hover {
    box-shadow: var(--shadow-3);
    cursor: pointer;
  }

  @media (max-width: 992px) {
    .ant-list-item {
      display: flex;
      flex-direction: column;

      .ant-list-item-extra {
        margin-inline-start: 0;
      }

      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
`
export default Wrapper
