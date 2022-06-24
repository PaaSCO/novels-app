import React from 'react'
import styled from 'styled-components';

function About() {
  return (
      <AboutStyled>
          <h5> About Us</h5>  
          <h6> Our Founder</h6>
      <h3>Arthur Solomon is a student of the Bible and Youth Worker in the vinyard of God.
        His desire is to know God and to walk faithfully with Him. 

        
      
      </h3>
          <h6>Our Mission</h6>
      <h3>The word of God is meant to be eaten not read. Many people read the word of God 
        just like any other book in their library. Jeremiah 15:16 says <q>Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart:
        for I am called by thy name, O LORD God of hosts.</q>
      </h3>
      
      <h3>The prophet found the word and took his time to enjoy it like we would enjoy our breakfasts. Reading
      
        the word of God is like putting a piece of bread in our mouth. It will do us no good until we chew and swallow
        for digestion to take place in our system.</h3>
      
      <h3>
        
 Ezekiel 3:1-3
     <blockquote ><i>
           1 Moreover He said unto me, “Son of man, eat what thou findest: <b className='name'>eat this scroll </b>, and go, speak unto the house of Israel.”<br/>

2 So I opened my mouth, and He caused me to eat that scroll.<br/>

3 And He said unto me, “Son of man, cause thy belly to eat, and fill thy bowels with this scroll that I give thee.” Then did I eat it, and it was in my mouth as honey for sweetness.
      </i>
</blockquote>
      </h3>

      <h3>God's ultimate aim for his children is to daily feed them with His word.
        Our mission and mandate as a group is to provide useful resources for people who are hungry and thirsty for the pure unadulterated word of God.

      </h3>
      <h3>You are welcome to the place where the hungry and thirsty are fed.</h3>

          <h6>How can I partner?</h6>
          <h3>Then he said to his disciples, “The harvest is plentiful but the workers are few. .You can partner with us by always praying for us.</h3>
          


    </AboutStyled>
  )
}

const AboutStyled = styled.div`
 padding-top:8rem ;
 margin-left:12%;
margin-right:12% ;

.name{
  color:red;
}

h5{
  font-size:2.3rem ;
  text-align: center;
   color:${props=>props.theme.textColor} !important;
}
h6{
    font-size:1.6rem ;
    color:${props=>props.theme.textColor} !important;
}
h3{
    font-size:1.1rem ;
    opacity:80% ;
    line-height:1.7 ;
    margin-bottom:1.2rem ;
    margin-top:0.5rem ;
    color:${props=>props.theme.textColor} !important;
    
}

`;
export default About