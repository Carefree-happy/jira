import React from "react";
import List from "./List";
import SearchList from "./SearchList";
import { useState } from "react";
import { useDebounce } from "common/common";
import styled from "@emotion/styled";
import { useUsers } from "common/user";
import { useProjects } from "common/project";
import { Typography } from "antd";

const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 2000)

  const { data: users } = useUsers()

  const { isLoading, error, data: list } = useProjects(debounceParam)

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchList users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List isLoading={isLoading} users={users || []} list={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem
`

export default ProjectList;
