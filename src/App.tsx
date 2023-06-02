import { useEffect, useState } from 'react'
import './App.css'
import { ListSubs } from './components/ListSubs'
import { Form } from './components/Form'
import { Sub, SubsResponse } from './types'

interface AppState {
  subs: Array<Sub>
}


function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])

  useEffect(()=>{
    const fetchSubs = () : Promise<SubsResponse> => {
      return  fetch(url)
      .then(res => res.json())
    }

    fetchSubs()
    .then(subs=>{
      const subsMap = subs.map(el=>{
        return {
          nick: el.nick,
          avatar: '',
          subMonths: el.months,
          description: 'string'
        }
      })

      setSubs(subsMap)
    })

  },[])

  return (
   <>
   <ListSubs subs={subs}/>
   <Form onNewSub={setSubs}/>
   </>
  )
}

export default App
