import React from 'react';
import styled from 'styled-components';
import { globalBlue } from '../components/css-objects';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;

    .card .coralName {
        position: absolute;
        bottom: 2px;
        font-weight: bold;
        font-size: 15px;
        text-decoration: underline;
        color: ${globalBlue};
    }
`
export default function CoralView({ name, imageSrc }) {
    return (
        <Wrapper>
            <div className='card'>
                <img className='coralImage' src={imageSrc} alt='coral' style={{ width: '100%' }} />
                <p className='coralName'>{name}</p>
            </div>
        </Wrapper>
    )
}
