import Button from "./components/Button";
import Input from "./components/Input/Input";
import React, { useState } from "react";
import Typography from "./components/Typography/Typography";
import Heading from "./components/Heading/Heading";
import Tooltip from "./components/Tooltip/Tooltip";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  return (
    <div>
      <div>
        <Button size="lg">lg, primary</Button>
        <Button size="md">md, primary</Button>
        <Button size="sm" onClick={() => handleClick("Primary Small clicked!")}>sm,primary</Button>
        <br /> <br />
        <Button variant="bordered" size="lg" disabled>lg, bordered</Button>
        <Button variant="bordered" size="md" type="submit" onClick={() => handleClick("Form Submitted!")}>md, bordered</Button>
        <Button variant="bordered" size="sm">sm, bordered</Button>
      </div>

      <div>
      <Input 
        label="Name" 
        placeholder="Enter your name" 
        value={"Ivan Ivanov"} 
        onChange={handleInputChange} 
      />

      <Input 
        label="Name" 
        placeholder="Enter your name" 
        value={"Focus"} 
      />

      <Input 
        label="Name" 
        placeholder="Enter your name" 
        value={"Danger"} 
        danger={true} 
      />
      </div>

      <div>
        <Typography textSize="sm">SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</Typography>
        <Typography textSize="md">MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Typography textSize="lg">LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
      </div>

      <div>
        <Heading level={1}>H1. Heading</Heading>
        <Heading level={2}>H2. Heading</Heading>
        <Heading level={3}>H3. Heading</Heading>
        <Heading level={4}>H4. Heading</Heading>
        <Heading level={5}>H5. Heading</Heading>
        <Heading level={6}>H6. Heading</Heading>
      </div>

      <div className="tooltip-demo">
        <Tooltip text="Top" position="top">
          <div className="tooltip-target">Top tooltip</div>
        </Tooltip>
        <Tooltip text="Left" position="left">
          <div className="tooltip-target">Left tooltip</div>
        </Tooltip>
        <Tooltip text="Right" position="right">
          <div className="tooltip-target">Right tooltip</div>
        </Tooltip>
        <Tooltip text="Bottom" position="bottom">
            <div className="tooltip-target">Bottom tooltip</div>
        </Tooltip>
      </div>


      <div>
        <Accordion title="Accordion 1" defaultOpen={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion title="Accordion 2" defaultOpen={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Accordion>
      </div>
    </div>

    
  );
}

export default App;

