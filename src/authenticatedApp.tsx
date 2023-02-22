import React from "react";
import styled from "@emotion/styled";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import { Row } from "components/lib";
import { useAuth } from "context/auth-context";
import ProjectList from "projectList";
import { ReactComponent as SoftwareLogo } from "./assets/software-logo.svg";

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();

  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"180"} color={"rgb(38, 132, 255)"} />
          <HeaderItem>项目</HeaderItem>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>Hi, {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectList />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const HeaderItem = styled.h3`
  margin-right: 1rem;
`;

const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div`
  margin-right: 60px;
`;
const Main = styled.main``;
