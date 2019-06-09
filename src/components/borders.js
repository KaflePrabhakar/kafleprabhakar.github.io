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
      <polyline
        fill="none"
        stroke="rgba(255,193,7,0.9)"
        vectorEffect="non-scaling-stroke"
        strokeWidth={stk}
        points={`${xLength},0, 0,0 0,${yLength}`}
      />
      <polyline
        fill="none"
        stroke="rgba(255,193,7,0.9)"
        vectorEffect="non-scaling-stroke"
        strokeWidth={stk}
        points={`${w - xLength},${h}, ${w},${h} ${w},${h - yLength}`}
      />
    </svg>
  )
}

export default BorderSVG
