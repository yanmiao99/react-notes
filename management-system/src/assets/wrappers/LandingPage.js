import styled from 'styled-components'

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;

    span {
      color: var(--primary-500);
    }

    font-size: 2rem;
  }

  p {
    color: var(--grey-600);
    margin-bottom: 40px;
  }

  .main-img {
    display: none;
  }
  
 
  .btn.btn-hero{
    display: block;
    text-align: center;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    h1 {
      font-size: 3.052rem;
    }
    
    p {
      color: var(--grey-600);
      margin-bottom: 40px;
    }

    .main-img {
      display: block;
    }
    
    .btn.btn-hero{
      display: inline;
    }
  }
`
export default Wrapper
