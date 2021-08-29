import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      {isOnline ? (
        <span className="status" style={{ backgroundColor: 'green' }}></span>
      ) : (
        <span className="status" style={{ backgroundColor: 'red' }}></span>
      )}

      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
