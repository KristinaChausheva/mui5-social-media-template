import { Button, Fab, styled } from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"
import AddIcon from "@mui/icons-material/Add"

import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
function App() {
  return (
    <div>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  )
}

export default App
