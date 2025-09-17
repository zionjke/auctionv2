import LoginFormContainer from './ui/LoginForm/LoginFormContainer';
import { loginService } from './model/services/loginService/loginService';
import { checkAuthService } from './model/services/checkAuthService/checkAuthService';
import { logoutService } from './model/services/logoutService/logoutService';
import { loginBySecretKeyService } from './model/services/loginBySecretKeyService/loginBySecretKeyService';

export {
    LoginFormContainer as LoginForm,
    loginService,
    checkAuthService,
    logoutService,
    loginBySecretKeyService,
};
