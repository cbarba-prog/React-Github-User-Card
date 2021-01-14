import React from "react";

function Card({profile, followers}) {
    return(
        <>
        <div className = "card">
            <img src={profile.avatar_url} alt="profile" />
            <h1>{profile.login}</h1>
            <p>{profile.id}</p>
            <p>{profile.public_repos}</p>
        </div>
        <div className="followerCards">
            <div className="h2">
                <h2>Followers:</h2>
            </div>
            {followers.map((item) => {
      return (
        <div className="followerCard">
          <img src={item.avatar_url} alt="profile" />
          <h3>{item.login}</h3>
        </div>
      );
    })}
  </div>
</>
);
}

export default Card;    