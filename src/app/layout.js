import '../styles/global.css'
import Nav from "../components/Navbar"

export default function RootLayout({ children}) {

  return (
    <html>
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
