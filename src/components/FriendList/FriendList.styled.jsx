import styled from '@emotion/styled';

const isOnline = props => {
    return props.title==="true" ? "green" : "red"
};

export const FriendListUl = styled.ul`
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
`;

export const List = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    width: 200px;
    height: auto;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #494848;
    background-color: #d9edee;
`;

export const Text = styled.p`
    margin-right: auto;
    margin-left: auto;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: #000000;
`;

export const IsOnlineDot = styled.span`
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: ${isOnline};
`;