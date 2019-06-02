import React from 'react';
import { Link } from '@reach/router';
import { firebase } from './firebase';
import useCollection from './utils/useCollection';

function Nav({ user }) {
  const channels = useCollection('channels');

  return (
    <div className="Nav">
      <div className="User">
        <img className="UserImage" alt="user avatar" src={user.photoUrl} />
        <div>
          <div>{user.displayName}</div>
          <div>
            <button
              onClick={() => {
                firebase.auth().signOut();
              }}
              className="text-button"
            >
              log out
            </button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <Link key={channel.id} to={`/channel/${channel.id}`}>
            # {channel.id}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Nav;
