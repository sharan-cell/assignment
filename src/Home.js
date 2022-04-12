import React from 'react'
import styled from 'styled-components'
import wallpaper from './Images/frontwall.jpeg'
function Home() {
  return (
    <Container>
            <header>
                <lefthead>
                    <h2>OUTDOOR</h2>
                    <h4>ADVENTURE</h4>
                    
                </lefthead>
                <righthead>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Projects</p>
                    <p>Contact</p>
                    <action>
                    <h6>TAKE  ACTION</h6>
                    
                    </action>
                </righthead>

        </header>
        <mid>
                <top>
                    <p>Expore The Colourful World</p>
                    <hr width="6%"/>
                </top>
                <bottom>
                    <p>A WONDERFUL GIFT</p>
                    <learn>
                        <h6> LEARN MORE</h6>
                        
                    </learn>
                    
                </bottom>
            </mid>
            
        </Container>
  )
}

export default Home
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${wallpaper});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 500px) {
    background-image: url(https://i.pinimg.com/236x/e9/fe/57/e9fe57108372f394839179459651813b.jpg);
}
header{
    width: 100%;
  color: white;
  margin-top: 15px;
  padding-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
lefthead{




    h2{
  font-weight: 600;
}
h4{
      font-weight: 100;
      letter-spacing: 5px;
  }
}
righthead{
  display: flex;
  
  p{
  padding: 10px;
  cursor: pointer;

  :hover {
  color: red;
}
@media (max-width: 500px) {
  display: none;
  padding: 5px;
  }
}
h6{
  padding: 10px;
  word-spacing: 3px;
  @media (max-width: 500px) {
  padding: 5px;
  word-spacing: 2px;
}
}
@media (max-width: 500px) {
  display: flex;
  }
}
action{
  display: flex;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  margin-left: 20px;
  padding: 0 25px 0 25px;
  cursor: pointer;

  @media (max-width: 500px) {
    display: flex;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  margin-left: 10px;
  padding: 12px 12px 12px 12px;
}
}
mid{
  
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: white;
}
hr{
 border: 1px solid #fb2056 ;
}
top{
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
      font-size: 27px;
      font-weight: bold;
      @media (max-width: 500px) {
  font-size: 20px;
}
}
  
}
bottom{
      display: flex;
      flex-direction: column;
      align-items: center;


      p{
  font-size: 60px;
  font-weight: 550;
  margin-top: 20px;
  word-spacing: 3px;
  @media (max-width: 500px) {
    font-size: 35px;
  font-weight: 550;
  margin-top: 20px;
  word-spacing: 3px;
}
}
}
learn{
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  margin: 2% 43% 5% 44%;
  padding: 5px 25px 5px 25px;

  cursor:  pointer;

  @media (max-width: 500px) {
    width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  margin: 10% 30% 5% 31%;
  padding: 5px 25px 5px 25px;
}
  h6{
  padding: 8px 0 8px 0;
  font-size: 13px;
  font-weight: 550;
}
}

`;