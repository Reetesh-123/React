import React from 'react'

export default function Column() {
    const items=[]

  return (

        <React.Fragment>
            {/* {
                item.map(item=>({
                    <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <h1>{item.title}</h1>
                    </React.Fragment>
                }))
            } */}

            <td>Name</td>
            <td>React</td>
        </React.Fragment>
  )
}
