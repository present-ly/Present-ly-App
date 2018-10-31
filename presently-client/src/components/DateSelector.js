import React, { Fragment, Component} from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import DatePicker from 'react-native-datepicker'
import presentlyColors from '../utils/constants'

const format = "MM/DD/YYYY"
const minDate = "01/01/1990"
const currentDate = new Date().toLocaleDateString()

class BirthdaySelector extends Component {
	constructor(props) {
		super(props)
		this.state = {
			date: currentDate,
			format: format,
			minDate: minDate,
			currentDate: currentDate
		}

		this.handleChange = this.handleChange.bind(this)


	}

	handleChange(date){
		console.log("this.props.action: ", this.props.action)
		this.setState({date: date})
		this.props.action(date)
	}
	render() {
		const {action} = this.state;
		return (
			<DatePicker
				style={{
					width: '100%'}}
				date={this.state.date}
				mode="date"
				placeholder="Birthday"
				format="MM/DD/YYYY"
				minDate="01/01/1990"
				maxDate="01/01/9999"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				customStyles={{
					dateIcon: {
						position: 'absolute',
						left: 0,
						top: 4,
						marginLeft: 0
					},
						dateInput: {
							marginLeft: 36
						}
				}}
			/*onDateChange={ (date) => {this.setState({date: date})}} */
			onDateChange={(date) => this.handleChange(date)}
			/>
		)
	}
}

export default withTheme(BirthdaySelector);
