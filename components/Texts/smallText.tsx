import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "./../colors";
import { TextProps } from "./type";

const StyledText = styled.Text`
  font-size: 13px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Regular;
`;

const SmallText: FunctionComponent<TextProps> = (props) =>  {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;
