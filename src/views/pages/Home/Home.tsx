import React from "react";
import {
  Main,
  Selection,
  ItemSumary,
  ProjectItem,
  ProjectLabel,
  ButtonsProject,
  AddButton,
  SelectedProject,
  Icon,
  UpdateProject,
} from "./Home.styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {
  addProject,
  inboxNotes,
  removeProject,
  todayNotes,
  updateActualProject,
  updateNotes,
  updateProject,
  weekNotes,
} from "../../../store/projectSlicer";
import {
  FloatingActionButton,
  Header,
  Aside,
  CardNote,
  TextField,
  Footer,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { Note, Project } from "../../../services/interface";
import ArrowForward from "@mui/icons-material/ArrowForward";

export const Home: React.FC = () => {
  const [nameProject, setNameProject] = React.useState("");
  const [projects, actuatProject] = useSelector(
    (state: RootState): [Project[], number] => [
      state.project.projects,
      state.project.actuatProject,
    ]
  );
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [edit, setEdit] = React.useState(-1);
  const [editName, setEditName] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(todayNotes());
    dispatch(weekNotes());
    dispatch(inboxNotes());
  }, []);

  React.useEffect(() => {
    setNotes(projects[actuatProject]?.notes);
  }, [actuatProject]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    const sourceIndex = Number(event.dataTransfer.getData("index"));
    const newNotes = [...notes];
    const [removedNote] = newNotes.splice(sourceIndex, 1);
    newNotes.splice(index, 0, removedNote);
    const projectID = actuatProject;
    dispatch(updateNotes({ projectID, newNotes }));
    setNotes(newNotes);
  };

  const onChangeProjectInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameProject(event.target.value);
  };

  const onClickIdButton = (index: number, id: number) => {
    setEdit(-1);
    dispatch(updateActualProject(index));
  };

  const onClickProjectRemove = (index: number) => {
    dispatch(updateActualProject(0));
    dispatch(removeProject(index));
  };

  const onClickAddNoteButton = () => {
    if (actuatProject > 2) {
      navigate("/notepad/add");
    }
  };

  const onKeyAddProject = (event: any) => {
    if (event.keyCode === 13) {
      dispatch(addProject(nameProject));
      setNameProject("");
    }
  };

  const onClickCloseInput = () => {
    setNameProject("");
  };

  const onClickNoteRemove = (index: number, noteID: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    const projectID = projects[actuatProject].id;
    dispatch(updateNotes({ projectID, newNotes, noteID }));
    console.log(projects);
    setNotes(newNotes);
  };

  const onClickAddProject = () => {
    dispatch(addProject(nameProject));
    setNameProject("");
  };

  const onClickProjectEdit = (index: number, name: string) => {
    dispatch(updateActualProject(index));
    setEditName(name);
    setEdit(index);
  };

  const onKeyEditProject = (event: any) => {
    if (event.keyCode === 13) {
      const name = editName;
      const id = actuatProject;
      dispatch(updateProject({ name, id }));
      setEditName("");
      setEdit(-1);
    }
  };

  const onChangeEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
  };

  const onClickUpdateButton = () => {
    const name = editName;
    const id = actuatProject;
    dispatch(updateProject({ name, id }));
    setEditName("");
    setEdit(-1);
  };

  const onClickNoteEdit = (id: number) => {
    navigate("/notepad/edit/" + id)
  };

  const onClickNoteButton = (id: number) => {
    navigate("/notepad/note/" + id)
  };

  return (
    <React.Fragment>
      <Main>
        <Aside
          label="Projeto"
          onChange={onChangeProjectInput}
          onKeyDown={onKeyAddProject}
          onClickRemove={onClickCloseInput}
          onClickAdd={onClickAddProject}
          value={nameProject}
        >
          {projects.map((project, index) => (
            (edit !== project.id ? (<ProjectItem>
              {actuatProject === index ? (
                <SelectedProject
                  onClick={() => onClickIdButton(index, project.id)}
                >
                  {project.name.slice(0, 17)}
                  {project.name.length > 17 ? "..." : ""}
                </SelectedProject>
              ) : (
                <ProjectLabel
                  onClick={() => onClickIdButton(index, project.id)}
                >
                  {project.name.slice(0, 17)}
                  {project.name.length > 17 ? "..." : ""}
                </ProjectLabel>
              )}
              {project.id > 2 ? (
                <ButtonsProject>
                  <CloseIcon onClick={() => onClickProjectRemove(project.id)} />
                  <EditIcon onClick={() => onClickProjectEdit(project.id, project.name)}/>
                </ButtonsProject>
              ) : (
                ""
              )}
            </ProjectItem>) : <UpdateProject><TextField label="Nome" value={editName} onChange={onChangeEditInput} onKeyDown={onKeyEditProject} endAdornment={<Icon onClick={onClickUpdateButton}><ArrowForward/></Icon>}/></UpdateProject>)
          ))}
        </Aside>
        <Selection>
          <Header />
          <ItemSumary>
            {notes?.map((note, index) => (
              <div
                key={note.id}
                draggable
                onDragStart={(event) => handleDragStart(event, index)}
                onDrop={(event) => handleDrop(event, index)}
                onDragOver={(event) => event.preventDefault()}
              >
                <CardNote
                  title={note.title}
                  startDate={note.startDate}
                  dueDate={note.dueDate}
                  onClick={() => onClickNoteButton(note.id)}
                  onClickRemove={() => onClickNoteRemove(index, note.id)}
                  onClickEdit={() => onClickNoteEdit(note.id)}
                />
              </div>
            ))}
          </ItemSumary>
        </Selection>
        {actuatProject > 2 ? (
          <AddButton>
            <FloatingActionButton onClick={onClickAddNoteButton}>
              <AddIcon />
            </FloatingActionButton>
          </AddButton>
        ) : (
          <AddButton></AddButton>
        )}
      </Main>
      <Footer/>
    </React.Fragment>
  );
};

