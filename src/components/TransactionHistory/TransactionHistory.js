import PropTypes from 'prop-types';
import {
  AllTable,
  HeaderTable,
  HeaderBody,
  Line,
  Cell,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <AllTable className="transaction-history">
      <HeaderTable>
        <tr>
          <Cell>Type</Cell>
          <Cell>Amount</Cell>
          <Cell>Currency</Cell>
        </tr>
      </HeaderTable>

      <HeaderBody>
        {items.map(({ id, type, amount, currency }) => (
          <Line key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Line>
        ))}
      </HeaderBody>
    </AllTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
