import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import UserContextProvider from "./context/UserContextProvider.tsx";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import UserContextProvider from "./context/UserContextProvider.tsx";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// 1. the query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
      refetchOnWindowFocus: false,
    },
  },
});

// 2. the persister
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <QueryClientProvider client={queryClient}>
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <ReactQueryDevtools initialIsOpen={false} />

    <UserContextProvider>
      <ToastContainer />
      <App />
    </UserContextProvider>
  </PersistQueryClientProvider>

  // </QueryClientProvider>
);
