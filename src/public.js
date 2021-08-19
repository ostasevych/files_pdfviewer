/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { generateUrl } from '@nextcloud/router'

import logger from './services/logger'
import canDownload from './utils/canDownload'
import isPublicPage from './utils/isPublicPage'
import isPdf from './utils/isPdf'
import isSecureViewerAvailable from './utils/isSecureViewerAvailable'

window.addEventListener('DOMContentLoaded', function() {
	logger.debug('Initializing for public page', {
		isPublicPage: isPublicPage(),
		canDownload: canDownload(),
		isSecureViewerAvailable: isSecureViewerAvailable(),
	})

	// If we display a folder, we don't have anything more to do here
	if (isPublicPage() && !isPdf()) {
		logger.debug('But this is not a single pdf share')
		return
	}

	// If we display a single PDF and we don't use the richdocument secureViewer
	if (isPublicPage() && isPdf() && !isSecureViewerAvailable()) {
		const page = location.hash.split('page=')[1] || 0
		const contentElmt = document.getElementById('files-public-content')
		const sharingTokenElmt = document.getElementById('sharingToken')
		const footerElmt = document.querySelector('body > footer')

		const sharingToken = sharingTokenElmt.value
		const downloadUrl = generateUrl('/s/{token}/download', { token: sharingToken })
		const viewerUrl = generateUrl('/apps/files_pdfviewer/?file={downloadUrl}&canDownload={canDownload}#page={page}', {
			canDownload: canDownload() ? 1 : 0,
			downloadUrl,
			page,
		})

		// Create viewer frame
		const viewerNode = document.createElement('iframe')
		viewerNode.style.height = '100%'
		viewerNode.style.width = '100%'
		viewerNode.style.position = 'absolute'

		// Inject viewer
		if (contentElmt) {
			contentElmt.innerHTML = ''
			contentElmt.appendChild(viewerNode)
			viewerNode.src = viewerUrl
			footerElmt.style.display = 'none'
		} else {
			logger.error('Unable to inject the PDF Viewer')
		}
	} else {
		logger.error('But this does not appear to be a public page')
	}
})
