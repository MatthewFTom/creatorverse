import { Route, Routes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import Credits from './pages/Credits'

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </main>
  )
}

export default App
