import {
   RouterProvider,
   Route,
   createBrowserRouter,
   createRoutesFromElements
  } from "react-router-dom";

//pages
import Sightread from "./pages/Sightread";
import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Performance from "./pages/Performance";

// layouts
import RootLayout from "./layouts/RootLayout";
import Settings from "./pages/Settings";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Splash></Splash>}></Route>
      <Route path="main" element={<Main></Main>}></Route>
      <Route path="sightread" element={<Sightread></Sightread>}></Route>
      <Route path="performance" element={<Performance></Performance>}></Route>
      <Route path="settings" element={<Settings></Settings>}></Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
