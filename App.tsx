import Navigation from '@/navigation/Navigation'
import { persistor, store } from '@/store/store'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient()

export default function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<SafeAreaProvider>
							<Navigation />
						</SafeAreaProvider>
					</QueryClientProvider>
					<StatusBar style='light' />
				</PersistGate>
			</Provider>
		</>
	)
}
