export const fetchUserService = async username => {
	try {
		const response = await fetch(`https://api.bitbucket.org/2.0/users/${username}`)
		if (response.ok) {
			return response.json()
		} else {
			throw new Error('An error occurred during user fetching')
		}
	} catch (error) {
		throw error
	}
}

export const fetchRepositoriesService = async url => {
	try {
		const response = await fetch(url)
		if (response.ok) {
			const json = await response.json()
			return json.values.slice(0, 5)
		} else {
			throw new Error('An error occurred during repositories fetching')
		}
	} catch (error) {
		throw error
	}
}
