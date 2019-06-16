import styled from "styled-components"

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`

const Card = styled.div`
  /* display: flex; */
  flex: 0 1 33%;
  border: 1px grey solid;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(51, 89, 150, 0.2);
  margin-right: 16px;

  &:last-of-type {
    margin-right: 0;
  }

  > h2 {
    font-size: 0.9rem;
    padding: 8px;
  }

  > p {
    padding-left: 8px;
    padding-right: 8px;
  }
`

Cards.Card = Card

export default Cards
