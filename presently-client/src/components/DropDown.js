import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Button, InputField, BirthdaySelector} from '../components';
import { DropDownMenu } from '@shoutem/ui';

const ContainerView = styled.View`
	flex: 1,
	justifyContent: center,
	alignItems: center
`;

const selectedGender = ''

class GenderDropDown extends Component {

	constructor(props){
		super(props);
		this.state = {
			selectedGender: '',
			genders: ["Male", "Female", "Other"]
		}
	}

	render(){
		const selectedGender = this.state.selectedGender || this.state.genders[2]

		return (
			<ContainerView>
				<DropDownMenu
			styleName="horizontal"
			options={this.state.genders}
			selectedOptions={this.selectedGender ? this.selectedGender : this.state.selectedGender[2]}
			onOptionSelected={(gender) => this.setState({selectedGender: gender})}
			/>
			</ContainerView>
		);
	}
}

export default GenderDropDown;
