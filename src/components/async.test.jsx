import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Async from './async';

describe('Async component', () => {
  test('renders posts if request is successed', async () => {
    window.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 'p1', title: 'Product title' }]),
      })
    );

    render(<Async />);

    const listItemsElements = await screen.findAllByRole('listitem');
    expect(listItemsElements).not.toHaveLength(0);
    expect(listItemsElements[0]).toHaveTextContent('Product title');
  });
});
