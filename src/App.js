import Home from "./components/views/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/views/login/Login";
import List from "./components/views/list/List";
import Single from "./components/views/single/Single";
import New from "./components/views/new/New";
import './app.scss'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}></Route>
                        <Route path="login" element={<Login/>}></Route>
                        <Route path="users">
                            <Route index element={<List/>}></Route>
                            <Route path=":userId" element={<Single/>}></Route>
                            <Route path="new" element={<New/>}></Route>
                        </Route>
                        <Route path="products">
                            <Route index element={<List/>}></Route>
                            <Route path=":productId" element={<Single/>}></Route>
                            <Route path="new" element={<New/>}></Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
