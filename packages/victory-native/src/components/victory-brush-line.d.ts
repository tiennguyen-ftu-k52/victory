import React from "react";
import { VictoryBrushLineProps } from "victory-brush-line-custom";

export interface VictoryNativeBrushLine extends VictoryBrushLineProps {
  onTouchStart?: Function;
  onTouchEnd?: Function;
}

export default class extends React.Component<VictoryNativeBrushLine, any> {}
