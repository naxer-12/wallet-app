import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "./../colors";
import RegularText from "./../Texts/regularText";
import { GestureResponderEvent,StyleProp,TextStyle,ViewStyle } from "react-native";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

interface ButtonProps{
    btnStyles?: StyleProp<ViewStyle>
}


const RegularButton: FunctionComponent = () => {
  return (
    <ButtonView>
      <RegularText>Button</RegularText>
    </ButtonView>
  );
};
export default RegularButton;
