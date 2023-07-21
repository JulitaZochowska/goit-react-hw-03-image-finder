import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import React, { Component } from 'react';

import css from './App.module.css';

const INITIAL_STATE = {
  imageGallery: [],
  totalHits: 0,
  isLoading: false,
  page: 1,
  perPage: 12,
};

class App extends Component {
  state = INITIAL_STATE;

  fetchImages = async query => {
    try {
      this.setState({ ...INITIAL_STATE, isLoading: true }); //Ważne jest, aby przy każdym "nowym" wyszukiwaniu wyresetować wartości
      const response = await fetch(
        `https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=36881053-d0d1537e2fca48fbbc934d91b&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      );
      const data = await response.json(); // Nie jestem pewien, czy używaliście tego w ten sposób - bazowałem na dokumentacji https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      this.setState(prevState => ({
        ...prevState,
        imageGallery: data.hits,
        totalHits: data.totalHits, // Przyda się do przycisku "load more" - będziesz porównywać ilość wyświetlonych obrazków z tym "totalHits" i na tej podstawie wyświetlać przycisk. ?
        // Najlepiej przygotuj sobie poprzednią pracę domową z galerią - bedą tu baaaaaaaardzo podobne mechanizmy
      }));
    } catch (error) {
      console.error(error);
    } finally {
      // Możemy w opcjonalnym bloku finally umieścić instrukcje, które mają zawsze się wykonać, niezależnie od tego, czy wyjątek zostanie złapany, czy nie.
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.fetchImages} />
        <ImageGallery images={this.state.imageGallery} />
        {/* TIP: Do rozmieszczenia kolejnych komponentów zobacz sobie
        App.module.css i niewykorzystane style - powinny dać Ci mały "hint" */}

        {/* Warunki do przycisku:
        1. Nie ma żadnego obrazka - przycisku też nie ma
        2. Są obrazki i totalHits > page * perPage (chyba) - przycisk jest
        3. Są obrazi i totalHits <= page * perPage - przycisku brak */}

        {/* Loader:
        Loader zastępuje przycisk Load More (przy ładowaniu). Jak nie ma obrazków - loader wyświetla się jako jedyny.
        Co ja bym zrobił - ustawiłbym loader pomiędzy komponentem ImageGallery i pokazywał/chował w zależności od this.state.isLoading.
        Dodatkowo przycisk Load More powinien być ukryty gdy się ładuje */}
      </div>
    );
  }
}

export default App;
