import styled from "@emotion/styled";
import { Button } from "antd";
import { useAuth } from "context/auth-context";
import ProjectList from "projectList";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={logout}>登出</Button>
        </HeaderRight>
      </Header>

      <Nav>nav</Nav>

      <Main>
        <ProjectList />
      </Main>

      <Aside>aside</Aside>

      <Footer>footer</Footer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 10rem 20rem 1fr;
  grid-template-areas:
    "header header header"
    "nav main saide"
    "footer footer footer";
  height: 100vh;
  grid-gap: 10rem;
`;
const Header = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;
const Main = styled.main`
  grid-area: main;
`;
const Nav = styled.nav`
  grid-area: nav;
`;
const Aside = styled.aside`
  grid-area: aside;
`;
const Footer = styled.footer`
  grid-area: footer;
`;
