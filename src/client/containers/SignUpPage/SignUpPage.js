import React from 'react';
import SignUp from '../../components/SignUp.js';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../redux/actions/userSignupRequest';

class SignUpPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="block">
        <SignUp userSignupRequest={userSignupRequest}></SignUp>
      </div>
  );
}
}

SignUpPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};


export default connect((state) => { return {}; }, { userSignupRequest })(SignUpPage);
