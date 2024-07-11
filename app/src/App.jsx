import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "@/context/authContext";
import router from "@/routes/route";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
