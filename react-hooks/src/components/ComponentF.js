import React from 'react'
import {Usercontext,Channelcontext} from '../App'
function ComponentF() {
  return (
    <div>
            <Usercontext.Consumer>
                {
                    user=>{
                        return (
                            <Channelcontext.Consumer>
                            {channel=>{
                                return (
                                    <div> UserContext Value is {user}, ChannelContext value is {channel}</div>
                                )
                            }}
                            </Channelcontext.Consumer>
                        )
                    }
                }
            </Usercontext.Consumer>
    </div>
  )
}

export default ComponentF