import React from 'react'

import Layout from '../../components/layout'
import Button from '../../components/button'

import navigationService from '../../services/navigationService'

import * as S from './Welcome.styled'

const Welcome = () => {
	return (
		<Layout main>
			<S.WelcomeWrapper>
				<S.Content>
					<S.Title>Welcome to Titan.</S.Title>
					<S.ButtonWrapper>
						<Button
							btnText="Continue with Facebook"
							rounded={true}
							light={true}
						/>
					</S.ButtonWrapper>
					<S.ButtonWrapper>
						<Button
							btnText="Create Account"
							rounded={true}
							bordered={true}
							light={true}
							onPress={() =>
								navigationService.navigate({
									routeName: 'Registration',
								})
							}
						/>
					</S.ButtonWrapper>
					<S.ButtonWrapper>
						<Button
							btnText="Log in"
							rounded={true}
							bordered={true}
							light={true}
							onPress={() =>
								navigationService.navigate({
									routeName: 'Login',
								})
							}
						/>
					</S.ButtonWrapper>
				</S.Content>
			</S.WelcomeWrapper>
		</Layout>
	)
}

export default Welcome
