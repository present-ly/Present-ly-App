import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Text, Picker, TouchableHighlight, Alert } from 'react-native';
import { PopUpModal } from './PopUpModal';
import QuickPicker from 'quick-picker';


const ContainerView = styled.View`
	flex: 1;
	justifyContent: center;
	alignItems: center;
`;

const ButtonContainer = styled.TouchableHighlight`
	width: 130;
	height: 40;
	backgroundColor: ${props => props.theme.MAIN_GREEN};
	borderRadius: 5;
	justifyContent: center;
	alignItems: center;
`;

const ButtonText = styled.Text`
	color: ${props => props.theme.WHITE}
`;

class OldBottomModalPicker extends Component {
	state = {
		cart: this.props.data[0].header
	}

	mapsItems(data) {
		var res = data.map(item => {
			return (
				<Picker.Item
				label={item.header}
				value={item.value}/>
			)
			}
		)
		return (
			res
		)
	}

	render() {

		const { data } = this.props;
		return (
			<ContainerView>
				<Picker
					selectedValue={this.state.cart}
					onValueChange={
						(itemValue, itemPosition) =>
						{
							console.log("this.state.cart: ",
								this.state.cart)
						console.log("itemValue: ",
										itemValue)
						this.setState({
							cart: itemValue})
						}
				}>
			{this.mapsItems(this.props.data)}
				</Picker>
			</ContainerView>
		)
	}
}

class BottomModalPicker extends Component {
	state = {
		selectedCart: this.props.options[0]
	}

	_onPressText = () => {
		const { selectedCart } = this.state;
		QuickPicker.open({
			items: this.props.options,
			selectedValue: this.state.selectedCart,
			onValueChange: (
				selectedValueFromPicker
			) => {
				this.setState({
					selectedCart: selectedValueFromPicker
			})
			},
			onPressDone: () => {

			Alert.alert(`Ready to check out ${this.state.selectedCart}?`, 'Confirm?',
				[
					{text: 'Yes', onPress: ()=> console.log("Yes")},
					{text: 'No', onPress: ()=> console.log("No")}
				]
			)

			}

		})
	}

	render()
	{
		const { options } = this.props;
		return(
			<ContainerView>
				<TouchableHighlight onPress={this._onPressText}>
				<ButtonContainer onPress={this._onPressText}>
					<ButtonText> Check Out </ButtonText>
				</ButtonContainer>
				</TouchableHighlight>
			</ContainerView>
		)
	}
}

export default BottomModalPicker;
