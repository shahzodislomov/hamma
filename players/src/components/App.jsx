import PlayersAddForm from './Players-add-form.jsx'
import PlayersFilter from './PLayers-filter.jsx'
import PlayersList from './players-list.jsx'

const App = () => {
	return (
		<div className='h-screen w-full relative app'>
			<div className='absolute inset-0 bg-black/80 blur-3xl z-10' />

			<div className='grid grid-cols-2 gap-4 container max-w-6xl mx-auto h-full z-50 relative pt-12'>
				<PlayersList />
				<div>
					<PlayersAddForm />
					<PlayersFilter />
				</div>
			</div>
		</div>
	)
}

export default App
