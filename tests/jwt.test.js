const { decodeJwt, parseFailed } = require('../lib/jwt');
const jwt = require('jsonwebtoken');

const mockToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const mockDecodedToken = {
    "header": {
        "alg": "HS256",
        "typ": "JWT"
    },
    "payload": {
        "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
    },
    "signature": "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
};
const mockDecodedTokenFormatted = JSON.stringify(mockDecodedToken, null, 4);
jest.mock('jsonwebtoken')

describe('decode', () => {
    test('decodes good token', async () => {
        const logSpy = jest.spyOn(console, 'log');
        jwt.decode.mockReturnValue(mockDecodedToken);

        decodeJwt(mockToken);

        expect(jwt.decode).toHaveBeenCalledTimes(1);
        expect(jwt.decode).toBeCalledWith(mockToken, { complete: true });
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toBeCalledWith(mockDecodedTokenFormatted);
    });

    test('fails to decode bad token', async () => {
        const badToken = '1.1.1';
        const logSpy = jest.spyOn(console, 'log');
        jwt.decode.mockReturnValue(null);

        decodeJwt(badToken);

        expect(jwt.decode).toHaveBeenCalledTimes(1);
        expect(jwt.decode).toBeCalledWith(badToken, { complete: true });
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toBeCalledWith(parseFailed);
    });
});