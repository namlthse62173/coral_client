import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid #6495ED;
    width: 80%;
    height: 200px;
    margin: 10px;
    border-radius: 15px;
    overflow: hidden;
    background-color: #ADD8E6;
    
    .card {
        height: 100%;
        width: 100%;
        position: relative;
    }

    .card .coralImage {
        height: 200px;
        width: 200px;
    }

    .card .coralText {
        width: calc(100% - 200px);
        position: absolute;
        display: inline-block;
        padding-left: 20px;
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
                <img className='coralImage' src={imageSrc} alt='coral' />
                <div className='coralText' id='scroll-custom-type'>
                    <h3 className='coralName'>{name}</h3>
                    <p className='coralDesc'>{desc}</p>
                </div>
            </div>
        </Wrapper>
    )
}
