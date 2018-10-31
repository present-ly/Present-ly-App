import React, { Component } from 'react';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

const ContainerView = styled.View`
	flex: 1;
`;

const MainText = styled.Text`
	fontSize: 12;
`;

export class ItemCarousel extends Component {
	_renderItemWithParallax ({item, index}, parallaxProps) {
		return (
			<ContainerView>
				<MainText></MainText>
			</ContainerView>
		)
	}
}
