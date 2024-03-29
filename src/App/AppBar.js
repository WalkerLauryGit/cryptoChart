import styled, { css } from "styled-components"

const Logo = styled.div`
    font-size: 1.5em;

`
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0 0 60px #03ff03;
    `}
`
function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const Bar = styled.div`
display: grid;
margin-bottom: 40px;
grid-template-columns: 180px auto 100px 100px;
`
function ControlButton({ name, active }) {
    return (<ControlButtonElem active={active}>
        {toProperCase(name)}
    </ControlButtonElem>)
}

export default function AppBar() {
    return (
        <Bar>
            <Logo>CryptoDash</Logo>
            <div></div>
            <ControlButton active name='dashboard' />
            <ControlButton name='settings' />
        </Bar>
    )
}