import { createSlice } from "@reduxjs/toolkit";
import { Note, Project } from "../services/interface";

const initialState = {
  nextId: 3,
  projects: [
    { id: 0, name: "Caixa de Entrada", notes: [] as Note[], },
    { id: 1, name: "Hoje", notes: [] as Note[], },
    { id: 2, name: "Essa Semana", notes: [] as Note[], },
  ] as Project[]
};

const uniqueID = () => {
  return Math.floor(Math.random() * Date.now());
};

export const projectSlicer =  createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, { payload }) => {
      const newProject = {
        id: state.nextId,
        name: payload,
        notes: [],
      };
      state.nextId += 1;
      state.projects.push(newProject);
    },
    removeProject: (state, { payload }) => {
      state.projects = state.projects.filter(project => project.id !== payload);
    },
    addNote: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if(project.id === payload.projectID) {
          const newNote: Note = {
            id: uniqueID(),
            ...payload.note,
            state: "Novo",
            completed: true,
          }
          project.notes.push(newNote);
        }
        return project;
      });
    },
    removeNote: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if(project.id === payload.projectID) {
          project.notes = project.notes.filter(note => note.id !== payload.noteID);
        }
        return project;
      });
    },
  },
});

export const { addProject, removeProject, addNote, removeNote } = projectSlicer.actions;

export default projectSlicer.reducer;
