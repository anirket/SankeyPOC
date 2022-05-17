// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';

import AbstractSeries from 'react-vis/dist/plot/series/abstract-series';
const predefinedClassName = 'rv-xy-plot__series rv-xy-plot__series--rect';

class SVGDiagram extends AbstractSeries {



    render() {
        const {
            className,
            data,
            linePosAttr,
            lineSizeAttr,
            marginLeft,
            marginTop,
            style,
            valuePosAttr,
            valueSizeAttr
        } = this.props;

        if (!data) {
            return null;
        }
        const lineFunctor = this._getAttributeFunctor(linePosAttr);
        const line0Functor = this._getAttr0Functor(linePosAttr);
        const valueFunctor = this._getAttributeFunctor(valuePosAttr);
        const value0Functor = this._getAttr0Functor(valuePosAttr);
        const fillFunctor =
            this._getAttributeFunctor('fill') || this._getAttributeFunctor('color');
        const strokeFunctor =
            this._getAttributeFunctor('stroke') || this._getAttributeFunctor('color');
        const opacityFunctor = this._getAttributeFunctor('opacity');

        function getCombinedClassName(...classNames) {
            return classNames.filter(cn => cn && typeof cn === 'string').join(' ');
        }
        console.log(data)

        return (
            <g
                className={getCombinedClassName(predefinedClassName, className)}
                transform={`translate(${marginLeft},${marginTop})`}
            >
                {data.map((d, i) => {
                    const attrs = {
                        style: {
                            opacity: opacityFunctor && opacityFunctor(d),
                            stroke: strokeFunctor && strokeFunctor(d),
                            fill: "white",
                            ...style
                        },
                        [linePosAttr]: line0Functor(d),
                        [lineSizeAttr]: Math.abs(lineFunctor(d) - line0Functor(d)) + 100,
                        [valuePosAttr]: Math.min(value0Functor(d), valueFunctor(d)),
                        [valueSizeAttr]: Math.abs(-value0Functor(d) + valueFunctor(d)),
                        onClick: e => this._valueClickHandler(d, e),
                        onContextMenu: e => this._valueRightClickHandler(d, e),
                        onMouseOver: e => this._valueMouseOverHandler(d, e),
                        onMouseOut: e => this._valueMouseOutHandler(d, e)
                    };
                    return (
                        <svg>
                            <rect key={String(i)} {...attrs} x={i===0 ? attrs.x+25   : attrs.x+25} height={attrs.height+5} width={i===0 ? attrs.width+30 : attrs.width}  stroke-linejoin="round" stroke-width="2px" rx="10px" ry="10px"/>
                            <text x={i===0 ?attrs.x + 65 : attrs.x+50} y={attrs.y + 15} style={{ fill: "black" }}>{d.display}</text>
                            <text x={i===0 ?attrs.x + 85 : attrs.x+60} y={attrs.y + 35} style={{ fill: "black" }}>{d.percentage}</text>
                            {
                                i === 0 &&
                                (
                                    <>
                                        <foreignObject x={attrs.x +30} y={attrs.y + 65} width="160" height="160">
                                            <button type="button" style={{borderRadius:"45%", border:"none", padding:"5px"}}>
                                                Invested
                                            </button>
                                            <button type="button" style={{borderRadius:"45%", border:"none", padding:"5px",marginLeft:"10px"}}>
                                                Current
                                            </button>
                                        </foreignObject>
                                    </>

                                )
                            }
                        </svg>
                    );
                })}
            </g>
        );
    }
}


export default SVGDiagram;