import React, { Component } from 'react';
import styled from 'styled-components/native';
import { RelationTable, FlexibleRelationTable, BottomModalPicker,
		} from '../components';
import { ScrollView } from 'react-native'
import { openModal,
					closeModal } from '../actions'
import { connect } from 'react-redux';


const ContainerView = styled.View`
  flex: 1;
	backgroundColor: ${props => props.theme.ISABELLINE};
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;


class ProfileScreen extends Component {

	_getHeaders(cells) {

			console.log("cells: ", cells);
			return cells.map((cell) => cell.header)
		}

	ComponentDidMount(){
		console.log("Profile Screen Mounts!");
	}

  render() {
		const { cells } = this.props;
    return (
			<ContainerView>
				<ScrollView>
					<FlexibleRelationTable cells={this.props.curState.CartStatus.cart}/>
					<BottomModalPicker options={this._getHeaders(this.props.curState.CartStatus.cart)}/>
				</ScrollView>
			</ContainerView>
    );
  }
}

const mapStateToProps = (state) => ({
	curState: state
});

export default connect(
	mapStateToProps, {}
)(ProfileScreen);
