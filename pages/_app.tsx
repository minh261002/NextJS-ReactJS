import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import axios from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutMain from "@/component/Layout/LayoutMain";
import { Provider } from "react-redux";
import { store } from "../app/store";
const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={manrope.className}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <LayoutMain>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />

              <ToastContainer />
            </LayoutMain>
          </QueryClientProvider>
        </Provider>
      </div>
    </>
  );
}
