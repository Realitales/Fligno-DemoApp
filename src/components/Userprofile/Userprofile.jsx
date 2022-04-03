import React, { useRef } from "react";
import StyledUserprofile from "./StyledUserprofile";
import { useAuth, handleEdit } from "../../firebase";
import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";

export default function Userprofile() {
  const currentUserFirebase = useAuth();
  const [currentUserInfo, setCurrentUserInfo] = React.useState([
    { address: "Loading...", id: "initial" },
  ]);

  const [settingState, setSettingState] = React.useState(false);

  let currentUserAddress, currentUserId;

  const currentUser = currentUserFirebase?.email.replace("@gamearea.com", "");

  const newAddressRef = useRef("initial");

  React.useEffect(
    () =>
      onSnapshot(collection(db, "users-info"), (snapshot) =>
        setCurrentUserInfo(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  currentUserInfo.forEach((infos) => {
    if (infos.username === currentUser) {
      currentUserAddress = infos.address;
      currentUserId = infos.id;
    }
  });

  return (
    <motion.div
      initial={{ y: 0, scale: 0 }}
      animate={{ y: 310, scale: 1 }}
      transition={{ type: "spring", duration: 0.7, stiffness: 75 }}
    >
      <StyledUserprofile>
        <div className="userprofile-content">
          <img id="user-profile-img" src="./icons/user.png" />
          <h1>User profile Page</h1>
          <p id="username">
            {currentUser === undefined ? " Loading..." : currentUser}
          </p>
          <div className="userprofile-basicInfo">
            <button
              id="setting-icon"
              onClick={() => {
                setSettingState((prev) => !prev);
              }}
            >
              <img src="./icons/setting.png" alt="" />
            </button>
            <h1 className="details textheading">Address:</h1>
            <input
              style={
                settingState === true
                  ? { opacity: "1" }
                  : { opacity: "0", margin: "0" }
              }
              id="userAddress-input"
              disabled={settingState === false ? true : false}
              type="text"
              ref={newAddressRef}
            ></input>

            {settingState === false ? (
              <p id="user-address">
                {currentUserAddress === ""
                  ? "Please edit your address."
                  : currentUserAddress}
              </p>
            ) : (
              ""
            )}

            <h1 className="details textheading">Purchase History: </h1>
          </div>
          {settingState === true ? (
            <div className="settings-btn">
              <button
                data="save"
                onClick={() =>
                  handleEdit(
                    currentUserId,
                    currentUser,
                    newAddressRef.current.value
                  )
                }
              >
                Save Changes
              </button>
              <button data="exit" onClick={() => setSettingState(false)}>
                Exit
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </StyledUserprofile>
    </motion.div>
  );
}
