// src/components/NavOverflowControls.tsx
import * as React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export type NavItem = {
  label: string;
  to: string;          // route or URL
  icon?: React.ElementType;
  external?: boolean;
};

export interface NavOverflowControlsProps {
  items: NavItem[];
  onSelect?: (to: string, label: string) => void; // e.g. navigate(to)
}

export default function NavOverflowControls({
  items,
  onSelect,
}: NavOverflowControlsProps) {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openMenu = Boolean(anchorEl);

  const handlePick = (item: NavItem) => {
    if (item.external) {
      window.open(item.to, "_blank", "noopener,noreferrer");
    } else if (onSelect) {
      onSelect(item.to, item.label);
    } else {
      window.location.href = item.to;
    }
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  const hoverBg = alpha('#26c6da', 0.15);

  const paperBg = 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)';

  return (
    <>
      {/* Mobile: hamburger opens Drawer */}
      <IconButton
        aria-label="open navigation drawer"
        onClick={() => setDrawerOpen(true)}
        sx={{ display: { xs: "inline-flex", md: "none" }, mr: 0.5 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Desktop: kebab opens Menu */}
      <IconButton
        aria-label="open menu"
        aria-controls={openMenu ? "nav-overflow" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ 
          display: { xs: "none", md: "inline-flex" },
          borderRadius: '12px',
          color: 'text.primary',
          '&:hover': {
            backgroundColor: alpha('#26c6da', 0.1),
            border: '1px solid rgba(243, 156, 18, 0.2)',
          }
        }}
      >
        <MoreVertIcon />
      </IconButton>

      {/* Desktop dropdown */}
      <Menu
        id="nav-overflow"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            minWidth: 220,
            borderRadius: 2,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: paperBg,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            overflow: "hidden",
          },
        }}
        MenuListProps={{ dense: true, sx: { py: 0.5 } }}
      >
        {items.map((item, idx) => {
          const Icon = item.icon;
          const node = (
            <MenuItem
              key={item.label}
              onClick={() => handlePick(item)}
              sx={{
                gap: 1.25,
                px: 1.25,
                py: 1,
                transition: "all .2s ease-out",
                "&:hover": {
                  backgroundColor: hoverBg,
                  transform: "translate(1px, -1px)",
                },
              }}
            >
              {Icon ? <Icon fontSize="small" /> : null}
              {item.label}
            </MenuItem>
          );
          const needsDivider = idx === 1 || idx === items.length - 2;
          return (
            <React.Fragment key={item.label}>
              {node}
              {needsDivider && <Divider sx={{ my: 0.5 }} />}
            </React.Fragment>
          );
        })}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            borderRight: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
            backgroundImage: paperBg,
            backdropFilter: "blur(6px)",
          },
        }}
      >
        <Box role="presentation" sx={{ pt: 1 }}>
          <List disablePadding>
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <ListItemButton
                  key={item.label}
                  onClick={() => handlePick(item)}
                  sx={{
                    px: 2,
                    py: 1.25,
                    gap: 1,
                    transition: "all .2s ease-out",
                    "&:hover": {
                      backgroundColor: hoverBg,
                      transform: "translate(1px, -1px)",
                    },
                  }}
                >
                  {Icon ? (
                    <ListItemIcon sx={{ minWidth: 34 }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                  ) : null}
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}