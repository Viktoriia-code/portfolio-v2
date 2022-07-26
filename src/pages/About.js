import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpg';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 15rem 0 0 0;
  .top-section{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
  .left{
    flex: 5;
  }
  .right{
    flex: 3;
  }
  .about__subheading{
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading{
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info{
    margin-bottom: 4rem;
    .para{
      max-width: 100%;
    }
  }
  .right{
    img{
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items{
    margin-top: 15rem;
  }
  .about__info__item{
    margin-bottom: 10rem;
  }
  .about__info__heading{
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section{
      flex-direction: column;
      gap: 5rem
    }
    .about__subheading{
      font-size: 1.8rem;
    }
    .about__heading{
      font-size: 2.8rem;
    }
    .about__info__heading{
      font-size: 3rem;
    }
  }
`;

export default function About() {
return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I'm <span>Viktoriia Beloborodova</span>
            </p>
            <h2 className="about__heading">A freelance Web developer</h2>
            <div className="about__info">
              <PText>
                  I am from Kerava, Finland. A place of beauty and
                  nature. Since my childhood, I love art and design. I always
                  try to design stuff with my unique point of view. I also love
                  to create things that can be usefull to others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br /> <br />
                  As an employee, I’m efficient and accustomed to working under
                  pressure. My goal is to work at IT on interesting and challenging
                  problems, on task that support my professional development.
              </PText>
            </div>
            
            <Button btnText='Download CV' btnLink={process.env.PUBLIC_URL + '/CVViktoriiaBeloborodovaENG.pdf'}></Button>
          </div>
          <div className="right">
            <img src={AboutImg} alt='Viktoriia Beloborodova img' />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem 
              title='School'
              items={['48th High School, Novouralsk, Russia']}
            />
            <AboutInfoItem 
              title='University'
              items={['Ural State Mining University, Yekaterinburg, Russia']}
            />
            <AboutInfoItem 
              title='Vocational school'
              items={['KEUDA, Kerava, Finland']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My skills</h1>
            <AboutInfoItem 
              title='FrontEnd'
              items={['HTML', 'CSS', 'JavaScript', 'React']}
            />
            <AboutInfoItem 
              title='BackEnd'
              items={['Node']}
            />
            <AboutInfoItem 
              title='Design'
              items={['Figma']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My experience</h1>
            <AboutInfoItem 
              title='Sept, 2017 - Oct, 2020'
              items={['EDI specialist at KORUS Consulting CIS']}
            />
          </div>
        </div>
      </div>
    <ContactBanner />
    </AboutPageStyles>
  )
}
