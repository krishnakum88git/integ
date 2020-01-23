import CMS from 'netlify-cms-app'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as svgIcons from "@fortawesome/free-solid-svg-icons"
import icons from '../styles/icons'
import GenericPagePreview from './preview-templates/GenericPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import PlanPagePreview from './preview-templates/PlanPagePreview'
import InfoPreview from './preview-templates/InfoPreview'
import CmsInfoPreview from './preview-templates/CmsInfoPreview'
import RedirectConfigPreview from './preview-templates/RedirectConfigPreview'

icons.forEach(icon => library.add(svgIcons[icon]))

CMS.registerPreviewTemplate('homepage', HomePagePreview)
CMS.registerPreviewTemplate('pages', GenericPagePreview)
CMS.registerPreviewTemplate('plans', PlanPagePreview)
CMS.registerPreviewTemplate('enrollmentInfo', InfoPreview)
CMS.registerPreviewTemplate('contactInfo', InfoPreview)
CMS.registerPreviewTemplate('cmsInfo', CmsInfoPreview)
CMS.registerPreviewTemplate('redirects', RedirectConfigPreview)
