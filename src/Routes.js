import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

const RoutesAux = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesAux
