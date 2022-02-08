import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1000px;
    height: 200px;
    margin: 10px;
    
    .card {
        height: 100%;
        position: relative;
    }

    .card .coralText {
        position: absolute;
        display: inline-block;
        padding-left: 20px;
        background-color: #ADD8E6;
        height: 100%;

        border-radius: 0 20px 20px 0;
        overflow-y: auto;
    } 

    .card .coralText .coralName {
        text-align: center;
        font-size: 40px;
        margin-bottom: 0;
    }

    .card .coralText .coralDesc {
        display: inline;
        text-align: center;
        font-size: 25px;
    }
`
export default function ResponseCoralView({ id, name, imageSrc, desc }) {
    return (
        <Wrapper>
            <div className='card'>
                <img className='coralImage' src={imageSrc} alt='coral' style={{ height: '200px', width: '200px' }} />
                <div className='coralText'>
                    <h3 className='coralName'>{name}</h3>
                    <p className='coralDesc'>{desc}</p>
                </div>
            </div>
        </Wrapper>
    )
}
