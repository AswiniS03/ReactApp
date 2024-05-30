import React from 'react';
import './App.css';
function App ()
{
  function searchHide()
  {
      let s=document.getElementById("search2");
      if(s.style.display==="none")
        {
          s.style.display="block";
        }
        else 
        {
          s.style.display="none";
        }

  }
  return(
    <div class="body">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="nav">
      <div className="navBar">
        <ol>
          <div className="navBar-left">
          <li><select><option>Features</option></select></li>
          <li><select><option>Solution</option></select></li>
          <li><a href="www.google.com">Enterprice</a></li>
          <li><select><option>Resource</option></select></li>
          <li><a href="www.google.com">Pricing</a></li>
          </div>
          <div className="navBar-right">
              
                <li id="search"  >🔍</li>
                
                 <li><a href="www.google.com">Sign in</a></li>
                 <button className="button1">
                  TALK TO SALES
                 </button>
                 <button className="button2">
                  GET STARTED
                 </button>
                 
          </div>
        </ol>
      </div>
      </div>
        <div className="body1">
            <h1 className="txt1">Made for People.<span className="txt2">Built for Productivity.</span></h1>
            <button className="button3">
                  GET STARTED
                 </button>
                 <p><b>Slack is free to try </b>for as long as you like</p>
            <ol className="images">
                <li><img src="https://assets-global.website-files.com/6047a9e35e5dc54ac86ddd90/6387b574438cb34f02fcf8c7_8QxOTbpyisEwldvyhwvfa_LhpqNLyGmJagh6i7fTgqg.png" alt="Airbnb"/></li>
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/640px-NASA_logo.svg.png" alt="Airbnb"/></li>
                <li><img src="https://globaleducationcoalition.unesco.org/uploads/252_Uber_color_logo.png?v=GVwOe7AEeJSSdozb8vk5PdFJTnuh4zT5mQLD3l2A9c4" alt="Airbnb"/></li>
                <li><img src="https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png" alt="Airbnb" className="img4"/></li>
                {/*<li><img src="https://cdn.warc.com/Images/Feed//en-GB/28c84bef-664f-4c89-9e70-1213819f2c86/tile.png" alt="Airbnb"/></li>*/}
                <li><img src="https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2019/04/Difference-Between-Amazon-and-Etsy-.png" alt="Airbnb"/></li>
            </ol>
            <video width="800" height="800"  autoPlay >
                <source src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"/>
            </video>
            <div className="container">
            <div className="left1">
            <h2 >Move faster with your<br></br> tools in one place</h2>
            <p style={{color:"black"}}>Automate away routine tasks with the power of generative <br></br>AI and simplify your workflow with all your favourite<br></br>apps ready to go in Slack.</p>
            <a href="www.google.com" style={{color:"blue"}} className="link1">Learn more about Slack platform here</a>
            </div>
            <div className="right1">
            <img src="https://images.ctfassets.net/lzny33ho1g45/3nENMYp1cx2GO9mkaFGWrR/05021c927e564fdbca93bdf1b9556d88/slack_app_tips.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760 " alt="slack" style={{width:"500", height:"300px"}}/>
            </div>
            <br></br><br></br>
            
            </div>
            <br></br><br></br>
            <div className="right2">
              <img src="https://www.uctoday.com/wp-content/uploads/2023/08/Slack-Launches-Redesign-to-Boost-User-Productivity.jpg" alt="imgg" style={{width:"500", height:"300px"}}/>
            </div>
            <div className="left2">
              <h2>Choose how you want to work</h2>
              <p>In Slack, you’ve got all the flexibility to work when, where <br></br>and how it’s best for you. You can easily chat, send audio and video <br></br>clips, or join a huddle to talk things through live.</p>
              <a href="www.google.com" style={{color:"blue"}} className="link1">Learn more about flexible communication</a>

            </div>
            <div className="left2">
              <br></br><br></br>
            <h2 >Bring your team together</h2>
            <p style={{color:"black"}}>At the heart of Slack are channels: organised spaces<br></br>for everyone and everything that you need for work. In channels,<br></br>  it’s easier to connect across departments, offices,<br></br>  time zones and even other companies.</p>
            <a href="www.google.com" style={{color:"blue"}} className="link1">Learn more about channels</a>
            </div>
            <br></br>
            <div className="right2">
            <img src="https://images.ctfassets.net/lzny33ho1g45/3nENMYp1cx2GO9mkaFGWrR/05021c927e564fdbca93bdf1b9556d88/slack_app_tips.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760 " alt="slack" style={{width:"500", height:"300px"}}/>
            </div>

            
            

        </div>
        <div className="body3">
                 <h1>Teams large and small rely on slack.</h1>
                 <p>Slack securely scales up to support collaboration at the world’s biggest companies.</p>
                 <button className="button2">
                  MEET SLACK FOR ENTERPRICE
                 </button>
                 <button className="button1">
                 TALK TO SALES
                 </button>
                 
            </div>
            
                    
                  <div className="ps">
                 <div class="part1">
                      <h1>85%</h1>
                 </div>
                 <div class="part2">
                      <h1>86%</h1>
                 </div>
                 <div class="part3">
                      <h1>88%</h1>
                 </div>
                 <p style={{fontSize:"100%",color:"black" ,marginTop:"0cm" , display:"inline-block"}}>of users say that Slack<br></br> has improved communication*</p>
                 <p style={{fontSize:"100%",color:"black" ,marginTop:"0cm",display:"inline-block",marginLeft:"2cm"}}>of users say that Slack<br></br> has improved communication*</p>
                 <p style={{fontSize:"100%",color:"black" ,marginTop:"0cm",display:"inline-block",marginLeft:"2.5cm"}}>of users say that Slack<br></br> has improved communication*</p>

                 </div>
                 <div className="cont4">
                  <div className='left4'>
                    <img src="https://ecomclips.com/blog/wp-content/uploads/2022/06/Content-Banner-1-1.webp" style={{width:"500px", height:"350px"}} alt="img"/>
                  </div>
                  <div className='right4'>
                    <p><i>'Many technology employees were gravitating naturally to Slack. So we followed our users to what has become one of our most important tools.’</i></p>
                    <p style={{fontSize:"20px" , display:"inline", marginBottom:"0"}}><b>Matt Beal</b><br></br>Director of Technology Strategy and Architecture, Vodafone</p>
                    {/*<p style={{fontSize:"20px"}}>Director of Technology Strategy and Architecture, Vodafone</p>*/}<br></br>
                    <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">See more customer stories</a>

                  </div>
                 </div>
                 <div className="cont5">
                      <p>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
                 </div>
                 <div className="cont7">
                  <br></br>
                 <div className="cont6">
                      <h1>Take a deeper dive into a new way to work</h1>
                 </div>
                 <div className="cont8">
                      <img src="https://a.slack-edge.com/b37cac3/marketing/img/promos/promo-card-dreamforce-2023.png" alt="imgg" style={{width:"250px" ,height:"150px"}}/>
                      <p>Event</p>
                      <h3>Ready for the future of AI in slack</h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">WATCH ON DEMAND</a>

                      
                 </div>
                 <div className="cont8">
                 <img src="https://a.slack-edge.com/971bef2/marketing/img/promos/slack-turns-10-blog.jpg" alt="imgg" style={{width:"250px" ,height:"150px"}}/>
                      <p>Blog</p>
                      <h3>Ten features to know on Slack's Birthday</h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">READ NOW</a>

                 </div>
                 <div className="cont8">
                 <img src="https://a.slack-edge.com/426ed86/marketing/img/promos/promo-open-ai.jpg" alt="imgg" style={{width:"250px", height:"150px"}}/>
                      <p>Customer Story</p>
                      <h3>How OpenAI expands Chatgpt with Slack </h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">READ NOW</a>

                 </div>
                 <div className="cont8">
                 <img src="https://a.slack-edge.com/426ed86/marketing/img/promos/promo-boost-productivity.jpg" alt="imgg" style={{width:"250px" ,height:"150px"}}/>
                      <p>Webinar</p>
                      <h3>Top slack tips to boost productivity</h3>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <a href="www.google.com" style={{color:"blue" , fontSize:"20px"}} className="link1">WATCH NOW</a>

                 </div>
                 <br></br><br></br><br></br><br></br><br></br><br></br>
                 </div>
                 <div className="cont9">
                 <br></br><br></br><br></br><br></br><br></br>
                    <h1 style={{color:"white"}}>See all that you can accomplish with Slack</h1>
                    <button className="button1" style={{padding:"20px",width:"250px"}}>
                     TRY FOR FREE
                 </button>
                 <button className="button2" style={{padding:"20px",width:"250px"}}>
                 TALK TO SALES
                 </button>
                 </div>
                 <div className="cont10" style={{textAlign:"right"}}>
                 <a href="www.google.com" class="fa fa-facebook"></a>
                  <a href="www.google.com" class="fa fa-twitter"></a>
                  <a href="www.google.com" class="fa fa-linkedin"></a>
                  <a href="www.google.com" class="fa fa-youtube"></a>
                  <a href="www.google.com" class="fa fa-instagram"></a>
                 </div>
                 <hr></hr>
                 <div className="cont12">
                 <div className="cont11">
                      
                 </div>
                 <div className="cont11">

                 </div>
                 <div className="cont11">

                 </div>
                 <div className="cont11">

                 </div>
                 <div className="cont11">

                 </div>
                 </div>
                 

    </div>
  );
}
export default App;