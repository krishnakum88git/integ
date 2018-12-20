import React from 'react'
import { PageTemplate } from '../../pages/index'
import StyleInjector from '../../components/StyleInjector'
import { Wrapper } from '../../components/Layout'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

const HomePagePreview = ({ entry, widgetsFor, getAsset }) => {
  const callout = entry.getIn(['data', 'callout'])
  const callToAction = entry.getIn(['data', 'callToAction'])
  const disclaimers = entry.getIn(['data', 'disclaimers'])
  return (
    <StyleInjector>
      <Wrapper>
        <Hero
          title= {entry.getIn(['data', 'title'])}
          subTitle= {entry.getIn(['data', 'subTitle'])}
          imgSrc= {getAsset(entry.getIn(['data', 'banner']))}
          iconColor= {entry.getIn(['data', 'indicatorColor'])}
          iconName= {entry.getIn(['data', 'iconName'])}
          alignLeft= {entry.getIn(['data', 'alignLeft'])}
        />
        <PageTemplate
          lead={entry.getIn(['data', 'lead'])}
          callout={callout && callout.toJS()}
          callToAction={callToAction && callToAction.toJS()}
        />
        <div style={{height: 200}} />
        <Footer disclaimers={disclaimers && disclaimers.toJS()} />
      </Wrapper>
    </StyleInjector>
  )
}

export default HomePagePreview
