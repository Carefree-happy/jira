import List from "./List";
import SearchList from "./SearchList";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "common/common";
import { useHttp } from "common/http";

const ProjectList = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 2000)
  const [list, setList] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", {data: cleanObject(debounceParam)}).then(setList)
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers)
  });

  return (
    <div>
      <SearchList users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectList;
