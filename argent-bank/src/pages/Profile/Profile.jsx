import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, updateUserProfile } from "../../actions/userActions";
import isEmpty from "../../Utils/isEmpty";
import AccountItem from "../../components/Accountitem";

const Profile = () => {
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const tokenToUse = localStorage.getItem("token") || token;
    if (tokenToUse) dispatch(fetchUserInfo(tokenToUse));
  }, [token, dispatch]);

  useEffect(() => {
    setUserName(
      userInfo?.userName || `${userInfo?.firstName} ${userInfo?.lastName}`
    );
  }, [userInfo]);

  const handleEdit = () => setEditMode(true);
  const handleCancel = () => {
    setEditMode(false);
    setUserName(
      userInfo.userName || `${userInfo.firstName} ${userInfo.lastName}`
    );
  };
  const handleSave = async () => {
    if (userName !== userInfo.userName)
      await dispatch(updateUserProfile({ userName, token }));
    setEditMode(false);
  };

  return (
    <>
      <Helmet>
        <title>Argent Bank - Profile Page</title>
      </Helmet>

      {!isEmpty(userInfo) && (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {userInfo.userName ||
                `${userInfo.firstName} ${userInfo.lastName}`}
              !
            </h1>
            {editMode ? (
              <div>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button className="edit-button" onClick={handleSave}>
                  Save
                </button>
                <button className="edit-button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            ) : (
              <button className="edit-button" onClick={handleEdit}>
                Edit Name
              </button>
            )}
          </div>
          <h2 className="sr-only">Accounts</h2>
          {["Checking", "Savings", "Credit Card"].map((account, index) => (
            <AccountItem key={index} account={account} />
          ))}
        </main>
      )}
    </>
  );
};

export default Profile;
