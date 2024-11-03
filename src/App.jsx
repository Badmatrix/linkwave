import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AppLayout from "./Components/AppLayout";
import AddLinksPage from "./Pages/AddLinksPage";
import PreviewPage from "./Pages/PreviewPage";
import UpdateProfile from "./Pages/UpdateProfile";

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
          <Route path="/" index element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="link" />} />
            <Route path="link" element={<AddLinksPage />} />
            <Route path="profile" element={<UpdateProfile />} />
          </Route>
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
