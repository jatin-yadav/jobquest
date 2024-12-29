import Button from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button text="Add Content" onClick={() => console.log("Button clicked")} startIcon={<PlusIcon />} />
      <Button variant="secondary" text="Share brain" onClick={() => console.log("Button clicked")} startIcon={<ShareIcon />} />
    </>
  )
}

export default App
