import React from 'react'
import TabBarItem from './TabBarItem'

const TabBar = ({ reqType, setReqType }) => {
  return (
    <div className="tabBar">
      <ul onSubmit={(e) => (e.preventDefault())}>
        <TabBarItem labelName={'Users'} itemName={'users'} reqType={reqType} setReqType={setReqType}/>
        <TabBarItem labelName={'Posts'} itemName={'posts'} reqType={reqType} setReqType={setReqType}/>
        <TabBarItem labelName={'Comments'} itemName={'comments'} reqType={reqType} setReqType={setReqType}/>
      </ul>
    </div>
  )
}

export default TabBar