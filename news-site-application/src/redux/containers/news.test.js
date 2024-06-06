import { render } from '@testing-library/react';
import NewItem from '../containers/NewItem';
import "@testing-library/jest-dom/extend-expect";

test('all elem', async () => {
  jest.mock("react-router-dom");
  const MOCK = {author: 'someValue', title:'someTitle', text: 'comeText'}

  const { getByTestId } = render(<NewItem {...MOCK} />);

  ["news", "author", "title", "text"].forEach((id) =>
  expect(getByTestId(id)).toBeInTheDocument()
);
});