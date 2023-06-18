import PropTypes from 'prop-types';
import {
    Profile, 
    Stats, 
    StatsLi, 
    Description, 
    DescriptionImg, 
    Text} from './Profile.styled';

const FriendList = ({
    username,
    tag,
    location,
    avatar,
    followers,
    views,
    likes
}) => {
    return (
        <Profile>
            <Description>
                <DescriptionImg
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <Text primary>{username}</Text>
                <Text>@{tag}</Text>
                <Text>{location}</Text>
            </Description>

        <Stats>
            <StatsLi position = "first">
                <Text>Followers</Text>
                <Text primary>{followers}</Text>
            </StatsLi>
            <StatsLi>
                <Text>Views</Text>
                <Text primary>{views}</Text>
            </StatsLi>
            <StatsLi position = "last">
                <Text>Likes</Text>
                <Text primary>{likes}</Text>
            </StatsLi>
        </Stats>
    </Profile>
    );
};

FriendList.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};

export default FriendList;