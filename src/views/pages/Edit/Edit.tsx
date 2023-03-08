import React from "react";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import {
  Header,
  DateInput,
  SelectionMenu,
  FloatingActionButton,
  TextField,
  InputTag,
  Tag,
  Footer,
} from "../../../components";
import SaveIcon from "@mui/icons-material/Save";
import { Main, DateSumary, DataSumary, SaveButton } from "./Edit.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { updateNote } from "../../../store/projectSlicer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Note, Project } from "../../../services/interface";

export const Edit: React.FC = () => {
  const [startDate, setStartDate] = React.useState("");
  const [dueDate, setDueDate] = React.useState<string | undefined>("");
  const [title, setTitle] = React.useState("");
  const [priority, setPriority] = React.useState("Normal");
  const [description, setDescription] = React.useState<string | undefined>("");
  const [tag, setTag] = React.useState("");
  const [tags, setTags] = React.useState<string[]>([]);
  const [count, setCount] = React.useState(0);
  const priorityOptions = [
    { name: "Baixa", value: "Baixa" },
    { name: "Normal", value: "Normal" },
    { name: "Alta", value: "Alta" },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  React.useEffect(() => {
    const filteredNote = projects[actuatProject].notes.filter(note => note.id === noteID);
    setTitle(filteredNote[0].title);
    setStartDate(filteredNote[0].startDate);
    setDueDate(filteredNote[0].dueDate);
    setPriority(filteredNote[0].priority);
    setDescription(filteredNote[0].description);
    if(filteredNote[0].tags !== undefined) {
      setTags(filteredNote[0].tags);
      setCount(tags.length);
    } else {
      setCount(0);
    }
  }, []);

  const onChangeStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = moment
      .utc(new Date(event.target.value))
      .format("YYYY-MM-DD");
    setStartDate(newDate);
  };

  const onChangeDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = moment
      .utc(new Date(event.target.value))
      .format("YYYY-MM-DD");
    setDueDate(newDate);
  };

  const onChangeTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangePrioritySelect = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
  };

  const onChangeTagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };

  const onKeyDownTag = (event: any) => {
    if (event.keyCode === 13) {
      const newTags = [...tags];
      newTags.push("#" + tag);
      setTags(newTags);
      setTag("");
    }
  };

  const onClickAddTag = () => {
    const newTags = [...tags];
      newTags.push("#" + tag);
      setTags(newTags);
      setTag("");
  };

  const onTagsRemoveClick = (item: string) => () => {
    setTags(tags.filter((element) => element !== item));
  };

  const onClickEditNote = () => {
    if (title === "") {
      return;
    }
    const id = noteID;
    const state = "Novo";
    const newNote = {
      id,
      title,
      description,
      startDate,
      dueDate,
      priority,
      state,
      tags,
    } as Note;
    const projectID = projects[actuatProject].id;
    dispatch(updateNote({ projectID, noteID, newNote }));
    navigate("/notepad/note/" + id);
  };

  const onChangeDescriptionInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
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
            onChange={onChangeTitleInput}
            required={true}
            rows={1}
          />
          <SelectionMenu
            name="priority"
            value={priority}
            label="Prioridade"
            onChange={onChangePrioritySelect}
            options={priorityOptions}
            required={true}
          />
        </DataSumary>
        <DateSumary>
          <DateInput
            name="start-date"
            label="Data de inicío"
            value={startDate}
            onChange={onChangeStartDate}
            required={true}
            minDate={moment(new Date()).format("YYYY-MM-DD")}
            maxDate={dueDate}
          />
          <DateInput
            name="due-date"
            label="Data de vencimento"
            value={dueDate}
            onChange={onChangeDueDate}
            required={false}
            minDate={startDate}
          />
        </DateSumary>
        <TextField
          name="description"
          label="Descrição"
          value={description}
          onChange={onChangeDescriptionInput}
          required={true}
          multiline={true}
          minRows={5}
        />
        <InputTag
          disabled={count < 10? false : true}
          onKeyDown={onKeyDownTag}
          value={tag}
          onChange={onChangeTagInput}
          onClick={onClickAddTag}
        >
          {tags.map((item) => (
            <Tag onDelete={onTagsRemoveClick(item)} label={item} />
          ))}
        </InputTag>
        <SaveButton>
          <FloatingActionButton onClick={onClickEditNote}>
            <SaveIcon />
          </FloatingActionButton>
        </SaveButton>
      </Main>
      <Footer/>
    </React.Fragment>
  );
};

