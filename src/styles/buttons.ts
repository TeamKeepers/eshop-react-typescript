import styled from "@emotion/styled";

export const CatchyBtn = styled.button`
    width: 150px;
    height: 50px;
    font-size: 0.8em;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.colors.catchy};
    color: white;
    border: none;
    border-radius: ${props => props.theme.radius};
    cursor: ${props => props.disabled ? '' : 'pointer'};
    outline: none;
    :hover {
       background: ${props => props.disabled ? '' : props.theme.colors.main};
    }
    :active {
      transform: translateY(4px);
    }
`;

export const PrimaryBtn = styled.button`
    width: auto;
    height: 35px;
    margin-top: 20px;
    font-size: 0.6em;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.colors.success};
    color: white;
    border: none;
    border-radius: ${props => props.theme.radius};
    cursor: ${props => props.disabled ? '' : 'pointer'};
    outline: none;
    :hover {
       background: ${props => props.disabled ? '' : props.theme.colors.main};
    }
    :active {
      transform: translateY(4px);
    }
`;

export const LoadBtn = styled.button`
    width:90px;
    height: 40px;
    margin-top: 20px;
    font-size: 0.5em;
    background: ${props => props.disabled ? 'lightgrey' : props.theme.colors.fade};
    color: #fff;
    border: none;
    border-radius: ${props => props.theme.radius};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    outline: none;
    :hover {
       background: ${props => props.disabled ? '' : props.theme.colors.main};
    }
    :active {
      transform: translateY(4px);
    }
`;

export const GoBackBtn = styled.button`
    color: ${props => props.theme.colors.fade};
    font-size: 0.5em;
    background-color: #fff;
    border: none;
    width: auto;
    max-height: 20px;
    margin: 30px 0;
    display: inline-flex;
    align-items: center; 
    cursor: ${props => props.disabled ? '' : 'pointer'};
`;