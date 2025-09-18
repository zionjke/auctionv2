import { LoginFormLazy as LoginForm } from './ui/LoginForm/LoginFormContainer.lazy';
import { loginService } from './model/services/loginService/loginService';
import { checkAuthService } from './model/services/checkAuthService/checkAuthService';
import { logoutService } from './model/services/logoutService/logoutService';
import { loginBySecretKeyService } from './model/services/loginBySecretKeyService/loginBySecretKeyService';

export {
    LoginForm,
    loginService,
    checkAuthService,
    logoutService,
    loginBySecretKeyService,
};
