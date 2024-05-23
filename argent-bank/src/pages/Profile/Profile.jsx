import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../../actions/userActions";
import isEmpty from "../../Utils/isEmpty";

const Profile = () => {
  const dispatch = useDispatch();
  const { token, userInfo } = useSelector(state => state.user);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const tokenToUse = storedToken || token;
    tokenToUse && dispatch(fetchUserInfo(tokenToUse));
  }, [token, dispatch]);

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
            {userInfo.firstName} {userInfo.lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      )}
    </>
  );
};

export default Profile;
