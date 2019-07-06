export const apolloErrorStrip = (errorMsg) => {
	return errorMsg.replace('GraphQL error:', ' ').trim()
}
