
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  const titles = ["first","second","third"]
  
  return (
    <>
      {titles.map(title => {
        return (
          <Button title={title} />
        )
      })}
    </>
  )
}

export default App