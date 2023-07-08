import './App.scss'
import React from 'react'
import { Header } from './components'

const App: React.FC = () => {
	return (
		<>
			<section className='app'>
				<Header />
				<p>ok</p>
				<button>Test</button>
			</section>
		</>
	)
}

export default App
