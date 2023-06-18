import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {FriendListUl, List} from './FriendList.styled';

const FriendList = ({friends}) => {
    return (
        <FriendListUl className="friend-list">
            {friends.map(friend => (
                <List key={friend.id}>
                    <FriendListItem
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline = {friend.isOnline}
                    />
                </List> 
            ))}
        </FriendListUl>
    )
};

FriendList.protoType = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}

export default FriendList;