import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store/index'

class Header extends Component {
    render() {
        const { login, handleLogin} = this.props;
        return (
            <div>
                <Link to='/'>首页</Link>
                <br/>
                {
                    login ? <Fragment>
                        <Link to='/login'>翻译列表</Link>
                        <br/>
                        <Link to='/login'>退出</Link>
                    </Fragment> : <div onClick={handleLogin}>登录</div>
                }
            </div>
        )        
    }
}

const mapState = (state) => ({
    login: state.header.login
})

const mapDispatch = (dispatch) => {
    return {
        handleLogin() {
            dispatch(actions.login())
        }
    }
}

export defaultconnect(mapState, mapDispatch)(Header)
