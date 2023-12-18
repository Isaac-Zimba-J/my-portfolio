import { AppBar, Box, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { logoImg } from 'assets';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navigation } from './navigation/Navigation';
import { SectionIdEnum } from 'Types';


export type MainLayoutProp = {
  children: React.ReactNode;
}


export const MainLayout = ({ children }: MainLayoutProp) => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box height="100vh">
      <AppBar position='fixed' sx={{ background: ' #8BA387'}}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink href={`#${SectionIdEnum.intro}`} offset={isSmall ? '56px' : '64px'} className="all_unset">
              <Box display="flex" alignItems="center" gap={0.5} sx={{ cursor:'pointer'}}>
                <img width="240px" height="45px" src={logoImg} alt='logo'/>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation/>
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  )
}


