import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
  it("Renders App", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("app")).toHaveClass("App");
  });
});
