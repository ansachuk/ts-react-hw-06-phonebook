import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../@types/types";

const initialState: Contact[] = [
	{ name: "an", number: "380123123123", id: 1 },
	{ name: "na", number: "380123123123", id: 2 },
];

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		addContact: {
			reducer(contacts, action: PayloadAction<Contact>) {
				return [...contacts, action.payload];
			},
			prepare({ name, number, id = nanoid() }) {
				return {
					payload: {
						name,
						number,
						id,
					},
				};
			},
		},

		removeContact: (contacts, { payload }) => contacts.filter(contact => contact.id !== payload),
	},
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
