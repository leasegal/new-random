import {Table} from './Table'

let arr =[]
for(let i=0;i<32;i++){arr.push(i)}

function App() {
  return (
      <div className='flex'>
        {arr.map((el,i)=>
          <Table key={i} number={el}/>)}
      </div>    
  );}

export default App;


