import "./css/App.css";
import ChattingBox from "./components/ChattingBox";
import  {ContextProvider}  from "./Context";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <>
        <UserDetails />
    <div className="main__app__container">
      <ContextProvider>
        <ChattingBox />
    </ContextProvider>
      </div>
      </>
  );
}

export default App;
