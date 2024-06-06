import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../search/Search';
import "@testing-library/jest-dom/extend-expect";

test('expect input', async () => {
  const setSearchVAlue = jest.fn();
  render(<Search setSearchValue={setSearchVAlue} searchValue='someValue'/>);
  const input = screen.getByTestId('input')
  fireEvent.change(input, {target: {value: 'someValue'}});
  expect(input.value).toBe('someValue')
});
