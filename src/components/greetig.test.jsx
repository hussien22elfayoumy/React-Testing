import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Greeting from './greeting';

/**
 * Writing Tests - The rhee 'A's
 *
 * 1- Arrange => set up the test data, test condition and test environment
 * 2- Act => Run logic that sould be testd (e.g. execute function)
 * 3- Assert => compare execution results with expected results
 */

describe('Greeting component', () => {
  test('renders "Hello world!" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act ... nothing here

    // Assert
    const outputElement = screen.getByText('Hello world!');
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "It\'s good to see you!" if the button NOT Clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button is clicked', async () => {
    // Arrenge
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "It\'s good to see you!" if the button is clicked', async () => {
    // Arrenge
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("It's good to see you!"); // will returen null not throwin an error
    expect(outputElement).toBeNull();
  });
});
