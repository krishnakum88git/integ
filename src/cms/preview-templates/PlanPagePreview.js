import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PageTemplate } from '../../templates/plan-page'
import StyleInjector from '../../components/StyleInjector'
import { Wrapper } from '../../components/Layout'
import Hero from '../../components/Hero'
import Callout from '../../components/Callout'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'

const Warning = styled.strong`
  display: block;
  color: red;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const PlanPagePreview = ({ entry, widgetFor, getAsset }) => {
  const introduction = entry.getIn(['data', 'introduction'])
  const introductionFeature = entry.getIn(['data', 'introductionFeature'])
  const breadcrumbs = entry.getIn(['data', 'breadcrumbs'])
  const lists = entry.getIn(['data', 'lists'])
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

        {introductionFeature && (
          <>
            <Warning>Introduction Feature is displayed on the Our Plans page, this is only visible on this page in the cms:</Warning>
            <Callout flex={false} {...introductionFeature.toJS()} />
            <Warning>Introduction Feature End</Warning>
          </>
        )}

        {introduction && <Callout flex={false} {...introduction.toJS()} />}
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <PageTemplate
          content={widgetFor('body')}
          lists={lists && lists.toJS()}
          listDirection={entry.getIn(['data', 'listDirection'])}
        />
        <div style={{height: 200}} />
        <Footer disclaimers={disclaimers && disclaimers.toJS()} />
      </Wrapper>
    </StyleInjector>
  )
}

PlanPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlanPagePreview
