import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

type ResponseType<T> = {
	config: any
	data: T
	headers: any
	request: any
	status: number
	statusText: string
}

const fetcher = {
	async get<T> (url: string): Promise<ResponseType<T>> {
		return axios.get(url)
	}
}

export { fetcher as default, BASE_URL }

