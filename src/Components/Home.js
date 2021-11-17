import React from "react";
import styled from "styled-components";
import Navbar from "./Nav/Navbar";
import RightNavbar from "./Nav/RightNavBar";


const LandingContainer = styled.section`
background-color: #00364D;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const VideoContainer = styled.section`
background-color: #00364D;
height: 150vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const MapContainer = styled.section`
background-color: #00364D;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const SponsorContainer = styled.section`
background-color: #00364D;
height: 100vh;
background-size: cover;
display: flex !important;
flex-direction: column;
align-items: center;
justify-content: center;
`;



function Home() {
    return (
        <>
            
            <h1>Home Page</h1>
            
            <LandingContainer>
                 <h1>Landing</h1>
            </LandingContainer>

            <VideoContainer>

                {/* Muted promotional video that plays on render and loops */}

                <h1>Video</h1>
                <video  autoPlay muted loop >
                    <source src="CoverVideo.mp4" />
                    This Browser does not support the video tag
                    </video>
            </VideoContainer>

           

            <SponsorContainer> 
                <h1>Sponsors</h1>
                
                {/* clickable image Hyperlinks to sponsors websites */}

                <a href="https://home.kpmg/uk/en/home.html" target="_blank">KPMG</a>
                <a href="https://about.google/" target="_blank">Google</a>
                <a href="https://about.google/" target="_blank">GitHub</a>
                <a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla</a>
                <a href="https://business-school.exeter.ac.uk/" target="_blank">Exeter Business</a>
                <a href="https://www.marshmclennan.com/" target="_blank">Marsh and McLennan Companies </a>
                <a href="https://www.ashurst.com/" target="_blank">Ashurt</a>
                <a href="https://www.oaknorth.co.uk/" target="_blank">Oaknorth Bank</a>
                <a href="https://www.db.com/" target="_blank">Deutsche Bank</a>
                <a href="https://aws.amazon.com/" target="_blank">Amazon AWS</a>
                <a href="https://www.teachfirst.org.uk/" target="_blank">teach first</a>
                <a href="https://www.altitudeads.com/" target="_blank">altitude ads</a>
                <a href="https://www.billingbetter.co.uk/" target="_blank">billing better</a>
                <a href="https://deliveroo.co.uk/" target="_blank">deliveroo</a>
                <a href="https://www.buzzfeed.com/uk " target="_blank">buzzfeed</a>
                <a href="https://webwisemedia.co.uk/" target="_blank">web wise media</a>


            </SponsorContainer>

            <MapContainer>
                <h1>Map</h1>
            </MapContainer>
            

           
        </>
    );
}

export default Home;