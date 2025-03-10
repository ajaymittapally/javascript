import Header from './Header'
import Entry from './Entry'
import data from './data'




function App() {
  const info = data.map((e)=>{
    return(
      <Entry
      key={e.id}
        e={e}
      />
    )
  })
 return(
  <>
 <Header/>
 {info}
 
 
 </>
 )
}

export default App
