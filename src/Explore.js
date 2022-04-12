import React from 'react'
import styled from 'styled-components'
import explore from './Images/explore.jpg'
function Explore() {
  return (
    <Container>
           
            <sideinfo>
                <h1>EXPLORE THE WORLD</h1>
                <hr width="14%"/>
                <p>Make your dreams come true. Explore,  Journey, Discover,<br/> Adventure. Making your heart want to return.<br/>  Don't Be A Tourist,<br/> Be A Traveler</p>
                  <explorelearn>
                      <h6> LEARN MORE →</h6>
                      
                  </explorelearn>
            </sideinfo>


      
      
      
      
        
      
    
    </Container>
  )
}

export default Explore;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${explore});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  text-align: left;
 

  sideinfo{
  position: absolute;
  right: 22%;  
  text-align: left;
  @media (max-width: 500px) {
  right: -17%;
}
  p{
  margin: 20px 0 40px 0;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    -webkit-text-stroke: 0.3px ghostwhite;
}
}
h1{
  margin-bottom: 15px;
  @media (max-width: 500px) {
  font-size: 23px;
  -webkit-text-stroke: 1px black;
}
}
hr{
  border-radius: 2px solid #fd2056;
}
h6{
  background-color:  #fd2056 ;
  padding: 10px 15px 10px 15px;
  border-radius: 20px;
  width: 38%;

}
explorelearn{
  cursor: pointer;
}
}


`;