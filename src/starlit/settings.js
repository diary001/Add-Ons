export const SETTING_KEYS = {
	chromas: 'addon.starlit.chromas',
	chromaAnimations: 'addon.starlit.chroma_animations',
	overSevenTv: 'addon.starlit.over_seventv',
	badges: 'addon.starlit.badges',
};

export class Settings extends FrankerFaceZ.utilities.module.Module {
	constructor(...args) {
		super(...args);

		this.inject('settings');

		this.settings.add(SETTING_KEYS.chromas, {
			default: true,
			ui: {
				path: 'Add-Ons > Starlit >> Chromas',
				title: 'Chromas',
				description: 'Paint usernames with the Starlit chroma the player wears.',
				component: 'setting-check-box',
			}
		});

		this.settings.add(SETTING_KEYS.chromaAnimations, {
			default: true,
			ui: {
				path: 'Add-Ons > Starlit >> Chromas',
				title: 'Animated chromas',
				description: 'Let animated chromas move. Off, they hold their first frame.',
				component: 'setting-check-box',
			}
		});

		this.settings.add(SETTING_KEYS.overSevenTv, {
			default: true,
			ui: {
				path: 'Add-Ons > Starlit >> Chromas',
				title: 'Starlit over 7TV paints',
				description: 'When a player wears both, show their Starlit chroma. Off, the 7TV paint wins.',
				component: 'setting-check-box',
			}
		});

		this.settings.add(SETTING_KEYS.badges, {
			default: true,
			ui: {
				path: 'Add-Ons > Starlit >> Badges',
				title: 'Badges',
				description: 'Show Starlit badges next to usernames.\n\n(Per-badge visibility can be set in [Chat >> Badges > Visibility > Add-Ons](~chat.badges.tabs.visibility))',
				component: 'setting-check-box',
			}
		});
	}
}
