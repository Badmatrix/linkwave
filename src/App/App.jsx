import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../Layouts/Pages/PageNotFound";
import AppLayoutPage from "../Layouts/Pages/AppLayoutPage";
import HomePage from "../Layouts/Pages/HomePage";
import CreateAccountPage from "../Layouts/Pages/CreateAccountPage";
import LoginFormPage from "../Layouts/Pages/LoginPage";
import PreviewPage from "../Layouts/Pages/PreviewPage";
import UpdateLinks from "../Layouts/Profile/UpdateLinks";
import UpdateProfile from "../Layouts/Profile/UpdateProfile";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 6 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<AppLayoutPage />}>
            <Route index element={<Navigate replace to="link" />} />
            <Route path="link" element={<UpdateLinks />} />
            <Route path="profile" element={<UpdateProfile />} />
          </Route>
          <Route index path="/" element={<HomePage />} />
          <Route index path="login" element={<LoginFormPage />} />
          <Route path="signup" element={<CreateAccountPage />} />
          <Route path="preview" element={<PreviewPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
