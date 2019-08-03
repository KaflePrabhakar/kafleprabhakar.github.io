import React from "react"

const BorderSVG = ({ contentWidth, contentHeight }) => {
  const w = contentWidth
  const h = contentHeight
  var stk = 20
  var xLength = w / 10
  var yLength = h / 10
  if (w <= 220 || h <= 220) {
    stk = 10
    if (w <= 150) xLength = yLength = w / 3
    if (h <= 150) xLength = yLength = h / 3
  }

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={w + "px"}
      height={h + "px"}
      viewBox={`0 0 ${w} ${h}`}
    >
      <defs>
        <filter id="shadow-top" x="0" y="0" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation={xLength / 10} />
          <feOffset dx={xLength / 10} dy={yLength / 10} />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polyline
        fill="none"
        stroke="rgba(255,193,7,0.9)"
        vectorEffect="non-scaling-stroke"
        strokeWidth={stk}
        points={`${xLength},0, 0,0 0,${yLength}`}
        filter="url(#shadow-top)"
      />
      <polyline
        fill="none"
        stroke="rgba(255,193,7,0.9)"
        vectorEffect="non-scaling-stroke"
        strokeWidth={stk}
        points={`${w - xLength},${h}, ${w - xLength},${h - yLength} ${w},${h -
          yLength}`}
        filter="url(#shadow-top)"
        transform={`scale(-1 -1) translate(${-2 * w + xLength} ${-2 * h +
          yLength})`}
      />
    </svg>
  )
}

export default BorderSVG
