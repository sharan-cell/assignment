import React from 'react'
import styled from 'styled-components'
import everest from './Images/everest.jpg'
import walker from './Images/walker.jpg'
function Upcomming() {
  return (
    <Container>
        <div class="event">
            <eventhead>
                <p>UPCOMING EVENTS</p>
                <hr width="7%"/>

            </eventhead>
            <eventbody>
                <event1>
                    <img src={everest} alt="i"/>
                    <h5><b>Everest Camp Trek</b></h5>
                    <p>Lets step on mount everest base camp journey,<br/> and explore majestic world of treking. </p>
                    <learnmore>
                        <h6> LEARN MORE →</h6>
                        
                    </learnmore>
                </event1>
                <event1>
                    <img src={walker} alt="i"/>
                    <h5><b>Walking Holidays</b></h5>
                    <p>A walk in nature walks the soul back home,<br/>
                        There are no shortcuts to any place worth going.
                    </p>
                    <learnmore>
                        <h6> LEARN MORE →</h6>
                        
                    </learnmore>
                </event1>

            </eventbody>


        </div>
        


    </Container>
  )
}

export default Upcomming
const Container = styled.div`
 height: auto;
  width: 100%;

  eventhead{
  margin-top: 8em;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  p{
  font-size: 40px;
  font-weight: 550;
  @media (max-width: 500px) {
  font-size: 25px;
}
}
hr{
  border: 2px solid #fb2056 ;
  @media (max-width: 500px) {
  width: 18%;
}
}
}
eventbody{
  display: flex;
  justify-content: space-evenly;
  
}
event1{
  width: 38%;
  height: auto;
  
  margin: 0 2% 0 2%;
  
  img{
  width: 100%;
  border-radius: 5px;
  box-shadow: 10px 10px 5px #ccc;
}
h5{
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;

  text-align: center;
}
p{
  text-align: center;
}
}
learnmore{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  margin: 5% 33% 5% 34%;
  padding: 5px 0 5px 0;
  flex-wrap: nowrap;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fb2056;
  border-radius: 20px;
  margin: 5% 23% 5% 4%;
  padding: 5px 0 5px 0;
  flex-wrap: nowrap;
}
  h6{
  padding: 5px 0 5px 0;
  font-weight: 550;
  color: white;
}
}
`;