import styled from 'styled-components';
import React from 'react';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Backdrop from '@mui/material/Backdrop';

const items = [
  {
    name: 'About',
    icon: <InfoIcon />,
  },
  {
    name: 'Email',
    icon: <ContactMailIcon />,
  },
  {
    name: 'Call',
    icon: <CallIcon />,
  },
  {
    name: 'Location',
    icon: <LocationOnIcon />,
  },
  {
    name: 'Linkedin',
    icon: <LinkedInIcon />,
  },
];

const MenuContainer = styled.div``;

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <MenuContainer>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="This is basic hamburger menu"
        icon={<SpeedDialIcon />}
        enablemouseactions="true"
        sx={{position: 'absolute', bottom: '16px', left: '16px'}}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}>
        {items.map((act) => (
          <SpeedDialAction
            key={act.name}
            icon={act.icon}
            tooltipTitle={act.name}
            tooltipOpen={true}
            tooltipPlacement={'right'}
          />
        ))}
      </SpeedDial>
    </MenuContainer>
  );
};

export default HamburgerMenu;
