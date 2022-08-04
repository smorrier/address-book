import { Dispatch, SetStateAction } from "react";
import { IFullContact } from "../../interfaces/IContact";
import axios from "../../service/axios"

export interface IGetContactParams {
	id: string;
}
interface IGetContactsParams {
	page: number;
	pageSize: number;
}

interface IContactApi {
	sliceSize: number;
	defaultPage: number;
	defaultPageSize: number;
	addContacts: (c: Array<any>) => void;
}

function contactApi({ sliceSize, defaultPage, defaultPageSize, addContacts }: IContactApi) {
	let page = defaultPage
	const setPage = (newPage: number) => {
		page = newPage
	}
	let pageSize = defaultPageSize
	const setPageSize = (newPageSize: number) => {
		pageSize = newPageSize
	}

	const getContact = ({ id }: IGetContactParams): Promise<IFullContact | null> => {
		return axios.get('/', {
			params: {
				page: id,
				results: 1,
				exc: 'login'
			}
		})
		.then((res) => res.data.results[0] as IFullContact)
		.catch(() => null)
	}
	const _getContacts = ({ page, pageSize }: IGetContactsParams) => {
		return axios.get('/', {
				params: {
					page,
					results: pageSize,
					inc: 'name,id,email,phone,picture'
				}
			})
			.then((res) => res.data.results)
			.catch(() => ([]))
	}
	const getContacts = async () => {
		const slices = Math.floor(pageSize / sliceSize)
		const offset = ((page - 1) * slices) + 1
		const res = await Promise.all(Array.from(Array(slices).keys()).map((slice: number) => {
			return _getContacts({ page: slice + offset, pageSize: sliceSize })
		}))
		const contacts: Array<any> = ([]).concat(...res)
		addContacts(contacts)
		return contacts
	}

	return {
		getContact,
		getContacts,
		setPage,
		setPageSize
	}
}

export default contactApi