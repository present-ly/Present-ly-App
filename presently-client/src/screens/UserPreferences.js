import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {
				UserSwipeCards, Button,
				PopUpModal
				} from '../components';

import { 
				 openModal, closeModal,
				 changePref, getAvailPref,
				 postPref
				} from '../actions'


const ContainerView = styled.View`
	justifyContent: center;
	alignItems: center;
	flex: 1;
`;

const SubContainerView = styled.View`
	flex: 1
`

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

const ModalText = styled.Text`
	fontSize: 32;
	textAlign: center;
	color: ${props => props.theme.WHITE};
`;

const ModalInfo = (
				<SubContainerView>
					<ModalText>
					'Add your friends/family!'
					</ModalText>
					<ButtonContainer>
						<Button text={"Add More"}/>
					</ButtonContainer>
					<ButtonContainer>
						<Button text={"Do later"}/>
					</ButtonContainer>
				</SubContainerView>
);

class PreferenceScreen extends Component {

	constructor(props){
		super(props);

		this.state = {
			data: null
		}

	}

	componentWillMount(){
		this.props.getAvailPref()
	}

	componentDidMount(){
		/*console.log("preferences: ", this.props.curState.PreferenceStatus.preferences)*/
	}

	

	render() {

		const pref = this.props.curState.PreferenceStatus.preferences

		const user = this.props.curState.AccountActions.email

		console.log("pref_screen: ", pref)

		return(
			<ContainerView>
				<InstructionsText>
					Swipe left for Dislike, right for like!
				</InstructionsText>
				<UserSwipeCards
					cards={ pref }
					user={ user }
					yupAction={ this.props.postPref }
				/>
				<ButtonContainer>
					<Button
					onPress={() =>{
						this.props.openModal(
							true,
							'preferences')}}
							text={"Done"}/>
				</ButtonContainer>
			<PopUpModal
			viewComp={ ModalInfo }
			isModalVisible={
				this.props.curState.ModalStatus.visiblePref
			}/>
			</ContainerView>
		);

	}
}

const mapStateToProps = (state) => ({
	curState: state
})

export default connect(mapStateToProps, {
	openModal, closeModal, getAvailPref, postPref
})(PreferenceScreen)
