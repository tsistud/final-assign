import Button from "./components/Button";

function App() {
  return (
    <div>
      {/* <Button variant="bordered">Confirm</Button> */}
      <Button size="sm">Confirm</Button>
      {/* <Button>Cancel</Button> */}
      <Button size="md">Confirm</Button>
      <Button size="lg">Confirm</Button>
      <br />
      <Button variant="bordered" size="sm">Confirm</Button>
      <Button variant="bordered" size="md">Confirm</Button>
      <Button variant="bordered" size="lg">Confirm</Button>
    </div>
  );
}

export default App;

