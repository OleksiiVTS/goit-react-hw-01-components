import PropTypes from 'prop-types';
import Statistics from './Statistics';
import {StatisticsSection, Title, ListStats, ListStatsItem} from './StatisticsList.styled';

function StatisticsList({ title, datas }) {
    return (
    <StatisticsSection>
        <Title>{title||""}</Title>
        <ListStats>
            {datas.map(data => (
                <ListStatsItem key={data.id}>
                    <Statistics
                        label = {data.label}
                        percentage = {data.percentage}
                    />
                </ListStatsItem>
            ))}
        </ListStats>
    </StatisticsSection>
    )           
};

StatisticsList.protoType = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}

export default StatisticsList;