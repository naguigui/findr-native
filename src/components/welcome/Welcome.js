import React from 'react'

import Layout from '../../components/layout'
import Button from '../../components/button'

import navigationService from '../../services/navigationService'

import * as Routes from '../../utils/routeNames'

import * as S from './Welcome.styled'

const Welcome = () => (
		<Layout>
			<S.WelcomeWrapper>
				<S.Content>
					<S.Title>Welcome to Titan.</S.Title>
					<S.ButtonWrapper>
						<Button btnText="Continue with Facebook" isSecondary={true} />
					</S.ButtonWrapper>
					<S.ButtonWrapper>
						<Button
							btnText="Create Account"
							rounded={true}
							bordered={true}
							light={true}
							onPress={() => navigationService.navigate({
									routeName: Routes.REGISTRATION_ROUTE,
								})}
						/>
					</S.ButtonWrapper>
					<S.ButtonWrapper>
						<Button
							btnText="Log in"
							rounded={true}
							bordered={true}
							light={true}
							onPress={() => navigationService.navigate({
									routeName: Routes.LOGIN_ROUTE,
								})}
						/>
					</S.ButtonWrapper>
				</S.Content>
			</S.WelcomeWrapper>
		</Layout>
	)

export default Welcome
