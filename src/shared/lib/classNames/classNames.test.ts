import { classNames } from './classNames';

describe('classNames', () => {
    test('with only param', () => {
        expect(classNames('a')).toBe('a');
    });

    test('with additional params', () => {
        expect(classNames('a', {}, ['c'])).toBe('a c');
    });

    test('with mods', () => {
        expect(classNames('a', { b: true, e: false }, ['c'])).toBe('a b c');
    });

    test('with mod undefined', () => {
        expect(classNames('a', { b: true, e: undefined }, ['c'])).toBe('a b c');
    });
});
