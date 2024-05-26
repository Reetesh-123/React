import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
    //   Method 1
      this.inputRef=React.createRef();
      // Method 2
      this.cbRef=null;
      this.setCbRef=element=>{
        this.cbRef=element
      }

    }
    
    componentDidMount()
    {
    //   Method 1

        // this.inputRef.current.focus();
        // console.log(this.inputRef);

    // Method 2
    if(this.cbRef)
    {
        this.cbRef.focus();
    }


    }
    // handleClick=()=>{
    //     alert(this.inputRef.current.value);
    // }
  render() {
    return (
        <>
             <div>RefsDemo</div>
            {/* Method 1 */}
            {/* <input type="text" ref={this.inputRef}/>
            <button onClick={this.handleClick}>button</button> */}

            {/* Method 2 */}
            <input type="text" ref={this.setCbRef}/>

        </>
    )
  }
}

export default RefsDemo