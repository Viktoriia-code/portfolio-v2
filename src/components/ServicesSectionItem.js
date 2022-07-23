import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon{
        svg{
            width: 3rem;
        }
    }
    .servicesItem__title{
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para{
        margin-top: 2rem;
    }
`;

export default function ServicesSectionItem({
    icon = <MdDesktopMac />,
    title='Web Design',
    desc='I do ui/ux design for websites that helps them to get a unigue look.'
}) {
  return (
    <ItemStyles>
        <div className="servicesItem__icon">{icon}</div>
        <div className="servicesItem__title">{title}</div>
        <PText>{desc}</PText>
    </ItemStyles>
  )
}
