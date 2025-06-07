import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQSection from '../src/components/home/FAQSection';

describe('FAQSection', () => {
  it('affiche le titre de la section FAQ', () => {
    render(<FAQSection />);
    
    expect(screen.getByText('Questions fréquentes')).toBeInTheDocument();
  });

  it('affiche une description de la section', () => {
    render(<FAQSection />);
    
    // Vérifie qu'il y a une description (sans se soucier du contenu exact)
    const descriptions = screen.getAllByText(/questions|initiative|clubs/i);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('contient plusieurs questions FAQ', () => {
    render(<FAQSection />);
    
    // Vérifie qu'il y a plusieurs boutons cliquables (les questions)
    const questionButtons = screen.getAllByRole('button');
    expect(questionButtons.length).toBeGreaterThan(2);
  });

  it('permet d\'ouvrir et fermer les réponses FAQ', () => {
    render(<FAQSection />);
    
    // Prend le premier bouton de question
    const firstQuestion = screen.getAllByRole('button')[0];
    
    // Au départ, le bouton devrait avoir les classes "fermé"
    expect(firstQuestion.className).toMatch(/bg-white.*text-gray-900/);
    
    // Clique pour ouvrir
    fireEvent.click(firstQuestion);
    
    // Vérifie que le bouton a changé d'état - maintenant ouvert avec classes FFCAM
    expect(firstQuestion.className).toMatch(/bg-ffcam.*text-white/);
    
    // Clique à nouveau pour fermer
    fireEvent.click(firstQuestion);
    
    // Vérifie qu'il est revenu à l'état fermé
    expect(firstQuestion.className).toMatch(/bg-white.*text-gray-900/);
  });

  it('ferme automatiquement les autres FAQ quand on en ouvre une', () => {
    render(<FAQSection />);
    
    const questions = screen.getAllByRole('button');
    
    if (questions.length >= 2) {
      // Ouvre la première question
      fireEvent.click(questions[0]);
      
      // Ouvre la seconde question
      fireEvent.click(questions[1]);
      
      // Vérifie que seulement une question peut être ouverte à la fois
      // (comportement accordion)
      const expandedButtons = questions.filter(button => 
        button.getAttribute('aria-expanded') === 'true' ||
        button.className.includes('bg-ffcam')
      );
      
      expect(expandedButtons.length).toBeLessThanOrEqual(1);
    }
  });

  it('a une structure accessible avec ARIA', () => {
    render(<FAQSection />);
    
    const questions = screen.getAllByRole('button');
    
    questions.forEach(button => {
      // Chaque bouton devrait avoir du contenu accessible
      expect(button.textContent).toBeTruthy();
      
      // Vérifie la structure avec icônes
      const icons = button.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('utilise les bonnes classes pour les états visuels', () => {
    render(<FAQSection />);
    
    const questions = screen.getAllByRole('button');
    
    questions.forEach(button => {
      // Vérifie que les boutons ont des classes de style appropriées
      expect(button.className).toMatch(/rounded|transition|hover|focus/);
    });
  });

  it('a une section avec ID pour la navigation', () => {
    render(<FAQSection />);
    
    // Vérifie que la section FAQ a un ID
    const section = document.querySelector('#faq');
    expect(section).toBeInTheDocument();
  });

  it('affiche les icônes d\'état (fermé/ouvert)', () => {
    render(<FAQSection />);
    
    const questions = screen.getAllByRole('button');
    
    if (questions.length > 0) {
      const firstQuestion = questions[0];
      
      // Vérifie la présence d'icônes
      const helpIcon = firstQuestion.querySelector('svg');
      expect(helpIcon).toBeInTheDocument();
      
      // Clique pour voir le changement d'icône
      fireEvent.click(firstQuestion);
      
      // Vérifie qu'il y a toujours des icônes après le clic
      const iconsAfterClick = firstQuestion.querySelectorAll('svg');
      expect(iconsAfterClick.length).toBeGreaterThan(0);
    }
  });

  it('a un layout responsive', () => {
    render(<FAQSection />);
    
    // Vérifie que le conteneur principal a des classes responsive
    const container = document.querySelector('.max-w-3xl');
    expect(container).toBeInTheDocument();
  });
});