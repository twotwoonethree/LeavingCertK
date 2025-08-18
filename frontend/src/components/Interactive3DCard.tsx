import React from "react";
import "./Interactive3DCard.css";

export interface Interactive3DCardProps {
  width?: number | string;   // e.g. 190 or "190px"
  height?: number | string;  // e.g. 254 or "254px"
  promptText?: string;
  titleTop?: string;
  titleBottom?: string;
  subtitleLeft?: string;
  subtitleRightHighlight?: string;
  className?: string;
}

const Interactive3DCard: React.FC<Interactive3DCardProps> = ({
  width,
  height,
  promptText = "HOVER ME",
  titleTop = "CYBER",
  titleBottom = "CARD",
  subtitleLeft = "INTERACTIVE",
  subtitleRightHighlight = "3D EFFECT",
  className = "",
}) => {
  const containerStyle: React.CSSProperties = {};
  if (width !== undefined) containerStyle.width = typeof width === "number" ? `${width}px` : width;
  if (height !== undefined) containerStyle.height = typeof height === "number" ? `${height}px` : height;

  return (
    <div className={`interactive3dcard-container noselect ${className}`} style={containerStyle}>
      <div className="interactive3dcard-canvas">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className={`tracker tr-${i + 1}`} />
        ))}

        <div className="card">
          <div className="card-content">
            <div className="card-glare"></div>

            <div className="cyber-lines">
              <span></span><span></span><span></span><span></span>
            </div>

            <p className="prompt">{promptText}</p>

            <div className="title">
              {titleTop}<br />{titleBottom}
            </div>

            <div className="glowing-elements">
              <div className="glow-1"></div>
              <div className="glow-2"></div>
              <div className="glow-3"></div>
            </div>

            <div className="subtitle">
              <span>{subtitleLeft}</span>
              <span className="highlight">{subtitleRightHighlight}</span>
            </div>

            <div className="card-particles">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </div>

            <div className="corner-elements">
              <span></span><span></span><span></span><span></span>
            </div>

            <div className="scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DCard;