import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Button} from 'antd';
import styled from 'styled-components'


function App() {
  function Home() {
    return (
      <Wrapper>
        <h2>Home</h2>
      </Wrapper>
    )
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  const NavWrapper = styled.section`
    display: flex;
    align-items: center;
    width: 30%;
  `
  const Wrapper = styled.div`
    background: #666;
  `

  return (
    <Router>
      <NavWrapper>
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
        <Button>
          <Link to="/users">Users</Link>
        </Button>
      </NavWrapper>
      {/* Switch是渲染区域*/}
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/users">
          <Users/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

