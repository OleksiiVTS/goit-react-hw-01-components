import PropTypes from 'prop-types';
import Statistics from './path/Statistics';


function StatisticsList({ title, datas }) {
    return (
    <section className="statistics">
        <h2 className="title">{title||""}</h2>
        <ul>
            {datas.map(data => (
                <li key={data.id}>
                    <Statistics
                        label = {data.label}
                        percentage = {data.percentage}
                    />
                </li>
            ))}
        </ul>
    </section>
    )           
};

StatisticsList.protoType = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}

export default StatisticsList;