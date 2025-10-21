import {useState} from 'react'
import Panel from '../components/Panel'

const CounterPage = () =>{
    const [count, setCount] = useState(0)
    return <Panel>
        <h1>Count is currently {count}</h1>
    </Panel>
}

export default CounterPage;