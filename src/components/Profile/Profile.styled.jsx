import styled from '@emotion/styled';

const borderRadius = props => {
    switch (props.position) {
        case "first":
            return '0 0 0 25px';
        case "last":
            return '0 0 25px 0';
        default:
            return '0';
    }   
};

const fontWeightText = props => {
    return props.primary ? 700 : 400
};

export const Profile = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    border-radius: 25px;
    background-color: #e8f1f3;
    /* border: 2px solid #000000; */
    box-shadow: 1px 1px 5px #494848;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DescriptionImg = styled.img`
    margin-bottom: 20px;
    width: calc(100% / 1.2);
    border-radius: 50%;
    border: 2px solid #000000;
`;

export const Text = styled.p`
    font-weight: ${fontWeightText};
    font-size: 20px;
    line-height: 1.2;
    color: #000000;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
    border-radius: 0 0 25px 25px;
    
    background-color: #c6d6dd;
`;

export const StatsLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    width: 100%;
    height: auto;

    border: 2px solid #000000;
    border-radius: ${borderRadius};

    &:hover {
        background-color: #6d9aa5 ;
      }    
`;