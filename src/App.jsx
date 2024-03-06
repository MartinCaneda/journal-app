import "./App.css";
import EntryForm from "./components/EntryForm/entryform.jsx";
import Footer from "./components/footer/footer";
import Header from "./components/header/header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <EntryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
