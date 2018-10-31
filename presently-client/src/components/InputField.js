import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { TextInput } from 'react-native';


const Input = styled.TextInput.attrs({
	secureTextEntry: false,
	blurOnSubmit: true,
		})`
		padding: ${props => props.padding || '0%'};
		width: 100%;
		height: 40;
    color: ${props => props.inputColor || props.theme.BLACK};
    background: ${props=>props.theme.WHITE};
    border-radius: 3px;
`;



class InputField extends Component {

	state = {
		input: this.props.text
	}

	handleInput = (text) => {
		this.setState(
			{
			input: text
			}
		)}

	render() {
	const { password, action } = this.props;
		return (
			<Input
				secureTextEntry={this.props.password}
				placeholder={this.props.text}
			onChangeText={this.props.action}
				onMouseEnter={() => this.input.base.focus()}
			/>

		);
	}
}

export default withTheme(InputField);
