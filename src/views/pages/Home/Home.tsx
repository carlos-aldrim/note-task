import React from "react";
import {
  Main,
  Selection,
  ItemSumary,
  ProjectItem,
  ProjectLabel,
  Remove,
  AddButton,
  SelectedProject,
} from "./Home.styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { addProject, removeNote, removeProject } from "../../../store/projectSlicer";
import { FloatingActionButton, Header, Aside, CardNote } from "../../../components";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export const Home: React.FC = () => {
  const [nameProject, setNameProject] = React.useState("");
  const projects = useSelector((state: RootState) => state.project);
  const [id, setId] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeProjectInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameProject(event.target.value);
  };

  const onClickIdButton = (index: number) => () => {
    setId(index);
  };

  const onClickProjectRemove = (index: number) => () => {
    if (index > 2) {
      setId(0);
      dispatch(removeProject(index));
    }
  };

  const onClickAddNoteButton = () => {
    if (id >= 3) {
      navigate("/notepad/" + id);
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

  const onClickNoteRemove = (noteID: number) => () => {
    const projectID = id;
    dispatch(removeNote({ projectID, noteID }));
  };

  return (
    <React.Fragment>
      <Main>
        <Aside
          label="Projeto"
          onChange={onChangeProjectInput}
          onKeyDown={onKeyAddProject}
          onClickRemove={onClickCloseInput}
          value={nameProject}
        >
          {projects.projects.map((project) => (
            <ProjectItem>
              {id === project.id ? <SelectedProject onClick={onClickIdButton(project.id)}>
                {project.name.slice(0, 15)}{project.name.length > 15 ? "..." : ""}
              </SelectedProject> : <ProjectLabel onClick={onClickIdButton(project.id)}>
                {project.name.slice(0, 15)}{project.name.length > 15 ? "..." : ""}
              </ProjectLabel>}
              <Remove onClick={onClickProjectRemove(project.id)}>
                {project.id > 2 ? <CloseIcon/> : ""}
              </Remove>
            </ProjectItem>
          ))}
        </Aside>
        <Selection>
          <Header />
          <ItemSumary>
            {projects.projects[id].notes.map((note) => (
              <CardNote title={note.title} startDate={note.startDate} dueDate={note.dueDate} onClick={onClickNoteRemove(note.id)}/>
            ))}
          </ItemSumary>
        </Selection>
        {id > 2 ? <AddButton>
          <FloatingActionButton onClick={onClickAddNoteButton}>
            <AddIcon />
          </FloatingActionButton>
        </AddButton> : <AddButton></AddButton>}
      </Main>
    </React.Fragment>
  );
};
