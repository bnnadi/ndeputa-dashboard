import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import LogInStyleWrapper from './login.style';
import Log from '../../helpers/Log'

const { login } = authAction;

class LogIn extends Component {
    state = {
        redirectToReferrer: false,
        email: null,
        password: null
    }

    componentDidMount = () => {
      Log.info('welcome to Login', 'Login Component');
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.isLoggedIn !== nextProps.isLoggedIn && nextProps.isLoggedIn === true) {
            Log.info('isLoggedIn!', 'Login Component');
            this.setState({ redirectToReferrer: true });
        }
        Log.info(nextProps, 'Login Component props');
    }
    handleLogin = () => {
        const { login } = this.props;
        const {email, password } = this.state;
        Log.info(email, 'handleLogin');
        Log.info(password, 'handleLogin');
        if(email && password)
          login({email, password});
    }
    onChange = (e) => {
      if(e.target.name === 'email') {
        this.setState({email: e.target.value})
      }
      if(e.target.name === 'password') {
        this.setState({password: e.target.value})
      }
    }
    render() {
        const from = { pathname: '/dashboard' };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
          return <Redirect to={from} />;
        }
        return (
        <LogInStyleWrapper className="isoSignInPage">
            <div className="isoLoginContentWrapper">
            <div className="isoLoginContent">
                <div className="isoLogoWrapper">
                <Link to="/">
                    <IntlMessages id="page.signInTitle" />
                </Link>
                </div>

                <div className="isoSignInForm">
                <div className="isoInputWrapper">
                    <Input size="large" type="email" placeholder="Username" name="email" onBlur={this.onChange} />
                </div>

                <div className="isoInputWrapper">
                    <Input size="large" type="password" placeholder="Password" name="password" onBlur={this.onChange} />
                </div>

                <div className="isoInputWrapper isoLeftRightComponent">
                    <Button type="primary" onClick={this.handleLogin}>
                    <IntlMessages id="page.signInButton" />
                    </Button>
                </div>

                <p className="isoHelperText">
                    <IntlMessages id="page.signInPreview" />
                </p>

                <div className="isoCenterComponent isoHelperWrapper">
                    <Link to="/forgotpassword" className="isoForgotPass">
                    <IntlMessages id="page.signInForgotPass" />
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </LogInStyleWrapper>
        );
    }
    
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('token') !== null ? true : false,
  }),
  { login }
)(LogIn);