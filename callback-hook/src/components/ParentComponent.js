import React,{useState,useCallback} from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(50000)

    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary])
  return (
        <>
            <Title/>
            <Count text="Age" count={age} />
            <Button handleclick={incrementAge}>Increment Age</Button>
            <Button handleclick={incrementSalary}>Increment Salary</Button>
            <Count text="Salary" count={salary} />

        </>
  )
}

export default ParentComponent