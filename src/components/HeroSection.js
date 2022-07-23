import React from 'react'
import HeroImg from '../assets/images/my_photo.jpg';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';

const HeroStyled = styled.div`
 .hero {
     height: 100vh;
     width: 100%;
     text-align: center;
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
}
.hero__heading {
     font-size: 2rem;
     position: relative;
     margin-bottom: -79px;
     span {
         display: inline-block;
         width: 100%;
     }
     .hero__name {
        font-size: 7rem;
        font-family: "Montserrat SemiBold";
        color: var(--gray-2);
     }
 }
 .button-wrapper{
    margin-top: 1rem;
 }
 .hero__img{
     max-width: 900px;
     width: 100%;
     height: 600px;
     margin: 0 auto;
     border: 2px solid var(--gray-1);
 }
 .hero__info {
     margin-top: -18rem;
     p {
        color: var(--deep-dark);
        text-shadow: -4px -4px 20px #FFFFFF;
        font-family: "Montserrat SemiBold";
     }
 }
 .hero__social, .hero__scrollDown {
     display: flex;
     flex-direction: column;
     gap: 2rem;
     position: absolute;
     bottom: 20px;
     width: 50px;
 }
 .hero__social {
     left: 50px;
     bottom: 43%;
 }
 .hero__scrollDown {
     right: 50px;
     bottom: 10%;
 }
 .hero__social__indicator, .hero__scrollDown {
     width: 50px;
     p {
         font-size: 1.6rem;
         transform: translateY(-120px) rotate(90deg);
         letter-spacing: .7rem;
         text-transform: uppercase;
     }
     img {
         max-height: 45px;
         width: 16px;
         margin: 0 auto;
         object-fit: contain;
     }
 }
 .hero__scrollDown {
     img{
         max-height: 70px;
     }
 }
 .hero__social__text {
    transform: rotate(90deg);
     ul{
         li{
             margin-bottom: 1rem;
             display: inline;
         }
         a{
             font-size: 1.6rem;
             letter-spacing: 5px;
             margin-left: 2rem;
         }
     }
 }
 @media only screen and (max-width: 915px) {
    .hero__heading{
        margin-bottom: -164px;
    }
 }
 @media only screen and (max-width: 1115px){
    .hero__social{
        left: 0;
    }
    .hero__scrollDown{
        right: 0;
    }
 }
 @media only screen and (max-width: 768px) {
    .hero__info p{
        text-shadow: none;    
    }
     .hero {
         min-height: 750px;
     }
     .hero__heading {
        font-size : 1.4rem;
        margin-bottom: 1rem;
        .hero__name {
            font-size: 4.5rem;
        color: var(--gray-1);
        }
     }
     .hero__img {
         height: 300px;
     }
     .hero__info{
         margin-top: 3rem;
     }
     .hero__info p{
        color: var(--gray-1);
     }
     .hero__social {
         width: 20px;
         .hero__social__indicator {
             width: 20px;
             p {
                 font-size: 1.2rem;
             }
             img {
                 max-height: 22px;
             }
         }
         .hero__social__text {
             ul {
                 li {
                     a {
                         font-size: 1.2rem;
                         margin-bottom: 1rem;
                     }
                 }
             }
         }
     }
     .hero__scrollDown {
         width: 20px;
         gap: 1rem;
         p {
             font-size: 1.3rem;
         }
     }
 }
`;

export default function HeroSection() {
  return (
    <HeroStyled>
        <div className="hero">
        <div className="container">
            <h1 className="hero__heading">
                <span>Hello, this is</span>
                <span className="hero__name">Viktoriia Beloborodova</span>
            </h1>
            <div className="hero__img">
                <img src={HeroImg} alt="" />
            </div>
            <div className="hero__info">
                <PText>
                    I am a future frontend developer & designer, currently studying software deloping at KEUDA, Finland.
                    
                    I love to design and make new web experiences for people.
                </PText>
                <Button btnLink="./projects" btnText="see my works" outline={false} />
            </div>
            <div className="hero__social">
                <div className="hero__social__indicator">
                    <p>Contacts</p>
                    <img src={SocialMediaArrow} alt="social media arrow" />
                </div>
                <div className="hero__social__text">
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/viktoriia-beloborodova/"
                                target="_blank"
                                rel='noreferrer'
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:beloborodova.viktoriia@gmail.com"
                                target="_blank"
                                rel='noreferrer'
                            >
                                Email
                            </a>
                        </li>                                               
                    </ul>
                </div>
            </div>
            <div className="hero__scrollDown">
                <p>Scroll</p>
                <img src={ScrollDownArrow} alt="" />
            </div>
        </div>
        </div>
    </HeroStyled>
  )
}
