import React from 'react'
import styled from 'styled-components';

function About() {
  return (
      <AboutStyled>
          <h5> About Us</h5>  
          <h6> Our Founder</h6>
          <h3>This page was developed and maintained by Paa Solo</h3>
          <h6>Our Mission</h6>
          <h3> Most people in the world have no experience of deep and abiding joy.

Even though it is something we all desperately long for, the assurance that true happiness can be known — fully and forever — is a hope that billions of people live every day without. This is a tragedy.

Desiring God is on a mission to change that.<br/><br/>

We aim to help people everywhere embrace a profound truth that changes everything about life and eternity:

You were created for something greater than yourself. You were formed for something awesome and magnificent.<br/><br/>

You were made to know glory — God’s glory. And the deepest longings of the human heart can be fully satisfied by pursuing that glory. In fact, God is most glorified in us when we are most satisfied in him.

We call this truth Christian Hedonism. And declaring it to the world is why we exist.</h3>
          <h6>How can I partner?</h6>
          <h3>Then he said to his disciples, “The harvest is plentiful but the workers are few. .You can partner with us by always praying for us and giving to support us </h3>
          


    </AboutStyled>
  )
}

const AboutStyled = styled.div`
 padding-top:8rem ;
 margin-left:12%;
margin-right:12% ;
h5{
  font-size:2.3rem ;
  text-align: center;
}
h6{
    font-size:1.4rem ;
}
h3{
    font-size:1.0rem ;
    opacity:80% ;
    line-height:1.7 ;
    margin-bottom:1.2rem ;
    margin-top:0.5rem ;
}

`;
export default About