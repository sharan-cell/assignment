import React from 'react'
import styled from 'styled-components'
function Quote() {
  return (
    <Container>
    
    
    <span>&#8220;</span>
            <p>"There had been a limitless look to the thunder and the tide had changed, and let it out unconfined"<br/>     -Adam sendler</p>
    
    </Container>
  )
}

export default Quote
const Container = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
  background-color: #E6E6FA;

  span{
  height: 100%;
  font-size: 220px;
  color: white;
  overflow: hidden;
  
} 
p{
  flex-wrap: wrap;
  text-align: center;
}
`;