import { Divider } from '@mui/material';
import { MainLayout, SectionContainer }  from 'Components';
import { SectionIdEnum } from 'Types';
import { IntroSection } from 'sections';

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection/>,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <IntroSection/>,
  },
  {
    sectionId: SectionIdEnum.skills,
    component: <IntroSection/>,
  },
  {
    sectionId: SectionIdEnum.mywork,
    component: <IntroSection/>,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <IntroSection/>,
  }

];

const Main = () => {
  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return <SectionContainer sectionId={sectionId} key={sectionId}>
          <Divider/>
            { component }
        </SectionContainer>

      })}
    </MainLayout>
  )
}

export default Main
