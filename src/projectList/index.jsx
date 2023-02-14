import List from "./List";
import SearchList from "./SearchList";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "common/common";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 2000)
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchList users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};

export default ProjectList;
