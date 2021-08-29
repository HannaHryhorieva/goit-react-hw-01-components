import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={s.status} style={{ backgroundColor: 'green' }}></span>
      ) : (
        <span className={s.status} style={{ backgroundColor: 'red' }}></span>
      )}

      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
