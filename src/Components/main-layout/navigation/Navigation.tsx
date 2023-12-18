import { Close, Menu } from '@mui/icons-material';
import { AppBar, Box, Button, Dialog, Hidden, IconButton, Slide, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import { SectionIdEnum } from 'Types'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const navItems = [
  {
    text: 'About',
    to: SectionIdEnum.about,
  },
  {
    text: 'Skills',
    to: SectionIdEnum.skills,
  },
  {
    text: 'My Work',
    to: SectionIdEnum.mywork,
  },
  {
    text: 'Contact',
    to: SectionIdEnum.contact,
  },

];
const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>) => {
  return <Slide direction='left'ref= {ref} {...props}/>
  }
)

export const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);
  const mappedItems = (
    navItems.map(({ to, text }) => {
      return (
        <AnchorLink key={to} href={`#${to}`} offset={isSmall ? '56px' : '64px'} className="all_unset">
          <Button color='inherit' size='large' fullWidth={isSmall} onClick={onCloseHandler}>
            {text}
          </Button>
        </AnchorLink>
      );
    })
  );

 
  return (
    <>
      <Hidden smDown>
      <Box display='flex' gap={2}>
          {mappedItems}
      </Box>
    </Hidden>
    <Hidden smUp>
        <IconButton color='inherit' onClick={onOpenHandler}>
          <Menu/>
        </IconButton>
        <Dialog open={open} fullScreen fullWidth TransitionComponent={Transition}
          PaperProps={{
            sx: {
              boxShadow: 'none',
            },
          }}
        >
          <AppBar position="static" sx={{ background: "white", color: "text.primary" }}>
            <Toolbar>
              <Typography variant='h5' sx={{ flexGrow: 1 }}>
                Menu
              </Typography>
              <IconButton color='inherit' onClick={onCloseHandler}>
                <Close/>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box display="flex" flexDirection="column" py={3} width="100%">
          {mappedItems}
          </Box>
        </Dialog>
    </Hidden>
    </>


  );
};

