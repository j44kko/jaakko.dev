import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import face from './assets/circle-cropped.png'

const IntroText = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const CenterContainer = styled.section`
  margin-top: 10%;
  text-align: center;
`;

const InfoBox = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  text-decoration: none;
  color: ${props => props.disabled ? "grey" : "palevioletred"};
  &:hover {
     color: ${props => props.disabled ? "grey" : "black"};
    }
`;

const Page = () => (
  <>
    <IntroText>Moi, olen Jaakko &#128526;</IntroText>
    <CenterContainer>
      <img width="40px" alt="me" src={face}></img>
    </CenterContainer>
    <CenterContainer>
      <InfoBox disabled >Blog</InfoBox>
      <InfoBox target="_blank" href="mailto:jaakko.lehtinen@live.fi">Email</InfoBox>
      <InfoBox target="_blank" href="https://github.com/j44kko">Github</InfoBox>
      <InfoBox target="_blank" href="https://fi.linkedin.com/in/jaakkol">LinkedIn</InfoBox>
    </CenterContainer>
  </>
)

ReactDOM.render(<Page />, document.getElementById('root'))