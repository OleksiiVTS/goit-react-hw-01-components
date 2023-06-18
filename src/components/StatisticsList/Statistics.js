import PropTypes from 'prop-types';
import {Text, Percent} from './StatisticsList.styled';

const Statistics = ({
    label,
    percentage
}) => {
    return (
    <> 
        <Text>{label}</Text>
        <Percent>{percentage}%</Percent>
    </>
    )        
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;