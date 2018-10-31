import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button, InputField } from '../components';
import { register, changeEmailReg, changePasswordReg, changeConPasswordReg, getToken, storeToken} from '../actions'

const ContainerView = styled.View`
	flex: 1;
	justifyContent: center;
	alignItems: center;
	background-color: ${props => props.theme.MAIN_GREEN};
`;

const ButtonContainer = styled.View`
	top: 100;
	padding: 3%;
	margin-bottom: 40%;
`;

const InputFieldContainer = styled.View`
	width: 100%;
	padding: 2%
`;

const LogoView = styled.Image`
	padding: 5%;
	width: 150%;
	height: 200;
	transform: scale(0.5, 0.5);
`;


const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;


class RegisterScreen extends Component {

	constructor(props){
		super(props);
		this.submitInfo = this.submitInfo.bind(this);
	}

	submitInfo(){
		const email = this.props.curState.TextInputs.emailReg
		const password = this.props.curState.TextInputs.passReg
		response = this.props.register(email, password);

		if (response != 'reg_fail') {
						console.log("password: ", password)

		this.props.navigation.navigate('Verification');
		}
	
	}

	render()	{
		return (
			<ContainerView>
				<LogoView source={require('../../assets/images/presently-logo.png')}/>
				<TitleText>
				Register
				</TitleText>
				<InputFieldContainer>
					<InputField text="Email" ref="email" action={(text)=>{this.props.changeEmailReg(text)}}/>
				</InputFieldContainer>
				<InputFieldContainer>
					<InputField password={true} text="Password" ref="password" action={(text)=>{this.props.changePasswordReg(text)}}/>
				</InputFieldContainer>
				<InputFieldContainer>
					<InputField password={true} text="Reconfirm Password" ref="re-password" action={(text)=>{this.props.changeConPasswordReg(text)}}/>
				</InputFieldContainer>
				<ButtonContainer>

			<Button text="Submit" onPress={() => {this.submitInfo()}}/>
				</ButtonContainer>
			</ContainerView>
		);
	}

};

const mapStateToProps = (state) => ({
	curState: state
})

export default connect(mapStateToProps, {
	changeEmailReg, register, changePasswordReg, changeConPasswordReg, storeToken
})(RegisterScreen)
