import { render, fireEvent } from '@testing-library/react';
import Button from '../../../components/ui/Button';
import '@testing-library/jest-dom/extend-expect'


test('renders button with correct text', () => {
  const buttonText = 'Click Me';
  const onClick = jest.fn();

  const { getByText } = render(<Button onClick={onClick}>{buttonText}</Button>);
  const button = getByText(buttonText);
  expect(button).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);
  const button = getByText('Click Me');
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('renders disabled button when disabled prop is true', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick} disabled>Click Me</Button>);
  const button = getByText('Click Me') as HTMLButtonElement;
  expect(button.disabled).toBe(true);
});

test('applies custom class name to button', () => {
  const className = 'custom-class';
  const { getByText } = render(<Button onClick={() => {}} className={className}>Click Me</Button>);
  const button = getByText('Click Me');
  expect(button).toHaveClass(className);
});
