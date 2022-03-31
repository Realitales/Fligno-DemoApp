import styled from "styled-components";

export default styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 20em;
  #total-price {
    font-family: var(--mfont);
    font-size: 1rem;
    margin-left: 1em;
    margin-top: 1em;
  }
  .checkout-content {
    display: flex;
    flex-direction: column;
    padding: 1.2em;
    .product-container {
      font-family: var(--mfont);
      display: flex;
      flex-direction: row;
      margin-bottom: 1em;
      .product-info {
        display: flex;
        gap: 1em;
      }
      .product-desc {
        display: flex;
        flex-direction: column;

        #remove-item-btn {
          background-color: var(--errorcolor);
          color: white;
          font-family: var(--mfont);
          border: none;
          font-size: 1rem;
          font-weight: 800;
          border-radius: 15px;
          width: 1.5em;
          position: absolute;
          right: 1em;
        }
        h1 {
          font-size: 1rem;
          text-transform: capitalize;
        }
      }
      img {
        width: 7em;
      }
    }

    .user-finalbtn {
      display: flex;
      gap: 1em;
      .clear-cart {
        background-color: var(--errorcolor);
        font-family: var(--mfont);
        font-weight: 600;
        color: white;
        padding: 1em;
        border: none;
        border-radius: 1em;
        width: 50%;
        bottom: 1em;
      }
      .checkout-btn {
        background-color: var(--lblue);
        font-family: var(--mfont);
        font-weight: 600;
        color: white;
        padding: 1em;
        border: none;
        border-radius: 1em;
        width: 50%;
      }
    }

    #no-item {
      color: red;
      font-family: var(--mfont);
      text-align: center;
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`;
