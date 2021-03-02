import { fireEvent, render, screen } from '@testing-library/react';

import Card from './Card';

describe('Card', () => {
  it('component is visible', () => {
    render(<Card title="" />);
    const card = screen.queryByTestId('card');
    expect(card).toBeVisible();
  });

  it('the prop title is in the card title', () => {
    render(<Card title="My card" />);

    const title = screen.queryByTestId('title');
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('My card');
  });

  it('the prop source is in the card image as a src attribute and same with alt', () => {
    const alt = 'logo';
    const src =
      'https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png';

    render(<Card title="My card" alt={alt} src={src} />);

    const img = screen.queryByAltText(alt);
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', src);
  });

  it('has a price prop visible in the card', () => {
    render(<Card title="Card with price" price={20} />);

    const price = screen.queryByTestId('price');
    expect(price).toBeVisible();
    expect(price).toHaveTextContent('20');
  });

  it('has a button that toggle the price visibility', async () => {
    // Para este elemento no usaremos un ternario para esconder el elemento.
    // Usaremos una clase o estilos (en los que si podremos usar ternarios) que cambien el display de block a none para el precio
    render(<Card title="Card with price" price={20} />);

    const price = screen.queryByTestId('price');
    expect(price).toBeVisible();

    const toggleButton = screen.queryByTestId('toggle');
    await fireEvent.click(toggleButton);

    const price2 = screen.queryByTestId('price');
    expect(price2).not.toBeVisible();
  });
});
