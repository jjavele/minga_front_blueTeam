import Main from "./layout/Main";
import Carousel from "./components/Carousel";
import Index from "./pages/Index";
import Welcome from "./components/Welcome";
export default function App() {
  return (
    <>
      <Main>
        <Index />
        <Welcome />
        <Carousel />
      </Main>
    </>
  );
}
/* !!!!! */