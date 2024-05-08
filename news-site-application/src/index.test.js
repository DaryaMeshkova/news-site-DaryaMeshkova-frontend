import { render, screen } from '@testing-library/react';
import {userEvent, within} from '@testing-library/user-event' ;
import '@testing-library/jest-dom'
import NewItem from './redux/containers/NewItem';

test('renders learn react link', () => {
  jest.mock("react-router-dom");
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("tag changes", async () => {

  expect(await screen.findByText(/tag: none/i)).toBeInTheDocument();

  const selectLabel = /rate/i;
  const selectEl = await screen.findByLabelText(selectLabel);

  expect(selectEl).toBeInTheDocument();

  userEvent.click(selectEl);

  const optionsPopupEl = await screen.getByTestId("box", {
    name: selectLabel
  });

  userEvent.click(within(optionsPopupEl).getByText(/new/i));

  expect(
    await screen.findByText(/tag: new/i)
  ).toBeInTheDocument();
});

test('all elem', async () => {
  jest.mock("react-router-dom");
  const MOCK = {author: 'someValue', title:'someTitle', text: 'comeText'}

  const { getByTestId } = render(<NewItem {...MOCK} />);

  ["news", "author", "title", "text"].forEach((id) =>
  expect(getByTestId(id)).toBeInTheDocument()
);
});

test('element contant', async () => {
  jest.mock("react-router-dom");
  const MOCK = {author: 'someValue', title:'someTitle', text: 'comeText'}

  const { getByTestId, } = render(<NewItem {...MOCK} />);
  const news = getByTestId("news");
  const author = getByTestId("author");
  const title = getByTestId("title");
  const text = getByTestId("text");

  ["author", "title", "text"].forEach((elem) =>
  expect(news.toBeInTheDocument(elem))
);
expect(title.textContent).toContain(MOCK.titleCard);
expect(author.textContent).toContain(MOCK.bodyCard);
expect(text.textContent).toHaveAttribute(MOCK.imagePath);
});

test('should correctly set default option', () => {
  expect(screen.getByTestId('tag', { value: 'all' }).selected).toBe(true)
})
