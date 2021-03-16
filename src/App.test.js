import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

test('a página inicial possui um título', () => {
  const { getByText } = renderWithRouter(<App />);
  const title = screen.getByText('Ativos');
  expect(title).toBeInTheDocument();
});

test('a página incial possui oito ativos', () => {
  const { getByText } = renderWithRouter(<App />);

  const petrobras = screen.getByText('PETROBRAS (PETR4)');
  expect(petrobras).toBeInTheDocument();

  const itau = screen.getByText('ITAÚ UNIBANCO S/A (ITUB3)');
  expect(itau).toBeInTheDocument();

  const fleury = screen.getByText('FLEURY S/A (FLRY3)');
  expect(fleury).toBeInTheDocument();

  const vale = screen.getByText('VALE (VALE3)');
  expect(vale).toBeInTheDocument();

  const apple = screen.getByText('Apple Company (AAPL)');
  expect(apple).toBeInTheDocument();

  const microsoft = screen.getByText('Microsoft Corporation (MSFT)');
  expect(microsoft).toBeInTheDocument();

  const amazon = screen.getByText('Amazon (AMZN)');
  expect(amazon).toBeInTheDocument();

  const tesla = screen.getByText('Tesla (TSLA)');
  expect(tesla).toBeInTheDocument();
});

test('os ativos são renderizados na ordenação padrão', () => {
  const { getAllByTestId } = renderWithRouter(<App />);

  const expectedOrder = ['PETROBRAS (PETR4)', 'ITAÚ UNIBANCO S/A (ITUB3)', 'FLEURY S/A (FLRY3)', 'VALE (VALE3)', 'Apple Company (AAPL)', 'Microsoft Corporation (MSFT)', 'Amazon (AMZN)', 'Tesla (TSLA)'];
  const assetsName = screen.getAllByTestId('asset-name');
  assetsName.forEach((element, index) => expect(element.textContent).toBe(expectedOrder[index]));
});

test('os botões de ordenas por preço, ordenar por variação e ordenação padrão estão presente na página', () => {
  const { getByRole } = renderWithRouter(<App />);

  const buttonOrderPrice = screen.getByRole('button', { name: 'Ordenar os ativos por preço' });
  expect(buttonOrderPrice).toBeInTheDocument();

  const buttonOrderVariation = screen.getByRole('button', { name: 'Ordenar os ativos pela variação' });
  expect(buttonOrderVariation).toBeInTheDocument();

  const buttonOrderDefault = screen.getByRole('button', { name: 'Ordenação padrão' });
  expect(buttonOrderDefault).toBeInTheDocument();
});

test('ao clicar no botão de ordenar por preço os ativos são reordenados', () => {
  const { getAllByTestId, getByRole } = renderWithRouter(<App />);

  const buttonOrderPrice = screen.getByRole('button', { name: 'Ordenar os ativos por preço' });
  fireEvent.click(buttonOrderPrice);
  
  const expectedOrder = ['PETROBRAS (PETR4)', 'FLEURY S/A (FLRY3)', 'ITAÚ UNIBANCO S/A (ITUB3)', 'VALE (VALE3)', 'Apple Company (AAPL)', 'Microsoft Corporation (MSFT)', 'Tesla (TSLA)', 'Amazon (AMZN)'];
  const assetsName = screen.getAllByTestId('asset-name');
  assetsName.forEach((element, index) => expect(element.textContent).toBe(expectedOrder[index]));
});

test('ao clicar no botão de ordenar por variação os ativos são reordenados', () => {
  const { getAllByTestId, getByRole } = renderWithRouter(<App />);

  const buttonOrderVariation = screen.getByRole('button', { name: 'Ordenar os ativos pela variação' });
  fireEvent.click(buttonOrderVariation);
  
  const expectedOrder = ['PETROBRAS (PETR4)', 'FLEURY S/A (FLRY3)', 'Amazon (AMZN)', 'Microsoft Corporation (MSFT)', 'Apple Company (AAPL)', 'ITAÚ UNIBANCO S/A (ITUB3)', 'VALE (VALE3)', 'Tesla (TSLA)'];
  const assetsName = screen.getAllByTestId('asset-name');
  assetsName.forEach((element, index) => expect(element.textContent).toBe(expectedOrder[index]));
});

test('estando na página inicial, ao clicar no botão de ativos favoritos do cabeçalho, a página é redirecionada para a página de favoritos', () => {
  const { getByRole } = renderWithRouter(<App />);

  const buttonFavorites = screen.getByRole('button', { name: 'Ativos favoritos' });
  fireEvent.click(buttonFavorites);

  const titleFavorites = getByRole('heading', { name: 'Ativos favoritos' });
  expect(titleFavorites).toBeInTheDocument();
});

test('estando na página de favoritos, ao clicar no botão Todos os ativos, a página é redirecionada para a página inicial', () => {
  const { getByRole } = renderWithRouter(<App />);

  const buttonFavorites = screen.getByRole('button', { name: 'Ativos favoritos' });
  fireEvent.click(buttonFavorites);

  const buttonInitialPage = screen.getByRole('button', { name: 'Todos os ativos' });
  fireEvent.click(buttonInitialPage);

  const title = getByRole('heading', { name: 'Ativos' });
  expect(title).toBeInTheDocument();
});

test('na página inical, ao clicar no botão favoritar de algum ativo, ele é adicionado na lista de favoritos', () => {
  const { getByTestId, getByRole, queryByText } = renderWithRouter(<App />);

  const buttonPetr4Favorite = screen.getByTestId('PETR4');
  fireEvent.click(buttonPetr4Favorite);

  const buttonFavorites = screen.getByRole('button', { name: 'Ativos favoritos' });
  fireEvent.click(buttonFavorites);

  const petr4Title = screen.queryByText('PETROBRAS (PETR4)');
  expect(petr4Title).toBeInTheDocument();

  const flry3Title = screen.queryByText('FLEURY S/A (FLRY3');
  expect(flry3Title).not.toBeInTheDocument();
});

test('ao clicar no botão remover de um ativo da lista de favoritos esse ativo é removida da página', () => {
  const { getByTestId, getByRole, queryByText } = renderWithRouter(<App />);

  const buttonInitialPage = screen.getByRole('button', { name: 'Todos os ativos' });
  fireEvent.click(buttonInitialPage);

  const buttonPetr4Favorite = screen.getByRole('button', { name: 'Favoritar PETR4' });
  fireEvent.click(buttonPetr4Favorite);

  const buttonFavorites = screen.getByRole('button', { name: 'Ativos favoritos' });
  fireEvent.click(buttonFavorites);

  const petr4Title = screen.queryByText('PETROBRAS (PETR4)');
  expect(petr4Title).toBeInTheDocument();

  const buttonRemovePetr4 = screen.getByRole('button', { name: 'Remover PETR4' });
  fireEvent.click(buttonRemovePetr4);

  expect(petr4Title).not.toBeInTheDocument();  
});
