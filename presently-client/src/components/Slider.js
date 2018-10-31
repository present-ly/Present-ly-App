import React, { Component } from 'react';
import styled from 'styled-components/native';
import {Text, Slider} from 'react-native'


const SliderCaption = styled.Text`
	font-size: 15;
`;

const ContainerView = styled.View`
	flex: 1;
	justifyContent: center;
	alignItems: stretch;
	marginLeft: 10;
	marginRight: 10;
`;

class GenderSlider extends Component {
	state = {
		value: 0.2
	};


	render() {
		const { value, action } = this.props;
		return (
			<ContainerView>
			<Slider
			value={this.props.value}
			onValueChange={this.props.action}/>
			</ContainerView>
		)
	}
}

export default GenderSlider;
