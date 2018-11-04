import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import SwipeCards from 'react-native-swipe-cards';

const CardView = styled.View`
	justifyContent: center;
	alignItems: center;
	width: 300;
	height:300;
`;

const CardText = styled.Text`
	fontSize: 32;
`;

const NoCardText = styled.Text`
	fontSize: 50;
`;

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<CardView>
				<CardText>
				{this.props.name}
				</CardText>
			</CardView>
		)
	}
}

class NoMoreCards extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<NoCardText>
				No more cards
			</NoCardText>
		)
	}
}

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			cards: [
				{name: 'Sports'},
				{name: 'Food'},
				{name: 'Cooking'},
				{name: 'Waiting for more cards'}
			]
		}
	}

	handleYup(card) {
		console.log('Yup')
		this.props.yupAction(card.name,
												 card.description,
												 this.props.user)
	}

	handleNope(card){
		console.log('Nope')
	}

	handleMaybe(card){
		console.log('Maybe')
	}

	render() {
		const { cards, yupAction, user} = this.props;
		console.log("cards: ", cards)
		console.log("typeof cards: ", typeof cards)
		return(
			<SwipeCards
				cards={ this.props.cards }
				renderCard={(cardData) => <Card {...cardData} />}
				renderNoMoreCards={() => <NoMoreCards />}
				showYup={true}
				showNope={true}
				showMaybe={true}
				handleYup={this.props.yupAction}
				handleNope={this.handleNope}
				handleMaybe={this.handleMaybe}
				hasMaybeAction
			/>
		);
	}
}
