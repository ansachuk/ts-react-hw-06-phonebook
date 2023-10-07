import { Contact } from "../@types/types";

interface RootState {
	contacts: Contact[];
	filter: string;
}

export const selectContacts = (state: RootState) => state.contacts;
export const selectFilter = (state: RootState) => state.filter;
