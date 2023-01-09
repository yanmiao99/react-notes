import './App.css';
import Landing from "./pages/Landing"
import Error from "./pages/Error";
import Register from "./pages/Register"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route*/}
                {/*    path="/react-job"*/}
                {/*    element={*/}
                {/*        <ProtectedRoute>*/}
                {/*            <SharedLayout/>*/}
                {/*        </ProtectedRoute>*/}
                {/*    }*/}
                {/*>*/}
                {/*    <Route index element={<Stats/>}/>*/}
                {/*    <Route path="/react-job/all-jobs" element={<AllJobs/>}/>*/}
                {/*    <Route path="/react-job/add-job" element={<AddJob/>}/>*/}
                {/*    <Route path="/react-job/profile" element={<Profile/>}/>*/}
                {/*</Route>*/}
                <Route path="/register" element={<Register/>}/>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
