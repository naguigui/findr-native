import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { Layout, JoinParty } from '../../components'

import * as Routes from '../../utils/routeNames'

import navigationService from '../../services/navigationService'
import { JOIN_PARTY_MUTATION } from './gql'

const JoinPartyContainer = (props) => {
	const [pin, setPin] = useState('')
	const { joinPartyAction } = props

	const onChange = (_, val) => {
		setPin(val)
	}

	const joinParty = () => {
		joinPartyAction({
			variables: {
				pin,
			},
		})
	}

	return (
		<Layout isAuthenticated={true}>
			<JoinParty pinValue={pin} onChange={onChange} joinParty={joinParty} />
		</Layout>
	)
}

const JoinPartyContainerWithMutation = (props) => (
	<Mutation
		mutation={JOIN_PARTY_MUTATION}
		onCompleted={() => {
			navigationService.navigate({
				routeName: Routes.PARTY_ROUTE,
			})
		}}
	>
		{(joinPartyAction, { loading, data }) => (
			<JoinPartyContainer
				joinPartyAction={joinPartyAction}
				isLoading={loading}
				mutationData={data}
				{...props}
			/>
		)}
	</Mutation>
)

export default JoinPartyContainerWithMutation
