import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { UserSwipeCards, Button, PopUpModal } from '../components';

import { openModal, closeModal } from '../actions'


const ContainerView = styled.View`
	justifyContent: center;
	alignItems: center;
	flex: 1;
`;

const ButtonContainer = styled.View`
	padding: 3%;
`;

const InstructionsText = styled.Text`
	padding: 5%;
	fontSize: 32;
	color: ${props => props.theme.WHITE};
	textAlign: center;
	top: 10%;
`;

class PreferenceScreen extends Component {
	render() {

		return(
			<ContainerView>
				<InstructionsText>
					Swipe left for Dislike, right for like!
				</InstructionsText>
				<UserSwipeCards/>
				<ButtonContainer>
					<Button onPress={() =>{this.props.openModal(true, 'preferences')}} text={"Done"}/>
				</ButtonContainer>

			<PopUpModal isModalVisible={this.props.curState.ModalStatus.visiblePref}/>
			</ContainerView>
		);

	}
}

const mapStateToProps = (state) => ({
	curState: state
})

export default connect(mapStateToProps, {
	openModal, closeModal
})(PreferenceScreen)
