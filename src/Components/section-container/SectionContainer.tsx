import { Box, Container } from '@mui/material';
import { SectionIdEnum } from 'Types';
import React from 'react'

export type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: SectionIdEnum;
}

export const SectionContainer = ({children, sectionId}: SectionContainerProps) => {
  return (
    <div id={sectionId} key={sectionId}>
      <Container>
        <Box minHeight="100vh">{children}</Box>
      </Container>

    </div>
  )
}


