import React from "react";
import {
  Header,
  DateInput,
  FloatingActionButton,
  TextField,
  Tag,
  Footer,
} from "../../../components";
import EditIcon from "@mui/icons-material/Edit";
import { Main, DateSumary, DataSumary, EditButton } from "./Note.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Project } from "../../../services/interface";

export const Note: React.FC = () => {
  const [startDate, setStartDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState<string | undefined>("");
  const [title, setTitle] = React.useState("");
  const [priority, setPriority] = React.useState("Normal");
  const [description, setDescription] = React.useState<string | undefined>("");
  const [tags, setTags] = React.useState<string[]>([]);
  const location = useLocation();
  const [noteID] = React.useState(
    Number(location.pathname.split("/").slice(-1)[0])
  );
  const [projects, actuatProject] = useSelector(
    (state: RootState): [Project[], number] => [
      state.project.projects,
      state.project.actuatProject,
    ]
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    const filteredNote = projects[actuatProject].notes.filter(note => note.id === noteID);
    setTitle(filteredNote[0].title);
    setStartDate(filteredNote[0].startDate);
    setDueDate(filteredNote[0].dueDate);
    setPriority(filteredNote[0].priority);
    console.log(filteredNote[0].priority);
    setDescription(filteredNote[0].description);
    if(filteredNote[0].tags !== undefined) {
      setTags(filteredNote[0].tags);
    }
  }, [actuatProject, noteID]);

  const onClickEditNote = () => {
    const id = noteID;
    navigate("/notepad/edit/" + id);
  };

  return (
    <React.Fragment>
      <Header />
      <Main>
        <DataSumary>
          <TextField
            name="title"
            label="Título"
            value={title}
            disabled={true}
            rows={1}
          />
          <TextField
            name="priority"
            value={priority}
            label="Prioridade"
            disabled={true}
            required={true}
          />
        </DataSumary>
        <DateSumary>
          <DateInput
            name="start-date"
            label="Data de inicío"
            value={startDate}
            disabled={true}
            required={true}
          />
          {dueDate !== "" ?
            <DateInput
              name="due-date"
              label="Data de vencimento"
              value={dueDate}
              disabled={true}
              required={false}
            /> : ""}
        </DateSumary>
        <TextField
          name="description"
          label="Descrição"
          value={description}
          disabled={true}
          required={true}
          multiline={true}
          minRows={5}
        />
        {tags.map((item) => (
          <Tag label={item} />
        ))}
        <EditButton>
          <FloatingActionButton onClick={onClickEditNote}>
            <EditIcon />
          </FloatingActionButton>
        </EditButton>
      </Main>
      <Footer/>
    </React.Fragment>
  );
};

