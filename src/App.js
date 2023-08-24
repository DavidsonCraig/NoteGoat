import {
   RouterProvider,
   Route,
   createBrowserRouter,
   createRoutesFromElements
  } from "react-router-dom";

//pages
import SightRead from "./pages/SightRead";
import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import Achievements from "./pages/Achievements";
import Tutorial from "./pages/Tutorial";

// layouts
import RootLayout from "./layouts/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Splash></Splash>}></Route>
      <Route path="main" element={<Main></Main>}></Route>
      <Route path="sightread" element={<SightRead></SightRead>}></Route>
      <Route path="settings" element={<Settings></Settings>}></Route>
      <Route path="achievements" element={<Achievements></Achievements>}></Route>
      <Route path="tutorial" element={<Tutorial></Tutorial>}></Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
