const { formatJson, formatJsonFailed } = require('../lib/format');

const mockJson = '{"result":true, "count":42}';
const mockJsonWithoutQuotes = '{a:1,b:2,c:{d:1,e:[1,2]}}';
const mockBadJson = '{resulttrue, "count":42}';

describe('json', () => {
    test('Successfully formatted', () => {
        const logSpy = jest.spyOn(console, 'log');
        const replaceSpy = jest.spyOn(String.prototype, 'replace');
        const stringifySpy = jest.spyOn(JSON, 'stringify');

        formatJson(mockJson);

        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(replaceSpy).toHaveBeenCalledTimes(1);
        expect(stringifySpy).toHaveBeenCalledTimes(1);
        expect(logSpy).not.toBeCalledWith(formatJsonFailed);
    });

    test('Successfully formatted without quotes', () => {
        const logSpy = jest.spyOn(console, 'log');
        const replaceSpy = jest.spyOn(String.prototype, 'replace');
        const stringifySpy = jest.spyOn(JSON, 'stringify');

        formatJson(mockJsonWithoutQuotes);

        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(replaceSpy).toHaveBeenCalledTimes(1);
        expect(stringifySpy).toHaveBeenCalledTimes(1);
        expect(logSpy).not.toBeCalledWith(formatJsonFailed);
    });

    test('Failed to format', () => {
        const logSpy = jest.spyOn(console, 'log');

        formatJson(mockBadJson);

        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toBeCalledWith(formatJsonFailed);
    });
});