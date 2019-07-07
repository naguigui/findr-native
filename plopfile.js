module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'React presentational component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter component name (example: NavBar): ',
			},
		],
		actions: () => {
			const actions = [
				{
					type: 'add',
					path: 'src/components/{{dashCase name}}/{{properCase name}}.js',
					templateFile: 'templates/component.hbs',
				},
				{
					type: 'add',
					path: 'src/components/{{dashCase name}}/index.js',
					templateFile: 'templates/index.hbs',
				},
				{
					type: 'add',
					path:
						'src/components/{{dashCase name}}/{{properCase name}}.styled.js',
					templateFile: 'templates/styled.hbs',
				},
			]
			return actions
		},
	})

	plop.setGenerator('container', {
		description: 'React container component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter container name (example: Table)',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/containers/{{dashCase name}}/{{properCase name}}.js',
				templateFile: 'templates/container.hbs',
			},
			{
				type: 'add',
				path: 'src/containers/{{dashCase name}}/index.js',
				templateFile: 'templates/index.hbs',
			},
		],
	})
}
