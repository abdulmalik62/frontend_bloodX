import { UserManager, WebStorageStateStore } from 'oidc-client';

const oidcSettings = {
    authority: 'https://bloodx-f0vwkp.zitadel.cloud', 
    client_id: '275447824106205189@bloodx',
    redirect_uri: 'http://localhost:3000/home',
    response_type: 'code',
    post_logout_redirect_uri: 'http://localhost:3000/',
    userinfo_endpoint: 'https://bloodx-f0vwkp.zitadel.cloud/oidc/v1/userinfo', 
    response_mode: 'query',
    code_challenge_method: 'S256',
    userStore: new WebStorageStateStore({ store: window.localStorage })
};

const userManager = new UserManager(oidcSettings);

export const signIn = () => {
    return userManager.signinRedirect();
};

export const signOut = () => {
    return userManager.signoutRedirect();
};

export const getUser = async () => {
    try {
        const user = await userManager.getUser();
        if (user) {
            const response = await fetch(oidcSettings.userinfo_endpoint, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`
                }
            });
            const userInfo = await response.json();
            console.log('User Info:', userInfo);
            return userInfo;
        } else {
            console.error('User not logged in');
            return null;
        }
    } catch (error) {
        console.log('Error fetching user info:', error);
        throw error;
    }
};

export default userManager;
