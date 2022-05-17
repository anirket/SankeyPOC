import {linkHorizontal} from "react-vis/node_modules/d3-shape";

function horizontalSource(d) {
   if(d.index === 0)
    return [d.source.x1 + 130, d.y0];


    return [d.source.x1 + 100, d.y0];



}

function horizontalTarget(d) {
  return [d.target.x0+100, d.y1];
}

export default function() {
  return linkHorizontal()
      .source(horizontalSource)
      .target(horizontalTarget);
}