import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./Components/Portal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faDashboard,
  faUserFriends,
  faBook,
  faLeftLong,
  faRightLong,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { UserProvider } from "./UserContext";
import DashCard from "./Components/DashCard";
import Members from "./Members";
import Books from "./Books";
import CreateMember from "./CreateMember";
import EditMember from "./EditMember";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";
import ViewMember from "./ViewMember";
import ViewBook from "./ViewBook";
import BorrowBook from "./BorrowBook";
import ReturnBook from "./ReturnBook";

library.add(
  faUserCircle,
  faDashboard,
  faUserFriends,
  faBook,
  faLeftLong,
  faRightLong,
  faBars
);
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />}>
            <Route index element={<DashCard />} />
            <Route path="members" element={<Members />} />
            <Route path="books" element={<Books />} />
            <Route path="create-member" element={<CreateMember />} />
            <Route
              path="/members/view-member/:userno"
              element={<ViewMember />}
            />
            <Route
              path="/members/edit-member/:userno"
              element={<EditMember />}
            />
            <Route path="create-book" element={<CreateBook />} />
            <Route path="/books/edit-book/:bookno" element={<EditBook />} />
            <Route path="/books/view-book/:bookno" element={<ViewBook />} />
            <Route path="borrow" element={<BorrowBook />} />
            <Route path="return" element={<ReturnBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
