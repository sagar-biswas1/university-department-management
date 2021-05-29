//http://preview.themeforest.net/item/pathshala-responsive-school-management-template/full_screen_preview/20335933?_ga=2.53411176.1336993914.1622144576-442426411.1597595355&fbclid=IwAR19qcW9S0cZkvjrGOdq1M3Zv2_9BJo4WDTVNQuNhs5zNVJV9Duao7of8eY
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminPage from "./pages/AdminPage/AdminPage";
import AllBooks from "./pages/library/AllBooks";
import ReadingList from "./pages/library/ReadingList";
import CompletedList from "./pages/library/CompletedList";

import Footer from "./components/Footer/Footer";
import MainHome from "./components/Home/MainHome/MainHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainHome} />
          <Route path="/teacher-dashboard" component={TeacherDashboard} />
          <Route path="/student-dashboard" component={StudentDashboard} />
          <Route path="/admin-dashboard" component={AdminPage} />
          <Route path="/library/all-books" component={AllBooks} />
          <Route path="/library/reading-list" component={ReadingList} />
          <Route path="/library/completed-list" component={CompletedList} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
