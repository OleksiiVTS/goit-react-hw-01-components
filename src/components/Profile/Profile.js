import PropTypes from 'prop-types';
import {
  Box,
  Stats,
  StatsLi,
  Description,
  DescriptionImg,
  Text,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Box>
      <Description>
        <DescriptionImg src={avatar} alt={username} className="avatar" />
        <Text primary>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <StatsLi position="first">
          <Text>Followers</Text>
          <Text primary>{followers}</Text>
        </StatsLi>
        <StatsLi>
          <Text>Views</Text>
          <Text primary>{views}</Text>
        </StatsLi>
        <StatsLi position="last">
          <Text>Likes</Text>
          <Text primary>{likes}</Text>
        </StatsLi>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
