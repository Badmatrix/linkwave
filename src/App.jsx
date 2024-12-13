import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import AppLayout from "./Components/AppLayout";
import PreviewPage from "./Pages/PreviewPage";
import UpdateProfile from "./Pages/UpdateProfile";
import UpdateLinkPage from "./Pages/UpdateLinkPage";
import { AuthProvider } from "./Context/AuthProvider";
import { UserDataProvider } from "./Hooks/UserDataProvider";
import { Toaster } from "react-hot-toast";
import { UserInputtedLinkProvider } from "./Context/UserInputtedLinkProvider";

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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" index element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="app"
              element={
                <UserDataProvider>
                  <UserInputtedLinkProvider>
                    <AppLayout />
                  </UserInputtedLinkProvider>
                </UserDataProvider>
              }
            >
              <Route index element={<Navigate replace to="profile" />} />
              <Route path="link" element={<UpdateLinkPage />} />
              <Route path="profile" element={<UpdateProfile />} />
            </Route>
            <Route path="/preview/:userID" element={<PreviewPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 7000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              backgroundColor: "#f2efff",
              color: "#222121",
            },
          }}
        />
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
