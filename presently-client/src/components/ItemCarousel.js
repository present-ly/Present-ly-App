import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ENTRIES1, ENTRIES2 } from '../utils/statics';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import styles, {colors} from '../styles/index.style';
import SliderEntry from './SliderEntry'
import { sliderWidth, itemWidth} from '../styles/SliderEntry.style'

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const ContainerView = styled.View`
	flex: 1;
`;

const MainText = styled.Text`
	fontSize: 12;
`;

export class ItemCarousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: SLIDER_1_FIRST_ITEM
		}
	}
	_renderItemWithParallax ({item, index}, parallaxProps) {
		return (
			<SliderEntry
				data={item}
				even={(index + 1) % 2 === 0}
				parallax={true}
				parallaxProps={parallaxProps}
			/>
		)
	}

	render()
	{
		return (
			            <View style={styles.exampleContainer}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={this.state.activeSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={colors.black}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
</View>
		);
	}
}

export default ItemCarousel;
