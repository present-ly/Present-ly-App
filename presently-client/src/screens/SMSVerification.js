import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button, InputField, PopModal } from '../components';

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
	render()	{
		return (
			<ContainerView>
				<LogoView source={require('../../assets/images/presently-logo.png')}/>
				<TitleText>
				SMS Verification
				</TitleText>
				<InputFieldContainer>
					<InputField text="+(999)999-999"/>
				</InputFieldContainer>
				<ButtonContainer>

			{/*

			TODO: Change State here

			*/}

					<Button onPress={() => this.props.navigation.navigate('UInfo')} text="Submit"/>
				</ButtonContainer>
				<PopModal />
			</ContainerView>
		);
	}

};

const mapStateToProps = (state) => ({
	curState: state
})

/* TODO(rany): Add Actions here */

export default connect(mapStateToProps, {
})(RegisterScreen)
