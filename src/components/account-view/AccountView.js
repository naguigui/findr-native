import React from 'react'
import ListItem from '../list-item'
import AccountHero from '../account-hero'

import * as S from './AccountView.styled.js'

const AccountView = (props) => {
	const { logout, name, navigateToAccountSettingsEdit } = props
	return (
		<S.AccountViewWrapper>
			<S.AccountHeroWrapper onPress={navigateToAccountSettingsEdit}>
				<AccountHero name={name} />
			</S.AccountHeroWrapper>
			<ListItem label="Notifications" onPress={() => {}} />
			<ListItem label="Log out" onPress={logout} />
		</S.AccountViewWrapper>
	)
}

export default AccountView
