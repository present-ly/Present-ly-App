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
  flex: 1;
`;

const ButtonContainer = styled.View`
  margin: 3%
	padding: 3%;
`;

const InputFieldContainer = styled.View`
	width: 100%;
	padding: 2%
`;

const SliderContainer = styled.View`
	width: 100%;
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
	width: 150%;
	height: 200;
	transform: scale(0.5, 0.5);
`;


class UserInfoScreen extends Component {

	constructor(props) {
		super(props);
		this.submitPreference = this.submitPreference.bind(this)

	submitPreference(){
		accntStatus = this.props.curState.AccountActions
		console.log("USERTOKEN: ", accntStatus.token)
		birthday = this.props.curState.UserInfo.birthday
		gender = this.props.curState.UserInfo.gender
		name = this.props.curState.UserInfo.name
    relationship = this.props.curState.

		results = this.props.submitUserInfoForm(accntStatus, birthday, gender, name)

		console.log("results from form: ", results)
		this.props.navigation.navigate('UPref')
	}

  _addAnother(){
    console.log("yes!")
  }

	render()	{

    relationPage = this.props.curState.RelationshipStatus.relationShow

		return(
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
					<InputField action={(text)=>{this.props.nameChange(text)}} text="Name"/>
				</InputFieldContainer>

      { relationPage ? 
        <InputFieldContainer>
          <InputField action={(text)=>{this.props.nameChange(text)}} text="Relationship i.e. Friend, Dad ..."/>
        </InputFieldContainer> : null}

				<ButtonContainer>
			<Button onPress={() => {this.submitPreference()}} text="Done"/>
				</ButtonContainer>

			</ContainerView>
		);
		}
};

const mapStateToProps = (state) => ({
	curState: state
})


export default connect(mapStateToProps, {
	birthdayChange, genderChange, nameChange, submitUserInfoForm, fetchToken, updateToken
})(UserInfoScreen)
