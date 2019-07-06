import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Colors from '../../theme/colors'
import * as S from './AccountHero.styled'

const AccountHero = (props) => {
	const { name } = props
	return (
		<S.AccountHeroWrapper>
			<Ionicons name="md-person" size={64} color={Colors.black} />
			<S.NameLabel>{name}</S.NameLabel>
			<S.EditAccountLabel>Edit account</S.EditAccountLabel>
		</S.AccountHeroWrapper>
	)
}

export default AccountHero
