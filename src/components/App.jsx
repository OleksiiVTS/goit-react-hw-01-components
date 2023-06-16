import PropTypes from 'prop-types';
import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile'
import StatisticsList from './StatisticsList/StatisticsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import User from 'path/user';
import Data from 'path/data';
import Friends from 'path/friends';
import Transactions from 'path/transactions';

const App = () => {
  return (
    <div>
        <Profile
          username={User.username}
          tag={User.tag}
          location={User.location}
          avatar={User.avatar}
          followers={User.stats.followers}
          views={User.stats.views}
          likes={User.stats.likes}
        />
        <StatisticsList 
          title="Upload stats"
          datas = {Data}
        />
        <FriendList friends = {Friends} />
        <TransactionHistory items={Transactions} />
    </div>
  );
};

App.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.node)
};

export default App;