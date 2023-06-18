import styled from '@emotion/styled';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

export const StatisticsSection = styled.section`
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e8f1f3;
    /* border: 2px solid #000000; */
    /* box-shadow: 1px 1px 5px #494848; */
`;

export const Title = styled.h1`
    color: #6c6f74;
    margin-bottom: 20px;
`;

export const ListStats = styled.ul`
    display: flex;
    flex-direction: row;
`;

export const ListStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 15px;
    border: 2px solid #000000;
    background-color: ${getRandomHexColor};
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    color: #ffffff;
    margin-bottom: 5px;
`;

export const Percent = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #ffffff;
`;