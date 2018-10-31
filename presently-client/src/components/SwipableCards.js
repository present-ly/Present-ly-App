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
				{this.props.text}
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
				{text: 'Sports'},
				{text: 'Food'},
				{text: 'Cooking'}
			]

		}
	}

	handleYup(card) {
		console.log('Yup')
	}

	handleNope(card){
		console.log('Nope')
	}

	handleMaybe(card){
		console.log('Maybe')
	}

	render() {
		return(
			<SwipeCards
				cards={this.state.cards}
				renderCard={(cardData) => <Card {...cardData} />}
				renderNoMoreCards={() => <NoMoreCards />}
				showYup={true}
				showNope={true}
				showMaybe={true}
				handleYup={this.handleYup}
				handleNope={this.handleNope}
				handleMaybe={this.handleMaybe}
				hasMaybeAction
			/>
		);
	}
}
