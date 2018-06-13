import { connect } from 'react-redux'
import LoginComponent from '../components/Login'
import { loginActions } from '../actions'

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  return {
    loggingIn
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: (username, password) => {
    dispatch(loginActions(username, password))
  }
})

export const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
