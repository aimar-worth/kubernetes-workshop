import React, { useState, useEffect } from "react"
import "./App.css"

const App = () => {
  const [hasError, setErrors] = useState()
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://kubernetesrocks.nl/api/home`)
      res
        .json()
        .then((res) => setData(res))
        .catch((err) => setErrors(err))
    }

    fetchData()
  }, [])

  console.log("URL", process.env.REACT_APP_API_URL)
  console.log("DATA", data)
  console.log("ERROR", hasError)

  return (
    <div className="App">
      <h1>Kubernetes Workshop Frontend</h1>
      <h3>{data.greeting}</h3>
      {hasError ? JSON.stringify(hasError) : null}
    </div>
  )
}

export default App
