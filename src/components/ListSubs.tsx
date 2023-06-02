import { Sub } from "../types"
interface Prop {
    subs: Array<Sub>,
   // children: JSX.Element
}

export const ListSubs = ({subs} : Prop) => {
  return (
    <ul>
     {
      subs.map(sub=>{
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={sub.description} />
            <h4>{sub.nick} <small>{sub.subMonths}</small></h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        )
      })
     }
    </ul>
  )
}
