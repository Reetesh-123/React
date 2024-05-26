import React from 'react'

 function MemoComp({name}) {
    console.log('Memo Component render')
  return (
    <div>Memo Component {name}</div>
  )
}
 export default React.memo(MemoComp)