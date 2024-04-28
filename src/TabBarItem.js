import React from 'react'

const TabBarItem = ({labelName, itemName, reqType, setReqType}) => {
	return (
		<li>
			<a
				href='#'
				className={itemName == reqType ? "selected" : null}
				onClick={() => setReqType(itemName)}
			>
				{labelName}</a>
		</li>
	)
}

export default TabBarItem