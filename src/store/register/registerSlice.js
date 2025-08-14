import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        isSaving: false,
        messageSaved: '',
        participantForm: {},
        // participantForm: {
        //     id: 'ABC123',
        //     title: '',
        //     autor: '',
        //     coautor1: '',
        //     coautor2: '',
        //     coautor3: '',
        //     ...
        // }
    },
    reducers: {
        savingNewParticipantForm: (state) => {
            state.isSaving = true;
        },
        addNewEmptyParticipantForm: (state, action) => {
            state.participantForm = action.payload;
            state.isSaving = false;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        setParticipantForm: (state, action) => {
            state.participantForm = action.payload;
        },
        updateParticipantForm: (state, action) => {
            state.isSaving = false;
            state.participantForm = action.payload;

            state.messageSaved = `${action.payload.titulo}, actualizada correctamente`;
        },
        clearParticipantFormLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.participantForm = {};
        },
        clearMessageSaved: (state) => {
            state.messageSaved = '';
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyParticipantForm,
    clearMessageSaved,
    clearParticipantFormLogout,
    savingNewParticipantForm,
    setParticipantForm,
    setSaving,
    updateParticipantForm,
} = registerSlice.actions;