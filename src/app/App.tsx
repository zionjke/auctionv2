import React from 'react'
import './styles/index.scss'
import { MainLayout } from 'app/layouts'
import { IntlProvider } from 'react-intl'

const App = () => {
  return (
        <IntlProvider locale="en">
            <div className="app">
                <MainLayout/>
            </div>
        </IntlProvider>
  )
}

export default App
