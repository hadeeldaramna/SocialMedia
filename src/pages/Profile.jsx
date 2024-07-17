import React from 'react';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../style.css';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/cover.jpeg" alt="" />
              <img
                className="profileUserImg"
                src="assets/person/2.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Roba Khaldi</h4>
              <span className="profileInfoDesc">Hello I'm here</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
