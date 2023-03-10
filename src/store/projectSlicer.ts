import { createSlice } from "@reduxjs/toolkit";
import { Note, Project } from "../services/interface";
import moment from "moment";

const initialState = {
  nextId: 3,
  actuatProject: 0,
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
      let filteredProject = state.projects.filter(project => project.name === payload);
      if(filteredProject.length === 0) {
        const newProject = {
          id: state.nextId,
          name: payload,
          notes: [] as Note[],
        };
        state.nextId += 1;
        state.projects.push(newProject);
      };
    },
    removeProject: (state, { payload }) => {
      const filteredProject = state.projects.filter(project => project.id === payload);
      const listID: number[] = [];
      filteredProject.map(project => {
        project.notes.map(note => {
          listID.push(note.id);
          return note;
        });
        return project;
      });
      for (let h = 0; h < 3; h++) {
        listID.forEach(id => {
          state.projects[h].notes = state.projects[h].notes.filter(note => note.id !== id)
        });
      }
      state.projects = state.projects.filter(project => project.id !== payload);
    },
    updateProject: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if(project.id === payload.id) {
          project.name = payload.name;
        }
        return project;
      });
    },
    addNote: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if(project.id === payload.projectID) {
          const newNote: Note = {
            id: uniqueID(),
            ...payload.newNote,
            state: "Novo",
            completed: true,
          }
          project.notes.push(newNote);
        }
        return project;
      });
    },
    updateNote: (state, { payload }) => {
      state.projects = state.projects.map(project => {
        if(project.id === payload.projectID) {
          project.notes = project.notes.map(note => {
            if(note.id === payload.noteID) {
              note = payload.newNote
            }
            return note;
          });
        }
        return project;
      });
    },
    updateActualProject: (state, { payload }) => {
      state.actuatProject = payload;
    },
    updateNotes: (state, { payload }) => {
      for (let j = 0; j < 3; j++) {
        state.projects[j].notes = state.projects[j].notes.filter(note => note.id !== payload.noteID);
      }
      state.projects = state.projects.map(project => {
        console.log(project.id, payload.projectID);
        if(project.id === payload.projectID) {
          const newNotes = [
            ...payload.newNotes,
          ]
          project.notes = newNotes;
        }
        return project;
      });
    },
    todayNotes: (state) => {
      const currentDate =  moment(new Date()).format("YYYY-MM-DD");
      const newListToday: Note[] = [];
      for (let a = 0; a < state.projects.length; a++) {
        if(a !== 1 && a!== 2) {
          const notesProject = state.projects[a].notes;
          for (let b = 0; b < notesProject.length; b++) {
            const note = notesProject[b];
            if (note.startDate === currentDate) {
              newListToday.push(note);
            }
          }
        }
      }
      state.projects[1].notes = newListToday;
    },
    weekNotes: (state) => {
      const currentDate =  moment(new Date()).format("YYYY-MM-DD");
      const startDateOfWeek = moment(currentDate).startOf('week');
      const dates: string[] = [];
      const newListWeek: Note[] = [];
      for(let c = 0; c < 7; c++) {
        const date = moment(startDateOfWeek.clone().add(c, 'day').toDate()).format("YYYY-MM-DD");
        dates.push(date);
      };
      dates.map((day: string) => {
        for (let d = 0; d < state.projects.length; d++) {
          if(d !== 1 && d !== 2) {
            const notesProject = state.projects[d].notes;
            for (let e = 0; e < notesProject.length; e++) {
              const note = notesProject[e];
              if (note.startDate === day) {
                const filteredElement = newListWeek.find(element => element.id === note.id);
                if(filteredElement === undefined) {
                  newListWeek.push(note);
                }
              }
            }
          }
        }
        return day;
      });
      state.projects[2].notes = newListWeek;
      state.projects[2].notes = state.projects[2].notes.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateA.getTime() - dateB.getTime(); 
      });
    },
    inboxNotes: (state) => {
      const newListInbox: Note[] = [];
      for (let f = 0; f < state.projects.length; f++) {
        if(f !== 1 && f !== 2) {
          const notesProject = state.projects[f].notes;
          for (let g = 0; g < notesProject.length; g++) {
            const note = notesProject[g];
            const filteredElement = newListInbox.find(element => element.id === note.id);
            if(filteredElement === undefined) {
              newListInbox.push(note);
            }
          }
        }
      }
      state.projects[0].notes = newListInbox;
      state.projects[0].notes = state.projects[0].notes.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateA.getTime() - dateB.getTime(); 
      });
    },
  },
});

export const { addProject, removeProject, addNote, updateActualProject, updateNotes, todayNotes, weekNotes, inboxNotes, updateProject, updateNote } = projectSlicer.actions;

export default projectSlicer.reducer;
