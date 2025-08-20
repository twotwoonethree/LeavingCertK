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
  reverse?: boolean;
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
    name: "Nikita Akella",
    role: "Founder, Architech – Empowering Everyone to Harness AI with Pro-Level Prompts",
    imageUrl: NikitaKolesnikImg,
    socials: [{ type: "linkedin", url: "https://www.linkedin.com/in/nikita-akella-41b728368/" }],
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

const MeetTheMakers: React.FC<MeetTheMakersProps> = ({
  members,
  cardWidth = 240,
  cardHeight = 280,
  speedSec = 12,
  reverse = true,
}) => {
  // Simple mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);

  // Triple the array for infinite scrolling: [...members, ...members, ...members]
  const tripleMembers = useMemo(() => {
    return [...members, ...members, ...members];
  }, [members]);

  const totalMembers = members.length;
  const startIndex = totalMembers; // Start at middle set

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) < 50) return;
    
    if (diff > 0) {
      // Swipe left - next
      setCurrentIndex(prev => (prev + 1) % totalMembers);
    } else {
      // Swipe right - previous
      setCurrentIndex(prev => (prev - 1 + totalMembers) % totalMembers);
    }
  };

  const cssVars = useMemo<React.CSSProperties>(
    () => ({
      ["--mtm-width" as any]: `${cardWidth}px`,
      ["--mtm-height" as any]: `${cardHeight}px`,
      ["--mtm-quantity" as any]: totalMembers,
      ["--mtm-speed" as any]: `${speedSec}s`,
      ["--mtm-edge-mask" as any]: `linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)`,
    }),
    [cardWidth, cardHeight, totalMembers, speedSec]
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

        /* Desktop carousel */
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

        /* Mobile carousel - SIMPLE approach */
        .mobile-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .mobile-track {
          display: flex;
          transition: transform 0.4s ease;
          width: ${tripleMembers.length * 100}%;
        }

        .mobile-slide {
          width: ${100 / tripleMembers.length}%;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;
        }
      `}</style>

      {/* Desktop marquee */}
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

      {/* Mobile carousel */}
      <Box className="mtm-mobile">
        {/* Indicators */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, gap: 1 }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
          >
            Swipe for More
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            {members.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: i === currentIndex ? '#f39c12' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Simple working carousel */}
        <Box 
          className="mobile-container"
          sx={{ height: cardHeight }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Box
            className="mobile-track"
            sx={{
              transform: `translateX(-${(startIndex + currentIndex) * (100 / tripleMembers.length)}%)`
            }}
          >
            {tripleMembers.map((member, index) => (
              <Box key={`${member.id}-${index}`} className="mobile-slide">
                <MakerCard3D 
                  maker={member}
                  width={cardWidth}
                  height={cardHeight}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MeetTheMakers;