import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'
import { Layout, JoinParty } from '../../components'

import * as Routes from '../../utils/routeNames'

import navigationService from '../../services/navigationService'
import { JOIN_PARTY_MUTATION } from './gql'

const JoinPartyContainer = () => {
	const [pin, setPin] = useState('')

	const [joinPartyAction, { loading }] = useMutation(JOIN_PARTY_MUTATION, {
		variables: {
			pin,
		},
	})

	const onChange = (_, val) => {
		setPin(val)
	}

	const joinParty = async () => {
		await joinPartyAction()
		navigationService.navigate({
			routeName: Routes.PARTY_ROUTE,
		})
	}

	return (
		<Layout isAuthenticated={true} isLoading={loading}>
			<JoinParty pinValue={pin} onChange={onChange} joinParty={joinParty} />
		</Layout>
	)
}

export default JoinPartyContainer
