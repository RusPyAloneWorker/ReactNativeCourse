import { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';
import Navigation, {LINKING_PREFIX} from './Navigation.ts';
import { getActionFromState, getStateFromPath } from '@react-navigation/native';

export class DeepLinking {
	static getPathWithoutPrefix = (url: string) => {
		let path = '';
		DeepLinking.linking.prefixes.forEach(prefix => {
			if (url.indexOf(prefix) > -1) {
				path = url.replace(prefix, '');
				return;
			}
		});
		return path;
	};

	static getActionFromState = (config: any, url: string) => {
		const path = DeepLinking.getPathWithoutPrefix(url);
		const state = getStateFromPath(path, config);
		if (!state) {
			return;
		}
		return getActionFromState(state, config);
	};

	static handleInitialNavigate = async (initialUrl: string | null) => {
		if (initialUrl === null) {
			return;
		}
		await DeepLinking.handleNavigate(initialUrl, true); // <- Данный метод добавим далее
	};

	static handleNavigate = async (url: string, isInitialNavigate?: boolean) => {
		const action = DeepLinking.getActionFromState(DeepLinking.linking.config, url); // <- Будет далее
		switch (action?.type) {
			case 'NAVIGATE':
				const { name, params } = action.payload;
				if (name && params) {
					if (isInitialNavigate) {
						Navigation.replace(name, params); // наш кастомный навигатор
						return;
					}
					Navigation.navigate(name, params); // наш кастомный навигатор
				}
				return;
		}
	};

	static linking: LinkingOptions<{}> = {
		prefixes: [LINKING_PREFIX],
		config: {
			screens: {
				Home: "",
				About: "About"
			},
		},

		getInitialURL() {
			return null;
		},

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		subscribe(listener: (url: string) => void) {
			const linkingSubscription = Linking.addEventListener('url', async ({url}) => {
				if (url === null) {
					return;
				}
				await DeepLinking.handleNavigate(url);
			});
			return () => {
				linkingSubscription.remove();
			};
		},

	};
}
