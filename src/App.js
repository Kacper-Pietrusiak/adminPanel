import Home from "./components/views/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/views/login/Login";
import List from "./components/views/list/List";
import Single from "./components/views/single/Single";
import New from "./components/views/new/New";
import './app.scss'
import {userInputs} from "./formSource";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="users">
                            <Route index element={<List/>}/>
                            <Route path=":userId" element={<Single/>}/>
                            <Route path="new" element={<New inputs={userInputs} title='Add New User'/>}/>
                        </Route>
                        <Route path="products">
                            <Route index element={<List/>}/>
                            <Route path=":productId" element={<Single/>}/>
                            <Route path="new" element={<New inputs={userInputs} title='Add new product'/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
