import React from 'react'
import useExplorerName from '../store/useExplorerName'

const DashboardPage = () => {
  const {explorerName} = useExplorerName()
  return (
    <div>
      <h2 className="hello-msg">Wellcome {explorerName}</h2>
    </div>
  )
}

export default DashboardPage