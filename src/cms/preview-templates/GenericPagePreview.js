import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/generic-page'
import StyleInjector from '../../components/StyleInjector'
import { Wrapper } from '../../components/Layout'
import Hero from '../../components/Hero'
import Callout from '../../components/Callout'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'

const GenericPagePreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {
  const introduction = widgetsFor('introduction')
  const breadcrumbs = entry.getIn(['data', 'breadcrumbs'])
  const lists = entry.getIn(['data', 'lists'])

  return (
    <StyleInjector>
        <Wrapper>
          <Hero
            title= {entry.getIn(['data', 'title'])}
            subTitle= {entry.getIn(['data', 'subTitle'])}
            imgSrc= {getAsset(entry.getIn(['data', 'banner']))}
            iconColor= {entry.getIn(['data', 'indicatorColor'])}
            iconName= {entry.getIn(['data', 'iconName'])}
            isLarge= {entry.getIn(['data', 'isLarge'])}
          />
          {introduction && <Callout flex={false} title={introduction.getIn(['data', 'title'])} />}
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <PageTemplate
            content={widgetFor('body')}
            lists={lists && lists.toJS()}
            listDirection={entry.getIn(['data', 'listDirection'])}
          />
          {/* {this.props.magnets && <Magnets magnets={this.props.magnets} />} */}
          <Footer disclaimers={widgetsFor('disclaimers')} />
        </Wrapper>
    </StyleInjector>
  )
}

GenericPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GenericPagePreview
