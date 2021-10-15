import styled from '@emotion/styled'

export const Button = styled.button`
border: none;
text-decoration: none;
text-transform: uppercase;
padding: 1.3rem 2rem;
font-size: ${({theme}) => theme.font.size.small};
background: ${props => (props.alt ? '$#FFFFFF' : '#E7816B')};
border-radius: 0.8rem;
color: ${props => (props.alt ? ' #1D1C1E' : '#FFFFFF')};
font-weight: 500;
cursor:pointer;

&:hover{
    background: ${({theme}) => theme.colors.secondary.peach};
    color: ${({theme}) => theme.colors.primary.white};
}
`