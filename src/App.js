import "./App.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/homepage/home.page";
import Skill from "./pages/skills/skills.component";
import { Route, Switch } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Skill} />
    </Switch>
    <Footer />
  </>
);
export default App;
