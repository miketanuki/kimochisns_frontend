import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledDiv = styled('div')({
  flexGrow: 1,
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
});

const Navbar: React.FC = () => {
  return (
    <StyledDiv>
      <AppBar position="static">
        <Toolbar>
          <StyledTypography variant="h6">
            My SNS
          </StyledTypography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
};

export default Navbar;
