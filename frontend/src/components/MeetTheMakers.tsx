import React, { useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MakerCard3D from "./MakerCard3D";

// Maker images
import AlwinStephenImg from "../assets/AlwinStephen.jpg";
import DanielSmythImg from "../assets/DanielSmyth.jpg";
import KevinCollinsImg from "../assets/KevinCollins.jpg";
import MohammedMahomedImg from "../assets/MohammedMahomed.jpg";
import NikitaKolesnikImg from "../assets/NikitaKolesnik.png";
import PiushVaishImg from "../assets/PiushVaish.jpg";
import VishranthCdotVdotImg from "../assets/VishranthCdotVdot.jpg";

export type MakerSocial =
  | { type: "github" | "twitter" | "instagram" | "youtube" | "linkedin" | "website"; url: string };

export interface Maker {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  socials?: MakerSocial[];
}

export interface MeetTheMakersProps {
  members: Maker[];
  cardWidth?: number;
  cardHeight?: number;
  speedSec?: number;
  reverse?: boolean; // true => move to the right
}

// Pre-configured team list
export const defaultMakers: Maker[] = [
  {
    id: "kevin-collins",
    name: "Kevin Collins",
    role: "Agentic AI | LaunchLoop | Manus Fellow",
    imageUrl: KevinCollinsImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/kevincollinsirl/" }],
  },
  {
    id: "nikita-kolesnik",
    name: "Nikita Kolesnik",
    role: "Founder, Architech – Empowering Everyone to Harness AI with Pro-Level Prompts",
    imageUrl: NikitaKolesnikImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/nikita-kolesnik-41b728368" }],
  },
  {
    id: "piush-vaish",
    name: "Piush Vaish",
    role: "I help small business stay visible and competitive in an AI-driven world. | AI Engineer | Full-Stack Developer",
    imageUrl: PiushVaishImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/piushvaish/" }],
  },
  {
    id: "mohammed-mahomed",
    name: "Mohammed Mahomed",
    role: "Co-Founder at Her Sport",
    imageUrl: MohammedMahomedImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/mohammed-mahomed/" }],
  },
  {
    id: "daniel-smyth",
    name: "Daniel Smyth",
    role: "Founder @Tendr | Bachelor of Applied Science in Quantity Surveying",
    imageUrl: DanielSmythImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/danielsmyth2021/" }],
  },
  {
    id: "alwin-stephen",
    name: "Alwin Stephen",
    role: "Executive Leader | Technology Delivery & Innovation",
    imageUrl: AlwinStephenImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/alwinstephen/" }],
  },
  {
    id: "cv-vishranth",
    name: "C V Vishranth",
    role: "13+ Years Exp — Global Supply Chain, Import/Export, Manufacturing Ops, Logistics Procurement",
    imageUrl: VishranthCdotVdotImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/c-v-vishranth/" }],
  },
];


const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

const MeetTheMakers: React.FC<MeetTheMakersProps> = ({
  members,
  cardWidth = 240,
  cardHeight = 280,
  speedSec = 12,
  reverse = true,
}) => {
  const qty = members.length || 1;

  // Mobile swipe state
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(${-index * 100}% + ${deltaX.current}px))`;
    }
  };
  const handlePointerUp = () => {
    if (startX.current === null) return;
    const threshold = 60;
    if (Math.abs(deltaX.current) > threshold) {
      const dir = deltaX.current > 0 ? -1 : 1;
      setIndex((prev) => clamp(prev + dir, 0, qty - 1));
    } else if (trackRef.current) {
      trackRef.current.style.transition = "transform 300ms ease";
      trackRef.current.style.transform = `translateX(${-index * 100}%)`;
    }
    startX.current = null;
    deltaX.current = 0;
  };

  const cssVars = useMemo<React.CSSProperties>(
    () => ({
      ["--mtm-width" as any]: `${cardWidth}px`,
      ["--mtm-height" as any]: `${cardHeight}px`,
      ["--mtm-quantity" as any]: qty,
      ["--mtm-speed" as any]: `${speedSec}s`,
      ["--mtm-edge-mask" as any]: `linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)`,
    }),
    [cardWidth, cardHeight, qty, speedSec]
  );


  return (
    <Box sx={{ width: "100%" }}>
      <style>{`
        .mtm-desktop { display: block; }
        .mtm-mobile { display: none; }
        @media (max-width: 768px) {
          .mtm-desktop { display: none; }
          .mtm-mobile { display: block; }
        }

        .mtm-slider {
          width: 100%;
          height: var(--mtm-height);
          overflow: hidden;
          -webkit-mask-image: var(--mtm-edge-mask);
                  mask-image: var(--mtm-edge-mask);
          position: relative;
        }

        .mtm-list {
          display: flex;
          width: 100%;
          min-width: calc(var(--mtm-width) * var(--mtm-quantity));
          position: relative;
        }

        .mtm-item {
          width: var(--mtm-width);
          height: var(--mtm-height);
          position: absolute;
          left: 100%;
          animation: mtmAutoRun var(--mtm-speed) linear infinite;
          transition: filter 0.3s ease;
        }

        .mtm-item {
          animation-delay: calc( (var(--mtm-speed) / var(--mtm-quantity)) * (var(--mtm-position) - 1) - var(--mtm-speed) );
        }

        .mtm-slider:hover .mtm-item {
          animation-play-state: paused;
        }

        .mtm-slider[data-reverse="true"] .mtm-item { animation-name: mtmReversePlay; }

        @keyframes mtmAutoRun {
          from { left: 100%; }
          to   { left: calc(var(--mtm-width) * -1); }
        }
        @keyframes mtmReversePlay {
          from { left: calc(var(--mtm-width) * -1); }
          to   { left: 100%; }
        }

        /* Mobile carousel */
        .mtm-mobile-wrap { position: relative; overflow: hidden; width: 100%; height: var(--mtm-height); }
        .mtm-track { display: flex; width: 100%; height: 100%; transition: transform 300ms ease; touch-action: pan-y; }
        .mtm-slide { flex: 0 0 100%; display: grid; place-items: center; padding: 0 10px; }

      `}</style>

      {/* Desktop marquee uses MUI Card to pick up theme overrides */}
      <Box
        className="mtm-desktop mtm-slider"
        style={cssVars as React.CSSProperties}
        data-reverse={reverse ? "true" : "false"}
        aria-label="Meet the Makers carousel"
      >
        <div className="mtm-list">
          {members.map((m, i) => {
            return (
              <div
                key={m.id}
                className="mtm-item"
                style={{ ["--mtm-position" as any]: i + 1 } as React.CSSProperties}
                aria-roledescription="slide"
                aria-label={`${m.name}, ${m.role}`}
              >
                <MakerCard3D 
                  maker={m}
                  width={cardWidth}
                  height={cardHeight}
                />
              </div>
            );
          })}
        </div>
      </Box>

      {/* Mobile swipe */}
      <Box className="mtm-mobile" style={cssVars as React.CSSProperties}>
        {/* Swipe instruction */}
        <Typography 
          variant="body2" 
          sx={{ 
            textAlign: 'center', 
            mb: 2, 
            color: 'text.secondary',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Swipe for More
        </Typography>
        
        <Box className="mtm-mobile-wrap">
          <Box
            ref={trackRef}
            className="mtm-track"
            sx={{ transform: `translateX(${-index * 100}%)` }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {members.map((m) => {
              return (
                <Box key={m.id} className="mtm-slide">
                  <MakerCard3D 
                    maker={m}
                    width={cardWidth}
                    height={cardHeight}
                  />
                </Box>
              );
            })}
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default MeetTheMakers;