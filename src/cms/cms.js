import CMS from 'netlify-cms'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as svgIcons from "@fortawesome/free-solid-svg-icons"
import icons from '../styles/icons'
import GenericPagePreview from './preview-templates/GenericPagePreview'
import PlanPagePreview from './preview-templates/PlanPagePreview'
import InfoPreview from './preview-templates/InfoPreview'
import CmsInfoPreview from './preview-templates/CmsInfoPreview'

icons.forEach(icon => library.add(svgIcons[icon]))

CMS.registerPreviewTemplate('pages', GenericPagePreview)
CMS.registerPreviewTemplate('plans', PlanPagePreview)
CMS.registerPreviewTemplate('enrollmentInfo', InfoPreview)
CMS.registerPreviewTemplate('contactInfo', InfoPreview)
CMS.registerPreviewTemplate('cmsInfo', CmsInfoPreview)
