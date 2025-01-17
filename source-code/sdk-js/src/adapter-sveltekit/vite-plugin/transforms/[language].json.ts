import type { TransformConfig } from '../config.js'

// TODO: @benjaminpreiss: transform
export const transformLanguageJson = (config: TransformConfig, code: string) => {
	if (code) {
		// TODO: throw error if file contains a GET endpoint; currently we just override it
		// throw new Error()
	}

	return `
import { json } from "@sveltejs/kit"
import { getResource, reloadResources } from "@inlang/sdk-js/adapter-sveltekit/server"

export const GET = async ({ params: { language } }) => {
	await reloadResources()
	return json(getResource(language) || null)
}
`
}