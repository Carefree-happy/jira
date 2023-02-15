import styled from "@emotion/styled";
import { Button } from "antd";
import { Row } from "components/lib";
import { useAuth } from "context/auth-context";
import ProjectList from "projectList";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <HeaderItem>Logo</HeaderItem>
          <HeaderItem>项目</HeaderItem>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
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
  grid-template-columns: 10rem 20rem 1fr;
  height: 100vh;
`;

const HeaderItem = styled.h3`
  margin-right: 1rem;
`;

const Header = styled(Row)``;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
