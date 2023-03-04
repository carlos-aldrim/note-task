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
} from "../../../components";
import SaveIcon from "@mui/icons-material/Save";
import { Main, DateSumary, DataSumary, SaveButton } from "./Notepad.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { addNote } from "../../../store/projectSlicer";
import { useDispatch } from "react-redux";

export const Notepad: React.FC = () => {
  const [startDate, setStartDate] = React.useState(moment(new Date()).format("YYYY-MM-DD"));
  const [dueDate, setDueDate] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [priority, setPriority] = React.useState("Normal");
  const [description, setDescription] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [tags, setTags] = React.useState<string[]>([]);
  const priorityOptions = [
    { name: "Baixa", value: "Baixa" },
    { name: "Normal", value: "Normal" },
    { name: "Alta", value: "Alta" },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [projectID] = React.useState(
    Number(location.pathname.split("/").slice(-1)[0])
  );

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
      tags.push("#" + tag);
      setTag("");
    }
  };

  const onTagsRemoveClick = (item: string) => () => {
    setTags(tags.filter((element) => element !== item));
  };

  const onClickCompletedNote = () => {
    if (title === "") {
      return;
    }
    const newNote = {
      title,
      description,
      startDate,
      dueDate,
      tags,
      priority,
    };
    dispatch(addNote({ projectID, note: newNote }));
    navigate("/");
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
          />
          <DateInput
            name="due-date"
            label="Data de vencimento"
            value={dueDate}
            onChange={onChangeDueDate}
            required={false}
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
          disabled={tags.length < 10 ? false : true}
          onKeyDown={onKeyDownTag}
          value={tag}
          onChange={onChangeTagInput}
        >
          {tags.map((item) => (
            <Tag onDelete={onTagsRemoveClick(item)} label={item} />
          ))}
        </InputTag>
        <SaveButton>
          <FloatingActionButton onClick={onClickCompletedNote}>
            <SaveIcon />
          </FloatingActionButton>
        </SaveButton>
      </Main>
    </React.Fragment>
  );
};
