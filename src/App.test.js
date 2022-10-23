import { render, screen } from '@testing-library/react';
import App from './App';
import HomePage from './pages/HomePage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Ошибка");
  expect(linkElement).toBeInTheDocument();
});

describe('article tests', () => {
  describe('snapshot tests', () => {
    it('matches snapshot with article', () => {
      render(<HomePage />);
      expect(screen).toMatchSnapshot();
    });

  });
  describe('functionality tests', () => {
    it('renders placeholder when no article present', () => {
      render(<HomePage />);
      const placeholder = screen.getByText('Логин');
      expect(placeholder).toHaveClass('post-empty');
    });

  });
});