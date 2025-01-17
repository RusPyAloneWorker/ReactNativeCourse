import {LangType} from "./LangType";
import LangService from "./LangService";
import en from "./localization/en.json";
import ru from "./localization/ru.json";

const resources = {
	en: en,
	ru: ru,
};

class LangStore {
	lang: LangType | undefined;
	private langService: LangService;

	constructor() {
		this.langService = new LangService()
	}

	changeLang = async (newLang: LangType) => {
		this.lang = newLang;

		await this.langService.changeLang(newLang);
	};

	switchLang = async () => {
		let currentLang = await this.getLang();

		await this.changeLang(currentLang == LangType.RU ? LangType.EN : LangType.RU);
	}

	getLang = async () => {
		if (!this.lang) {
			this.lang = await this.langService.getLang();
		}

		return this.lang;
	};
}

const langStore = new LangStore();
export default langStore;
