import { Header } from "../components/Header";
import "./PageNotFound.css";

export function PageNotFound() {
  return (
    <>
      <title>Page Not Found</title>
      <Header />
      <div className="not-found-message">404 : Page not found</div>
    </>
  );
}
