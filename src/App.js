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
import Freeplay from "./pages/Freeplay";

// layouts
import RootLayout from "./layouts/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/NoteGoat/" element={<RootLayout></RootLayout>}>
      <Route index element={<Splash></Splash>}></Route>
      <Route path="/NoteGoat/main" element={<Main></Main>}></Route>
      <Route path="/NoteGoat/sightread" element={<SightRead></SightRead>}></Route>
      <Route path="/NoteGoat/settings" element={<Settings></Settings>}></Route>
      <Route path="/NoteGoat/achievements" element={<Achievements></Achievements>}></Route>
      <Route path="/NoteGoat/tutorial" element={<Tutorial></Tutorial>}></Route>
      <Route path="/NoteGoat/freeplay" element={<Freeplay></Freeplay>}></Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
