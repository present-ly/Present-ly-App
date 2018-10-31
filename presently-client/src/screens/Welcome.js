import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { FormattedWrapper, FormattedMessage } from 'react-native-globalize';
import { Button, InputField } from '../components';
import messages from '../Messages';
import { postRegister, getToken, changePasswordLogin, changeEmailLogin,
fetchToken, updateToken } from '../actions'


const ContainerView = styled.View`
	flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const TryAgain = styled.Text`
	fontSize: 30;
	display: ${props => props.block};
`;

const ButtonContainer = styled.View`
  top: 100;
	padding: 3%;
`;


const InputFieldContainer = styled.View`
	top: 20;	
	width: 100%;
	padding: 2%
`;


const LogoView = styled.Image`
	padding: 5%;
	width: 150%;
	height: 200;
	transform: scale(0.55, 0.55);
`;

class WelcomeScreen extends Component {

	constructor(props) {
		super(props);
		this.submitInfo = this.submitInfo.bind(this);
	}

	submitInfo() {

		console.log("Submitting Info!")

		const email = this.props.curState.TextInputs.emailLogin
		const password = this.props.curState.TextInputs.passLogin

		// this.props.fetchToken(email, password)
		this.props.navigation.navigate('Main')
	}

	render() {
    return (
			<FormattedWrapper locale={this.props.curState.Language.language} messages={messages}>
      <ContainerView>
			<LogoView source={require('../../assets/images/presently-logo.png')}/>

			<InputFieldContainer>
				<InputField text="Email" action={(text)=>{this.props.changeEmailLogin(text)}}/>
			</InputFieldContainer>

			<InputFieldContainer>
				<InputField text="Password" password={true} action={(text)=>{this.props.changePasswordLogin(text)}}/>
			</InputFieldContainer>

			<TryAgain block={this.props.curState.AccountActions.response}>
			Try Again!
			</TryAgain>

        <ButtonContainer>
	    <Button text="Login" onPress={()=> {this.submitInfo()}}/>
        </ButtonContainer>
			<ButtonContainer>
          <Button text="Register" onPress={() => this.props.navigation.navigate('Register')} />
        </ButtonContainer>


      </ContainerView>
			</FormattedWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
	curState:state
});

export default connect(mapStateToProps, {
	getToken, changePasswordLogin, changeEmailLogin, fetchToken, updateToken
})(WelcomeScreen);
