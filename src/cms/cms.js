import CMS from 'netlify-cms'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as svgIcons from "@fortawesome/free-solid-svg-icons"
import icons from '../styles/icons'
import GenericPagePreview from './preview-templates/GenericPagePreview'

icons.forEach(icon => library.add(svgIcons[icon]))

CMS.registerPreviewTemplate('pages', GenericPagePreview)
