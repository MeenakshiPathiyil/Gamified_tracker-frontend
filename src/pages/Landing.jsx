import React,{useEffect, useState} from "react";
import './landing.css'

function Landing(){
    const [showSymb,setShowSymb] = useState(false);
    const [showGetDemo,setShowGetDemo] = useState(false);
    const [showSignUp,setShowSignUp] = useState(false);
    const [showText,setShowText] = useState(false);
    const [showTagLine,setShowTagline] = useState(false);
    const [showIntro,setShowIntro] = useState(false);
    const [showCircularImg,setShowCircularImg] = useState(false);
    const [showCircularText,setShowCircularText] = useState(false);
    const [showAbtUs,setShowAbtUs] = useState(false);
    const [showAbtBlock,setShowAbtBlock] = useState(false);
    const [showFeedback,setShowFeedback] = useState(false);
    const [showTeam,setShowTeam] = useState(false);
    const [showDetails,setShowDetails] = useState(false);


    useEffect(() =>{
        setShowSymb(true);
        setShowGetDemo(true);
        setShowSignUp(true);
        setShowText(true);
        setShowTagline(true);
        setShowIntro(true);
        setShowCircularImg(true);
        setShowCircularText(true);
        setShowAbtBlock(true);
        setShowAbtUs(true);
        setShowTeam(true);
        setShowFeedback(true);
        setShowDetails(true);
    },[]);

    
    return (
        <div className="landing">
            <header className="landing-header">
                <div className="button-container">
                {showSymb && (
                   <img src ={`${process.env.PUBLIC_URL}/images/sym.png`} alt ="symbol"  className="symbol"/>
                )}
                {showGetDemo && (
                   <img src ={`${process.env.PUBLIC_URL}/images/demo.png`} alt ="DEMO"  className="demo"/>
                )}
                {showSignUp &&(
                     <img src ={`${process.env.PUBLIC_URL}/images/login.png`} alt ="LOGIN"  className="signup"/>
                )}
                </div>
            </header>
            <div className="landing-container">
               
                {showText && (
                   <img src ={`${process.env.PUBLIC_URL}/images/name.png`} alt ="name"  className="Website-name"/>
                )}
                
                {showTagLine && (
                    <div className="taglines">
                    <p className="tagline">Productive|Efficient|Creative|Fun|Dynamic</p>
                    <img src ={`${process.env.PUBLIC_URL}/images/tag.png`} alt ="tag"  className="tagline1"/>
                    </div>
                )}
            </div>
            <div className="landing2-container">

                    {showIntro && (
                        <div className="introduction">
        <video controls width="300" height="200" className="intro-img">
            <source src ={`${process.env.PUBLIC_URL}/images/nav.mp4`} alt ="navigation vid" type="video/mp4"/>
        </video>                            
        <div className="intro-text">
                                <p> Journey Begins Here: <br></br>How to Navigate Cruxx Like a Pro!
                                </p>
                            </div>
                        </div>
                    )}
                    <br></br><br></br>
                    {showCircularImg && (
                        <div className="desc-img">
                            <img src ={`${process.env.PUBLIC_URL}/images/three.jpg`} alt ="briefdesc"  className="desc"/>
                            <img src ={`${process.env.PUBLIC_URL}/images/three.jpg`} alt ="gamedesc"  className="game"/>
                            <img src ={`${process.env.PUBLIC_URL}/images/three.jpg`} alt ="gamedesc"  className="char"/>
                            </div>
                    )}
                    {showCircularText && (
                        <div className="desc-text">
                            <div className="brief-text" >Effortlessly track your daily habits, journal thoughts, and gain insights through in-depth progress analyses. With each task completed, you earn points that unlock a variety of creative elements, letting you build and personalize your virtual space in a way that reflects growth. Each habit completed and goal reached adds a new dimension to your journey, transforming your virtual world into a vivid landscape of achievements. Embrace a rewarding, gamified experience in habit-building, where each milestone brings opportunities, making self-improvement engaging and visually captivating.</div>
                            <div className="game-text">In Cruxx, completing daily habits becomes a transformative journey. Every time you check off an item on your to-do list, you're rewarded with points that unlock a range of elements to create your own personalized world. Imagine building a unique landscape filled with custom-designed houses, vibrant plants, playful animals, and much more. Each element added reflects your progress, turning achievements into a visible, interactive space that grows and evolves as you do. With every habit completed, fresh possibilities open up, allowing you to shape a world that reflects your vision and dedication.</div>
                            <div className="char-text">Tracking your habits brings a new level of personalization through character avatars. Every time tasks are completed and points are gained, fresh characters are unlocked for you to choose from. With a diverse selection available, finding the perfect fit to represent your style and personality as you progress is easy. From adventurous explorers to calm and focused figures, each avatar adds a new dimension to your experience, allowing for unique self-expression. Customize your journey by selecting avatars, making your habit-tracking adventure as personal and engaging as possible.</div>
                        </div>
                    )}

                
                
        </div>
        <div className="landing3-container">
            {showAbtUs && (
                <img src ={`${process.env.PUBLIC_URL}/images/abt.png`} alt ="ABOUT US"  className="abtus"/>

            )}
 {showAbtBlock && (
    <div className="about">
        <img src={`${process.env.PUBLIC_URL}/images/abtus.jpg`} alt="ABOUT US1" className="b1" />
        <p className="about1">Welcome to Cruxx! We are a passionate team of three 19-year-old college students who understand the challenge of maintaining habits, despite their undeniable benefits. We realized that while motivation is essential, true discipline is vital for lasting change. One of the most effective ways to cultivate discipline is through instant gratification—celebrating each small victory as we complete our habits.
        <br></br><br></br>In our quest for effective habit-building strategies, we scoured the internet, exploring countless websites and absorbing various perspectives. However, we quickly discovered that existing solutions didn't fully cater to our needs. This realization sparked a new idea: why not create a platform ourselves? And thus, Cruxx was born.</p>
        
        <img src={`${process.env.PUBLIC_URL}/images/abtus.jpg`} alt="ABOUT US2" className="b2" />
        <p className="about2">At Cruxx, we offer a gamified habit tracker designed to make the journey of building habits enjoyable. In a digital world, we strive to harness technology to its fullest potential. Many of our friends are avid gamers and inspired us to incorporate a gaming twist into our habit tracker, making it engaging and motivating for users of all ages.
        <br></br><br></br>Our mission is to provide a platform where individuals can track their habits while experiencing the joy of accomplishment. With the right tools, habit-building can become an exciting adventure, and we're thrilled to embark on this journey with you. Join us as we explore the dynamic intersection of technology, personal development, and gaming, turning the challenge of habit formation into a rewarding experience!</p>
        
        <img src={`${process.env.PUBLIC_URL}/images/abtus.jpg`} alt="ABOUT US3" className="b3" />
    </div>
)}

{showTeam && (
                <div className="team">
                    <img src={`${process.env.PUBLIC_URL}/images/meet.png`} alt="ABOUT US2" className="meeth" />
                    <div className="team-members">
                        <div className="meena-container">
                            <img src={`${process.env.PUBLIC_URL}/images/personal.jpg`} alt="meenakshi" className="meena" />
                            <p className="fmeena">You know I'll be your life, your voice, your reason to be My love, my heart is breathing for this Moment, in time I'll find the words to say Before you leave me today</p>
                        </div>
                        <div className="neem-container">
                            <img src={`${process.env.PUBLIC_URL}/images/personal.jpg`} alt="neema" className="neem" />
                            <p className="fneema">You know I'll be your life, your voice, your reason to be My love, my heart is breathing for this Moment, in time I'll find the words to say Before you leave me today</p>
                        </div>
                        <div className="namb-container">
                            <img src={`${process.env.PUBLIC_URL}/images/personal.jpg`} alt="namritha" className="namb" />
                            <p className="fnam">You know I'll be your life, your voice, your reason to be My love, my heart is breathing for this Moment, in time I'll find the words to say Before you leave me today</p>
                        </div>
                    </div>
                </div>
            )}





            {showFeedback && (
                <div className="feedback">
                    <br></br><br></br><br></br>
                    Your feeback means a lot to us 
                    <div className="input-container">
                        <input className= "input" type="text" placeholder="enter your feeback here"></input>
                        <button className="submit-btn">➔</button>
                    </div>
                    </div>
            )}
            {showDetails && (
                <div className="footer">

                    </div>
            )}
        </div>
    </div>

    );
}
export default Landing;