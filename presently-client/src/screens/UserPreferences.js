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
	postPref, availPref,
	setRelationPage
	} from '../actions'


const ContainerView = styled.View`
	justifyContent: center;
	alignItems: center;
	flex: 1;
`;

const SubContainerView = styled.View`
	justifyContent: center;
	alignItems: center;
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


class PreferenceScreen extends Component {

	constructor(props){
		super(props);

		this.showModal = this.showModal.bind(this)
		this._doLater = this._doLater.bind(this)
		this._addRelationship = this._addRelationship.bind(this)

		this.state = {
			data: null
		}
	}

	componentWillMount(){

		this.props.availPref()
	}

	_doLater(){
		this.props.closeModal()
		this.props.navigation.navigate('Main')
	}

	_addRelationship(){
		this.props.setRelationPage()
		this.props.closeModal()
		this.props.navigation.navigate('UInfo')
	}

	showModal(){
			return(
				<SubContainerView>
					<ModalText>
					Add your friends/family!
					</ModalText>
					<ButtonContainer>
						<Button
							text={"Add More"}
							onPress={()=>(this._addRelationship())}
						/>
					</ButtonContainer>
					<ButtonContainer>
						<Button 
							text={"Do later"}
							onPress={()=>(
							this._doLater()
							)}
						/>
					</ButtonContainer>
				</SubContainerView>
			)
	}

	render() {

		const pref = this.props.curState.PreferenceStatus.preferences

		console.log("pref_screen: ", pref)

		return(
			<ContainerView>
				<InstructionsText>
					Swipe left for Dislike, right for like!
				</InstructionsText>

			{ pref ? <UserSwipeCards
					cards={ pref }
					yupAction={ this.props.changePref }
				/> : <ModalText>Wait</ModalText> 
			}


				<ButtonContainer>
					<Button
					onPress={() =>{
						this.props.openModal(
							true,
							'preferences')}}
							text={"Done"}/>
				</ButtonContainer>
			<PopUpModal
			viewComp={ this.showModal() }
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
	openModal, closeModal, getAvailPref, postPref,
	changePref, availPref, setRelationPage
})(PreferenceScreen)
