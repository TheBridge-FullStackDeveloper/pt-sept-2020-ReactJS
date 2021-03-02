import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';

// Testearemos que el componente Header es visible
// Testearemos que tenemos una lista, y que la lista tiene 4 elementos dentro
// Testearemos que tenemos un botón que dice Toggle dark mode
// Testearemos que tenemos una imagen con el mismo src que hay en el HTML

describe('Header', () => {
  it('component is visible', () => {
    render(<Header />);

    const header = screen.queryByTestId('header');
    expect(header).toBeVisible();
  });

  it('has a list with four elements', () => {
    render(<Header />);

    const list = screen.queryByTestId('list');
    expect(list).toBeVisible();
    expect(list.children.length).toBe(4);

    const listItems = screen.queryAllByTestId('item');
    expect(listItems.length).toBe(4);
  });

  it('has a button that contains "Toggle dark mode" text', () => {
    render(<Header />);

    const button = screen.queryByText('Toggle dark mode', { exact: false });
    expect(button).toBeVisible();
    expect(button).toHaveClass('toggle-button');
  });

  it('has an image with a valid url', () => {
    render(<Header />);

    const img = screen.queryByAltText('logo');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute(
      'src',
      'https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png'
    );
  });

  it('theme toggle works as expected', async () => {
    render(<Header />);

    const themeText = screen.queryByTestId('theme-text');
    expect(themeText).toHaveTextContent('Using light theme');

    const toggleButton = screen.queryByTestId('toggle-button');
    expect(toggleButton).toHaveTextContent('Toggle dark mode');

    // Para lanzar eventos sobre los elementos de HTML, uso fireEvent
    await fireEvent.click(toggleButton);
    expect(themeText).toHaveTextContent('Using dark theme');
    expect(toggleButton).toHaveTextContent('Toggle light mode');

    await fireEvent.click(toggleButton);
    expect(themeText).toHaveTextContent('Using light theme');
    expect(toggleButton).toHaveTextContent('Toggle dark mode');
  });

  it('has a valid header', () => {
    render(<Header />);

    const title = screen.queryByRole('heading');
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Header title');
  });
});
