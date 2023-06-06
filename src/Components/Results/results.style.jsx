import styled from 'styled-components'
import 'normalize.css'

export const Container = styled.div`
    @media (min-width: 600px){
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
    }
`

export const Box = styled.div`
    @media (min-width: 600px) {
      display: flex;
      flex-direction: row;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border-radius: 20px;
  }
`

export const ResultSection = styled.div`
  background-color: #5E3FFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 20px 20px;
  padding: 0 50px 0 50px;

  .title{
    color: #c6c6c6;
    margin: 15px 0 15px 0;
  }
  .circle{
    background: linear-gradient(to bottom, #4C23C9, #5E3FFC);
    border-radius: 100px;
    width: 8rem;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0 15px 0;
  }
  .circle p{
    color: #d7d7d7;
  }
  .circle h2{
    font-size: x-large;
  }
  h2{
    color: white;
  }
  .text{
    color: #c6c6c6;
    text-align: center;
    margin: 1rem 0 1rem 0;
    font-size: 0.9rem;
  }

  @media (min-width: 600px) {
    width: 50%;
    border-radius: 20px;
  }
`

export const SummarySection = styled.div`
  h4{
    margin: 1rem;
  }
  .divider{
    display: flex;
    justify-content: space-between;
    background-color: #ffff0040;
    margin: 1rem;
    border-radius: 5px;
    padding: 1rem;
  }
  .divider img{
    display: inline;
  }
  .divider h3{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .divider p span{
    font-weight: bold;
  }
  .centralize-button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  button{
    width: 80%;
    padding: 1rem;
    border-radius: 50px;
    background-color: #2f2f6d;
    color: white;
    border: none;
  }

  @media (min-width: 600px) {
    width: 50%;
    
    button{
      margin: 2rem;
    }
  }
`