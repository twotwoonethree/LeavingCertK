import React, { useEffect, useMemo, useRef, useState } from 'react';
import { keyframes, styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export type ArrowDirection = 'right' | 'left' | 'up' | 'down';

export interface AnimatedArrowButtonProps {
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  ariaLabel?: string;
  /** Outer box side in px (default 56 to match your CSS) */
  size?: number;
  /** Arrow direction (default 'right') */
  direction?: ArrowDirection;
  /** Arrow fill color (default #f0eeef) */
  fill?: string;
  /** Base ring color (default #f0eeef) */
  ringBase?: string;
  /** Accent ring color (default #96daf0) */
  ringAccent?: string;
  /** Optional className for external layout/margins */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

/** --- Keyframes to mimic + loop the hover effect --- */
const ringBeforeKF = keyframes`
  0% { opacity: 1; transform: scale(1); }
  30% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 0; transform: scale(0.7); }
  70% { opacity: 0.3; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;
const ringAfterKF = keyframes`
  0% { opacity: 0; transform: scale(1.3); }
  30% { opacity: 0.3; transform: scale(1.15); }
  50% { opacity: 1; transform: scale(1); }
  70% { opacity: 0.3; transform: scale(1.15); }
  100% { opacity: 0; transform: scale(1.3); }
`;
const slideRightKF = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  40% { transform: translateX(56px); opacity: 0.3; }
  50% { transform: translateX(56px); opacity: 0; }
  51% { transform: translateX(0); opacity: 0; }
  60% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(0); opacity: 1; }
`;
const slideLeftKF = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  40% { transform: translateX(-56px); opacity: 0.3; }
  50% { transform: translateX(-56px); opacity: 0; }
  51% { transform: translateX(0); opacity: 0; }
  60% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(0); opacity: 1; }
`;
const slideDownKF = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  40% { transform: translateY(56px); opacity: 0.3; }
  50% { transform: translateY(56px); opacity: 0; }
  51% { transform: translateY(0); opacity: 0; }
  60% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
`;
const slideUpKF = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  40% { transform: translateY(-56px); opacity: 0.3; }
  50% { transform: translateY(-56px); opacity: 0; }
  51% { transform: translateY(0); opacity: 0; }
  60% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
`;

/** Prevent custom props from hitting the DOM */
const Root = styled('button', {
  shouldForwardProp: (prop) =>
    !['animating', 'boxSize', 'arrowRotation', 'fill', 'ringBase', 'ringAccent', 'slideAnimation'].includes(
      String(prop),
    ),
})<{
  animating: boolean;
  boxSize: number;
  arrowRotation: number;
  fill: string;
  ringBase: string;
  ringAccent: string;
  slideAnimation: any;
}>(({ animating, boxSize, arrowRotation, fill, ringBase, ringAccent, slideAnimation, theme }) => ({
  display: 'block',
  position: 'relative',
  width: boxSize,
  height: boxSize,
  margin: 0,
  overflow: 'hidden',
  outline: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 0,
  padding: 0,
  borderRadius: '50%',
  // Focus ring for a11y
  '&:focus-visible': {
    boxShadow: `0 0 0 3px ${theme.palette.mode === 'dark' ? 'rgba(150,218,240,0.5)' : 'rgba(150,218,240,0.8)'}`,
  },

  // Outer/inner rings
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    inset: 7,
  },
  '&::before': {
    border: `4px solid ${ringBase}`,
    opacity: 1,
    transform: 'scale(1)',
    transition:
      'opacity 0.4s cubic-bezier(0.77,0,0.175,1) 80ms, transform 0.5s cubic-bezier(0.455,0.03,0.515,0.955) 80ms',
    ...(animating && {
      animation: `${ringBeforeKF} 3.2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
    }),
  },
  '&::after': {
    border: `4px solid ${ringAccent}`,
    opacity: 0,
    transform: 'scale(1.3)',
    transition:
      'opacity 0.4s cubic-bezier(0.165,0.84,0.44,1), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
    ...(animating && {
      animation: `${ringAfterKF} 3.2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
    }),
  },

  // Fallback hover behavior (still works if you hover it)
  '&:hover::before, &:focus::before': !animating
    ? {
        opacity: 0,
        transform: 'scale(0.7)',
        transition:
          'opacity 0.4s cubic-bezier(0.165,0.84,0.44,1), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
      }
    : {},
  '&:hover::after, &:focus::after': !animating
    ? {
        opacity: 1,
        transform: 'scale(1)',
        transition:
          'opacity 0.4s cubic-bezier(0.77,0,0.175,1) 80ms, transform 0.5s cubic-bezier(0.455,0.03,0.515,0.955) 80ms',
      }
    : {},

  // Arrow track
  '& .buttonBox': {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    ...(animating && {
      animation: `${slideAnimation} 3.2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite`,
    }),
  },

  // Arrow icon
  '& .buttonElem': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: boxSize,
    height: boxSize,
    transform: `rotate(${arrowRotation}deg)`,
    fill,
    pointerEvents: 'none',
    userSelect: 'none',
    '& svg': {
      width: 20,
      height: 20,
    },
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

/** Map direction -> rotation */
const rotationFor = (dir: ArrowDirection) =>
  ({
    right: 180,
    left: 0,
    up: -90,
    down: 90,
  }[dir]);

/** Map direction -> slide animation */
const slideAnimationFor = (dir: ArrowDirection) =>
  ({
    right: slideLeftKF,  // right-pointing arrow slides left
    left: slideRightKF,  // left-pointing arrow (which visually points right) slides right
    up: slideUpKF,
    down: slideDownKF,
  }[dir]);

const ARROW_PATH =
  'M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z';

export default function AnimatedArrowButton({
  onClick,
  ariaLabel = 'Next',
  size = 56,
  direction = 'right',
  fill = '#f0eeef',
  ringBase = '#f0eeef',
  ringAccent = '#96daf0',
  className,
  disabled,
}: AnimatedArrowButtonProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const ref = useRef<HTMLButtonElement | null>(null);
  const [inView, setInView] = useState(false);

  // On mobile: animate only while in view. On desktop: animate constantly.
  useEffect(() => {
    if (isDesktop || !ref.current) {
      setInView(false);
      return;
    }
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting && entry.intersectionRatio > 0);
      },
      { threshold: [0, 0.15, 0.25, 0.5] },
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [isDesktop]);

  const animating = isDesktop || inView;

  const rotation = useMemo(() => rotationFor(direction), [direction]);
  const slideAnimation = useMemo(() => slideAnimationFor(direction), [direction]);

  return (
    <Root
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className={className}
      animating={animating}
      boxSize={size}
      arrowRotation={rotation}
      fill={fill}
      ringBase={ringBase}
      ringAccent={ringAccent}
      slideAnimation={slideAnimation}
    >
      <div className="buttonBox">
        <span className="buttonElem" aria-hidden>
          <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
            <path d={ARROW_PATH} />
          </svg>
        </span>
        <span className="buttonElem" aria-hidden>
          <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
            <path d={ARROW_PATH} />
          </svg>
        </span>
      </div>
    </Root>
  );
}
