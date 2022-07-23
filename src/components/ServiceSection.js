import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import { MdDesktopMac } from 'react-icons/md';
import { MdCode } from 'react-icons/md';
import { MdPhonelinkSetup } from 'react-icons/md';

const ServicesItemStyles = styled.div`
    padding: 10rem 0;
    .services__allItems{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px) {
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
       <div className="container">
            <SectionTitle heading='Services'
            subheading="What I can do for you" />
                <div className="services__allItems">
                    <ServicesSectionItem 
                        icon={<MdDesktopMac />}
                        title="Website Design"
                        desc="I do ui/ux design for websites that helps them to get a unigue look."
                    />
                    <ServicesSectionItem 
                        icon={<MdCode />}
                        title="Web Development"
                        desc="I also develop the websites. I create high performance website with blazing fast speed."
                    />
                    <ServicesSectionItem 
                        icon={<MdPhonelinkSetup />}
                        title="Web Support"
                        desc='I receive incoming customer questions via online chat portal and resolve in a timely manner.'
                    />
                </div>
       </div>
    </ServicesItemStyles>
  )
}
