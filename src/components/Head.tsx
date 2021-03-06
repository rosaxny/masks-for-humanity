import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { SiteMetaData } from '../templates/page'

export const Head = ({
	siteMetaData: { title, description },
}: {
	siteMetaData: SiteMetaData
}) => (
	<>
		<Helmet>
			<link
				href="https://fonts.googleapis.com/css2?family=Bitter&family=Catamaran:wght@300&amp;display=swap"
				rel="stylesheet"
			></link>
			<title>{title}</title>
			<meta name="description" content={description} />
			<html lang="en" />
			<link rel="icon" type="image/svg+xml" href={withPrefix('/favicon.svg')} />
		</Helmet>
	</>
)
