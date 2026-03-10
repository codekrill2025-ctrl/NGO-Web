import { useCallback, useMemo, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Container,
  IconButton,
  Paper,
  Popper,
  Toolbar,
  Typography,
  MenuList,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Header.scss";
import { navItems } from "../../data/nav";
import type { NavItem } from "../../data/nav";

type OpenState = {
  id: string | null;
  anchorEl: HTMLElement | null;
};

const CLOSE_DELAY_MS = 120;

export default function Header() {
  const [open, setOpen] = useState<OpenState>({ id: null, anchorEl: null });
  const closeTimer = useRef<number | null>(null);

  const openedItem: NavItem | undefined = useMemo(() => {
    if (!open.id) return undefined;
    return navItems.find((n) => n.id === open.id);
  }, [open.id]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setOpen({ id: null, anchorEl: null });
    }, CLOSE_DELAY_MS);
  }, []);

  const openMenu = useCallback((id: string, anchorEl: HTMLElement) => {
    clearCloseTimer();
    setOpen({ id, anchorEl });
  }, []);

  const closeMenu = useCallback(() => {
    clearCloseTimer();
    setOpen({ id: null, anchorEl: null });
  }, []);

  const handleNavEnter = (item: NavItem) => (e: React.MouseEvent<HTMLElement>) => {
    if (item.children?.length) openMenu(item.id, e.currentTarget);
    else closeMenu();
  };

  const handleNavClick = (item: NavItem) => (e: React.MouseEvent<HTMLElement>) => {
    // optional: open on click for touch devices too
    if (item.children?.length) {
      e.preventDefault();
      openMenu(item.id, e.currentTarget);
    }
  };

  return (
    <AppBar position="sticky" className="header">
      <Container maxWidth="lg">
        <Toolbar className="toolbar" disableGutters>
          {/* Logo */}
          <a className="logoWrap" href="#">
            <div className="logoMark">S</div>
            <div className="logoText">
              SMILE
              <span>FOUNDATION</span>
            </div>
          </a>

          {/* Nav */}
          <nav className="nav" onMouseLeave={scheduleClose}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                className="navBtn"
                onMouseEnter={handleNavEnter(item)}
                onClick={handleNavClick(item)}
                href={item.href || "#"}
                endIcon={item.children?.length ? <span style={{ opacity: 0.55 }}>▾</span> : undefined}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Right side */}
          <Box className="right">
            <Button
              variant="contained"
              color="primary"
              className="supportBtn"
              href="#support"
            >
              Support a Cause
            </Button>
            <IconButton aria-label="search" size="large">
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Hover Dropdown */}
          <Popper
            open={Boolean(open.id && open.anchorEl && openedItem?.children?.length)}
            anchorEl={open.anchorEl}
            placement="bottom-start"
            disablePortal={false}
            modifiers={[
              { name: "offset", options: { offset: [0, 8] } },
              { name: "preventOverflow", options: { padding: 8 } },
            ]}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <ClickAwayListener onClickAway={closeMenu}>
              <Paper className="dropdownPaper" elevation={0}>
                <MenuList className="dropdownList" autoFocusItem={false}>
                  <Typography
                    sx={{
                      px: 1.2,
                      py: 0.9,
                      fontWeight: 700,
                      fontSize: "0.86rem",
                      opacity: 0.8,
                    }}
                  >
                    {openedItem?.label}
                  </Typography>

                  {openedItem?.children?.map((c) => (
                    <MenuItem
                      key={c.label}
                      className="dropdownItem"
                      onClick={closeMenu}
                      component="a"
                      href={c.href || "#"}
                    >
                      <div className="dropdownRow">
                        <span>{c.label}</span>
                        {c.rightArrow ? <ChevronRightIcon fontSize="small" /> : null}
                      </div>
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Popper>
        </Toolbar>
      </Container>
    </AppBar>
  );
}