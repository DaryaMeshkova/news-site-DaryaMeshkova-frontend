import { render, screen } from '@testing-library/react';
import App from './app';
import MainPage from './pages/MainPage/MainPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("tag changes", async () => {
  render(<MainPage />);

  expect(await screen.findByText(/tag: none/i)).toBeInTheDocument();

  const selectLabel = /rate/i;
  const selectEl = await screen.findByLabelText(selectLabel);

  expect(selectEl).toBeInTheDocument();

  userEvent.click(selectEl);

  const optionsPopupEl = await screen.getByRole("listbox", {
    name: selectLabel
  });

  userEvent.click(within(optionsPopupEl).getByText(/new/i));

  expect(
    await screen.findByText(/tag: new/i)
  ).toBeInTheDocument();
});

test('should has the new value', async () => {
  // const user = userEvent.setup();
  const onChangeMock = jest.fn();
  const { getByRole, rerender } = render(<Input value="" onChange={onChangeMock} />);

  const input = getByRole('textbox');
  expect(input).toHaveValue('');

  rerender(<Input value="new input value" onChange={onChangeMock} />);

  expect(input).toHaveValue('new input value');
});

test('should correctly set default option', () => {
  render(<App />)
  expect(screen.getByRole('option', { value: 'all' }).selected).toBe(true)
})

test('should display the correct number of options', () => {
  render(<App />)
  expect(screen.getAllByRole('option').length).toBe(3)
})
Change 