import "./css/App.css";
import ChattingBox from "./components/ChattingBox";
import  {ContextProvider}  from "./Context";
function App() {
  return (
    <div className="main__app__container">
      <ContextProvider>
        <ChattingBox />
    </ContextProvider>
      </div>
  );
}

export default App;
