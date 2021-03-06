require('ts-node').register({ files: true })
const fs = require('fs')
const path = require('path')

const pJSON = JSON.parse(
	fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8'),
)

const siteUrl = (process.env.SITE_URL || pJSON.homepage).replace(/\//g, '')
const gitHubUrl = pJSON.repository.url

const cfg = {
	pathPrefix: process.env.SITE_DIR,
	siteMetadata: {
		title: `Masks for Humanity`,
		shortTitle: `Masks for Humanity`,
		siteUrl,
		description: `Masks for Humanity`,
		gitHubUrl,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: path.join(process.cwd(), 'static'),
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-autolink-headers`],
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-react-svg`,
		{
			resolve: `gatsby-source-sanity`,
			options: {
				projectId: process.env.SANITY_PROJECT_ID ?? '1z6tpjf0',
				dataset: process.env.SANITY_DATASET ?? 'production',
			},
		},
		`gatsby-plugin-sass`,
	],
}

module.exports = cfg
