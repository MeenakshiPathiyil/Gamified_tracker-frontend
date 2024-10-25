import React,{useEffect, useState} from "react";
import './landing.css'

function Landing(){
    const [showGetDemo,setShowGetDemo] = useState(false);
    const [showSignUp,setShowSignUp] = useState(false);
    const [showText,setShowText] = useState(false);
    const [showTagLine,setShowTagline] = useState(false);
    const [showIntro,setShowIntro] = useState(false);
    const [showCircularImg,setShowCircularImg] = useState(false);
    const [showCircularText,setShowCircularText] = useState(false);
    const [showMiniLogo,setShowMiniLogo] = useState(false);
    const [showAbtUs,setShowAbtUs] = useState(false);
    const [showAbtBlock,setShowAbtBlock] = useState(false);
    const [showFeedback,setShowFeedback] = useState(false);
    const [showDetails,setShowDetails] = useState(false);

    useEffect(() =>{
        setShowGetDemo(true);
        setShowSignUp(true);
        setShowText(true);
        setShowTagline(true);
        setShowIntro(true);
        setShowCircularImg(true);
        setShowCircularText(true);
        setShowMiniLogo(true);
        setShowAbtBlock(true);
        setShowAbtUs(true);
        setShowFeedback(true);
        setShowDetails(true);
    },[]);
    
    return (
        <div className="landing">
            <header className="landing-header">
                <div className="button-container">
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
                    <h1 className = "Website-name">Website-Name</h1>
                )}
                
                {showTagLine && (
                    <p className="tagline">Productive|Efficient|Creative|Fun</p>
                )}
            </div>
            <div className="landing2-container">
                {showMiniLogo && (
                    <div className="logo">LOGO</div>
                )}
                    {showIntro && (
                        <div className="introduction">
                            <div className="intro-img">How to navigate</div>
                            <div className="intro-text">
                                <p>
                                This is a proj blah blah blah blah blah blha blha blah blah blah blah blah<br></br>
                                This is a proj blah blah blah blah blah blha blha blah blah blah blah blah<br></br>
                                This is a proj blah blah blah blah blah blha blha blah blah blah blah blah<br></br>
                                This is a proj blah blah blah blah blah blha blha blah blah blah blah blah<br></br>
                                This is a proj blah blah blah blah blah blha blha blah blah blah blah blah<br></br>
                                

                                </p>
                            </div>
                        </div>
                    )}
                    
                    {showCircularImg && (
                        <div className="desc-img">
                            <div className="desc">brief-desc</div>
                            <div className="game">game-desc</div>
                            <div className="char">char-desc</div>
                            </div>
                    )}
                    {showCircularText && (
                        <div className="desc-text">
                            <div className="desc-text">brief-desc yap yap yap yap </div>
                            <div className="game-text">game-desc yap yap yap yap</div>
                            <div className="char-text">char-desc  yap yap yap yap</div>
                        </div>
                    )}

                
                
        </div>
        <div className="landing3-container">
            {showAbtUs && (
                <div className="abtus">ABOUT US</div>

            )}
            {showAbtBlock && (
                <div className="about">
                    <div className="b1">block with img of theme</div>
                    <div className="b2">block with img of theme</div>
                    <div className="b3">block with img of theme</div>
                    </div>
            )}
            {showFeedback && (
                <div className="feedback">
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