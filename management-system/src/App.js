import './App.css';
import Landing from "./pages/Landing"
import Error from "./pages/Error";
import Register from "./pages/Register"
import AllJobs from "./pages/dashboard/AllJobs";
import Profile from "./pages/dashboard/Profile";
import Stats from "./pages/dashboard/Stats"
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/dashboard/SharedLayout";
import Wallpaper from "./pages/dashboard/4K-wallpaper"
import CosplayAlbum from "./pages/dashboard/CosplayAlbum";
import CosplayAlbumDetail from "./pages/dashboard/CosplayAlbumDetail";

// HashRouter 切换 hash 模式
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <SharedLayout/>
                        </ProtectedRoute>
                    }>
                    <Route index element={<Stats/>}/>
                    <Route path="/all-jobs" element={<AllJobs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/4K-wallpaper" element={<Wallpaper/>}/>
                    <Route path="/cosplay-album" element={<CosplayAlbum/>}/>
                    <Route path="/cosplay-album/:id" element={<CosplayAlbumDetail/>}/>
                </Route>

                <Route path="/register" element={<Register/>}/>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
