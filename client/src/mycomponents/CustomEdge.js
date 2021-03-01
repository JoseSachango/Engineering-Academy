import React from 'react';
import { getBezierPath, getMarkerEnd, getSmoothStepPath } from 'react-flow-renderer';
export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) {
  const edgePath = getSmoothStepPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const streamNumber = 0
  
  console.log("This is the style from the custom edge compoonent: ",style)
  return (
    <>
      <path id={id} style={style} className="react-flow__edge-path" d={edgePath} markerEnd={markerEnd} />
      <text>
        <textPath href={`#${id}`} style={{ fontSize: '12px' }} startOffset="50%" textAnchor="middle">
          {/*Find a way to get unique id's everytime an edge is made */}
         
          
        </textPath>
      </text>
     
    </>
  );
}