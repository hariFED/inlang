export type LocalStorageSchema = {
	/**
	 * Reflects https://docs.github.com/en/rest/users/users#get-the-authenticated-user
	 */
	user?: {
		encryptedAccessToken: string;
		username: string;
		avatarUrl: string;
	};
};