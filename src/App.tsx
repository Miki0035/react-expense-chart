import { Footer, HeaderSection, MainSection } from "./components";

const App = () => {
  return (
    <main className="flex flex-col max-w-96 h-100dvh items-center">
      <HeaderSection />
      <MainSection />
      <Footer />
    </main>
  );
};

export default App;
