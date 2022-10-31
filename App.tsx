import Navigation from '@/navigation/Navigation'
import { store } from '@/store/store'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

export default function App() {
	return (
		<>
			<Provider store={store}>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
				<StatusBar style='light' />
			</Provider>
		</>
	)
}
