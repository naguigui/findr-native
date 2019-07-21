import React from 'react'
import { Root } from 'native-base'
import { getStorybookUI, configure } from '@storybook/react-native'
import { ThemeProvider } from 'styled-components/native'
import { loadStories } from './storyLoader'
import theme from '../src/theme/theme'

configure(() => {
	loadStories()
}, module)

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' })

class StorybookUIRoot extends React.Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Root>
					<StorybookUI />
				</Root>
			</ThemeProvider>
		)
	}
}

export default StorybookUIRoot
