import React from "react"
import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'

const Control = () => <input placeholder="ok" />

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerWidget("magnet", Control);