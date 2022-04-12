import React from 'react'
import styled from 'styled-components';
import skiing1 from './Images/skieng1.png'
import skiing2 from './Images/skieng2.jpg'
import cycling from './Images/cycling.jpg'
import walker from './Images/walker.jpg'
function Destinations() {
  return (
    <Container>
            <leftside>
                <leftinfo>
                    <h1>UPCOMING TOURS AND DESTINATION</h1>
                    <hr width="14%"/>
                    <p>Make your dreams come true. Explore,  Journey, Discover,<br/> Adventure. Making your heart want to return.<br/>  Don't Be A Tourist,<br/> Be A Traveler</p>
                    <leftlearn>
                        <h6> LEARN MORE →</h6>
                        
                    </leftlearn>
                </leftinfo>

            </leftside>
            <rightside>
            
                    <item>
                    <img src={skiing1} alt="i"/>
                    </item>
                    <item>
                    <img src={skiing2} alt="i"/>
                    </item>
                    <item>
                    <img src={cycling} alt="i"/>
                    </item>
                    <item>
                    <img src={walker} alt="i"/>
                    </item>
                
            </rightside>
            
        </Container>
  )
}

export default Destinations
const Container = styled.div`
height: 100vh;
  width: 100%;
  display: flex;
  @media (max-width: 500px) {
  flex-direction: column;
}

  leftside{
  flex:0.4;
  display: flex;
  align-items: center;
  
  
}
rightside{
  flex: 0.6;
  
  display: grid;
  
  grid-template-columns: auto auto;
  background-color: transparent;
  padding: 5px;
  
  margin: 7%;
  
  item{
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 100%;
  float: left;
  
  img{
  width: 90%;
  height: 90%;
  margin: 10px;
  border-radius: 5px 5px 5px 5px;
}

}
}
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
}
h1{
  margin-bottom: 15px;
  @media (max-width: 500px) {
  font-size: 23px;
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
}
leftinfo{
  width: 100%;
  
    margin-left: 15%;
  text-align: left;
  
  h1{
 
 flex-wrap: wrap;
 word-spacing: 5px;
 padding-bottom: 6%;

 @media (max-width: 500px) {
  font-size: 18px;
}
}
p{
  padding-top: 6%;
  padding-bottom: 6%;
  @media (max-width: 500px) {
  font-size: 13px;
}
}
leftlearn{
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px 0 5px 0;
  flex-wrap: nowrap;

  h6{
  
  padding: 5px 0 5px 0;
  font-weight: 550;
  color: white;
}
}

}
`;