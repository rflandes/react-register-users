import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        isSaving: false,
        messageSaved: '',
        participantForms: [],
        active: null
        // active: {
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
            state.participantForms.push(action.payload);
            state.isSaving = false;
        },
        setActiveParticipantForm: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setParticipantForm: (state, action) => {
            state.participantForms = action.payload;
        },
        updateParticipantForm: (state) => {
            state.isSaving = true;
            state.participantForms = state.participantForms.map(participantForm => {

                if (participantForm.id === action.payload.id) {
                    return action.payload;
                }

                return participantForm;
            });

            state.messageSaved = `${action.payload.title}, actualizada correctamente`;
        },
        clearParticipantFormLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.participantForms = [];
            state.active = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    addNewEmptyParticipantForm,
    clearParticipantFormLogout,
    savingNewParticipantForm,
    setActiveParticipantForm,
    setParticipantForm,
    updateParticipantForm,
} = registerSlice.actions;