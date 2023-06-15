import PropTypes from 'prop-types';
import FriendListItem from './path/FriendListItem';

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li key={friend.id} className="item">
                <FriendListItem
                    avatar = {friend.avatar}
                    name = {friend.name}
                    isOnline = {friend.isOnline}
                />
                </li>
            ))}
        </ul>
    )
};

FriendList.protoType = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}

export default FriendList;