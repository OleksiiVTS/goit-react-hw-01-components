import PropTypes from 'prop-types';
import { Text, IsOnlineDot } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <IsOnlineDot title={isOnline.toString()}></IsOnlineDot>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <Text>{name}</Text>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
