import React from 'react'
import styled from 'styled-components'

function Address() {
  return (
    <Container>
        
        
            <p>123 Fifth Avenue,New York, USA | Phone 800-123-460 | Email:example@gmail.com</p><br/>
            <p>copyright © 2021 Outdoor Adventure</p>
        
    </Container>
  )
}

export default Address
const Container = styled.div`

  height: 15vh;
  width: 100%;
  background-color: rgb(24, 24, 18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;

  @media (max-width: 500px) {
  font-size: 12px;
}



`;