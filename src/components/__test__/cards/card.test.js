import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../../cards/card';

describe('Card component', () => {
  const component = (
    <Card
      title='El irlandés'
      netflixTitle='original de netflix'
      infoBubble={<p data-testid='card-infoBubble'>asesino conocido como el irlandés</p>}
      videoModalId={'fSQWKwYSXQc'}
      showBubble
    />
  );
  test('Should find title and netflixTitle, infoBubble', () => {
    const { getByTestId, getByText } = render(component);

    expect(getByText('El irlandés')).toBeInTheDocument();
    expect(getByText('original de netflix')).toBeInTheDocument();
    expect(getByTestId('card-infoBubble')).toBeInTheDocument();
  });

  test('Should render without infoBubble', () => {
    const { queryByTestId } = render(
      <Card
        title='El irlandés'
        netflixTitle='original de netflix'
        infoBubble={<p data-testid='card-infoBubble'>asesino conocido como el irlandés</p>}
      />
    );
    expect(queryByTestId('card-infoBubble')).not.toBeInTheDocument();
  });

  test('Should close description', () => {
    const { getByTestId, queryByTestId } = render(component);
    expect(getByTestId('card-bubble')).toBeInTheDocument();
    fireEvent.click(getByTestId('description-close'));
    expect(queryByTestId('card-bubble')).not.toBeInTheDocument();
  });

  test('Should close and open description', () => {
    const { getByTestId, queryByTestId } = render(component);
    expect(getByTestId('card-bubble')).toBeInTheDocument();
    fireEvent.click(getByTestId('description-close'));
    expect(queryByTestId('card-bubble')).not.toBeInTheDocument();
    expect(queryByTestId('description-open')).toBeInTheDocument();
    fireEvent.click(getByTestId('description-open'));
    expect(queryByTestId('card-bubble')).toBeInTheDocument();
  });

  test('Should open video', () => {
    const { getByTestId } = render(component);
    fireEvent.click(getByTestId('open-video'));
    expect(getByTestId('modal')).toBeInTheDocument();
  });
});