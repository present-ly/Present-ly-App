import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button, InputField, GenderSlider, BirthdaySelector} from '../components';
import { birthdayChange, genderChange, nameChange, fetchToken,
					submitUserInfoForm, updateToken } from '../actions';


const ContainerView = styled.View`
	justifyContent: center;
	alignItems: center;
`;

const ButtonContainer = styled.View`
	top: 100;
	padding: 3%;
`;

const InputFieldContainer = styled.View`
	top: 50;	
	width: 100%;
	padding: 2%
`;

const SliderContainer = styled.View`
	width: 100%;
	top: 50;
	padding: 5%;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const SubtitleText = styled.Text`
	fontSize: 18;
	color: ${props => props.theme.WHITE};
`;

const MaleText = styled.Text`
	fontSize: 15;
	position: absolute;
	right: 10;
	color: ${props => props.theme.WHITE};
	top: 340;
`;

const FemaleText = styled.Text`
	fontSize: 15;
	position: absolute;
	left: 10;
	color: ${props => props.theme.WHITE};
	top: 340;
`;

const LogoView = styled.Image`
	padding: 5%;
	width: 150%;
	height: 200;
	transform: scale(0.5, 0.5);
`;


class RegisterScreen extends Component {

	constructor(props) {
		super(props);
		this.submitPreference = this.submitPreference.bind(this)
	}

	componentDidMount(){
		console.log("________we are mounting!!!: ")
	}

	submitPreference(){
		accntStatus = this.props.curState.AccountActions
		console.log("USERTOKEN: ", accntStatus.token)
		birthday = this.props.curState.UserInfo.birthday
		gender = this.props.curState.UserInfo.gender
		name = this.props.curState.UserInfo.name

		results = this.props.submitUserInfoForm(accntStatus, birthday, gender, name)

		console.log("results from form: ", results)
		this.props.navigation.navigate('UPref')
	}

	render()	{
		return (
			<ContainerView>
				<LogoView source={require('../../assets/images/presently-logo.png')}/>
				<TitleText>
					Profile Setup	
				</TitleText>
				<InputFieldContainer>
					<BirthdaySelector action={this.props.birthdayChange}/>
				</InputFieldContainer>

			<MaleText>
				Male
			</MaleText>
			<FemaleText>
				Female
			</FemaleText>

			<SliderContainer>
				<GenderSlider action={(value)=>{this.props.genderChange(value)}}/>
			</SliderContainer>
			<ButtonContainer>
			</ButtonContainer>
				<InputFieldContainer>
					<InputField action={(text)=>{this.props.nameChange(text)}}text="Name"/>
				</InputFieldContainer>
				<ButtonContainer>
			<Button onPress={() => {this.submitPreference()}} text="Confirm"/>
				</ButtonContainer>
			</ContainerView>
		);
		}
};

const mapStateToProps = (state) => ({
	curState: state
})

/* TODO(rany): Add Actions here */

export default connect(mapStateToProps, {
	birthdayChange, genderChange, nameChange, submitUserInfoForm, fetchToken, updateToken
})(RegisterScreen)
