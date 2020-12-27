import { getApplicationName, firstUpper } from '../../lib/util/text';

describe("Text util", () => {
    it('Should create the application name', () => {
        let name = 'my-sample-app';
        expect(getApplicationName(name)).toEqual('MySampleApp');
        name = 'test';
        expect(getApplicationName(name)).toEqual('Test');
        name = 'sample.app';
        expect(getApplicationName(name)).toEqual('SampleApp');
    });

    it('Should upper first', () => {
        let text = 'lower';
        expect(firstUpper(text)).toEqual('Lower');
        text = 'LOWER';
        expect(firstUpper(text)).toEqual('LOWER');
    });
});