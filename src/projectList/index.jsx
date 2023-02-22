import React from "react";
import List from "./List";
import SearchList from "./SearchList";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "common/common";
import { useHttp } from "common/http";
import styled from "@emotion/styled";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers)
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchList users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem
`

export default ProjectList;
