import React, { useState } from 'react';
import classNames from 'classnames';
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";


import classes from './index.module.scss';

enum FriendStatus {
  OFFLINE = 'Offline',
  ONLINE = 'Online',
  PLAYING = 'Playing',
  AWAY = 'Away',
}

const FriendListItem: React.FC<{ name: string, status: FriendStatus }> = ({ name, status }) => {
  const statusClasses = classNames(classes.friendStatus, {
    [classes.offline]: status === FriendStatus.OFFLINE,
    [classes.online]: status === FriendStatus.ONLINE,
    [classes.playing]: status === FriendStatus.PLAYING,
    [classes.away]: status === FriendStatus.AWAY
  });

  return <div className={classes.friendListItem}>
    <div className={classes.friendListItemAvatar}>
      <div className={statusClasses} />
    </div>
    <div className={classes.friendListItemData}>
      <span className={classes.friendListItemName}>{name}</span>
      <span className={statusClasses}>{status}</span>
    </div>
  </div>
}

const FriendList = () => {
  const [showFriendList, setShowFriendList] = useState(false);

  return <div className={classes.friendList}>
    <div className={classes.friendListOpener} onClick={() => setShowFriendList(!showFriendList)}>
      {showFriendList ? <BsCaretDownFill size={12} /> : <BsCaretRightFill size={12} />}
      <span className={classes.friendListOpenerText}>GENERAL (2/20)</span>
    </div>
    {showFriendList ? <>
      <FriendListItem name="sebastian" status={FriendStatus.PLAYING} />
      <FriendListItem name="George" status={FriendStatus.AWAY} />
      <FriendListItem name="Whose this" status={FriendStatus.OFFLINE} />
      <FriendListItem name="idk lets play" status={FriendStatus.ONLINE} />
    </>
      : null}
  </div>
}

export default FriendList;