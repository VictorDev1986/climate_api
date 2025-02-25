import styles from "./App.module.css"
import Form from "./components/form/form"
import userWeather from "./hooks/userWeather"

function App() {
    
  const { fetchWeather } = userWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador del clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather = {fetchWeather}
        />
        <p>2</p>
      </div>
    </>
  )
}

export default App
