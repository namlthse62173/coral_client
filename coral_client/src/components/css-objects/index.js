import styled from "styled-components"
import topBg from '../../share/background/top-background.jpg'
import bottomBg from '../../share/background/bottom-background.jpg'

export const globalBlue = '#4169E1'
export const btnCss = {
    height: '100%', 
    textAlign: 'center', 
    border: 'none', 
    backgroundColor: globalBlue, 
    color: 'white',
    borderRadius: '0'
}
export const HomeWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 100vw;
`
export const HomeTop = styled.div`
    background-image: url(${topBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const HomeNav = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 30px;
    background-color: #483D8B;

    .flexStart {
        display: flex;
        align-items: center;
    }
    .flexEnd {
        display: flex;
        align-items: center;
    }
`
export const HomeSearchText = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
`
export const HomeBottom = styled.div`
    background-image: url(${bottomBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
`