import React from 'react';
import FooterCol from './FooterCol';
import PText from './PText';
import styled from 'styled-components';

const FooterStyles = styled.div`
    padding-top: 5rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 3rem;
    }
    .footer__col1{
        flex: 2;
    }
    .footer__col2, .footer__col3, .footer__col4{
        flex: 1;
    }
    .footer__col3 a{
        overflow-wrap: anywhere;
    }
    .footer__col1__title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright{
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem;
        margin-top: 5rem;
        .para{
            margin-left: 0;
            max-width: 100%;
        }
    }
    @media only screen and (max-width: 768px) {
        padding-top: 5rem;
        width: 100%;
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div{
                margin-top: 5rem;
            }
        }
        .footer__col1 .para{
            max-width: 100%;
        }
        .copyright {
            .container{
                div{
                    margin-top: 0;
                }
            }
        }
    }
`;

export default function Footer() {
  return (
    <FooterStyles>
        <div className="container">
            <div className="footer__col1">
                <h1 className="footer__col1__title">Viktoriia Beloborodova</h1>
                <PText>
                    I am a software deloping student at KEUDA, Finland. I love to design and make new web experiences for people.
                </PText>
            </div>
            <div className="footer__col2">
                <FooterCol heading="Important Links"
                links={[
                    {
                        title: "Home",
                        path: '/',
                        type: "Link",
                    },
                    {
                        title: "About",
                        path: '/About',
                        type: "Link",
                    },
                    {
                        title: "Projects",
                        path: '/Projects',
                        type: "Link",
                    },
                    {
                        title: "Contact",
                        path: '/Contacts',
                        type: "Link",
                    },
                ]}
                />
            </div>
            <div className="footer__col3">
                <FooterCol 
                    heading="Contact Info"
                    links={
                        [
                            {
                                title: "+35845318...",
                                path: 'tel:+35845318...'
                            },
                            {
                                title: 'beloborodova.viktoriia@gmail.com',
                                path: 'mailto:beloborodova.viktoriia@gmail.com'
                            },
                            {
                                title: 'Kerava, Finland',
                                path: 'https://goo.gl/maps/FFZoaYrJnXVYgMRF9',
                            }
                        ]
                    }
                />
            </div>
            <div className="footer__col4">
                <FooterCol 
                    heading='Social Links'
                    links={
                        [
                            {
                                title: 'LinkedIn',
                                path: 'https://www.linkedin.com/in/viktoriia-beloborodova/'
                            },
                            {
                                title: 'Instagram',
                                path: 'https://www.instagram.com/vi.ki1872/'
                            },
                            {
                                title: 'GitHub',
                                path: 'https://github.com/Sisilisko'
                            }
                        ]
                    }
                />
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <PText>
                    © 2022 - Viktoriia Beloborodova | Designed by me
                </PText>
            </div>
        </div>
    </FooterStyles>
  )
}
