import LoginPage from './pages/LoginPage';

test('if utils automatically', () => {
    // Public methods of `utils` are now mock functions
    expect(LoginPage.authorize.mock).toBeTruthy();
    expect(LoginPage.isAuthorized.mock).toBeTruthy();

    LoginPage.authorize.mockReturnValue('mocked_token');
    LoginPage.isAuthorized.mockReturnValue(true);

    expect(LoginPage.authorize()).toBe('mocked_token');
    expect(LoginPage.isAuthorized('not_wizard')).toBeTruthy();
});