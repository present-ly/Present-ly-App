import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableHighlight`
  width: 130;
  height: 40;
  backgroundColor: ${props=> props.theme.WHITE};
  borderRadius: 5;
  justifyContent: center;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 20;
  color: ${props => props.theme.BLACK};
`;

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props;

    return (
      <ButtonContainer
        underlayColor={theme.MAIN_GREEN}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
}

export default withTheme(Button);
