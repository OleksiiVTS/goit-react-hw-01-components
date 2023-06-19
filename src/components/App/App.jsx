import FriendList from '../FriendList/FriendList';
import Profile from '../Profile/Profile';
import StatisticsList from '../StatisticsList/StatisticsList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from 'path/user';
import data from 'path/data';
import friends from 'path/friends';
import transactions from 'path/transactions';
import { ParentComponent } from './App.styled';

const App = () => {
  return (
    <ParentComponent>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
      <StatisticsList title="Upload stats" datas={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </ParentComponent>
  );
};

export default App;
