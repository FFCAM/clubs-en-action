'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Check, AlertTriangle } from 'lucide-react';
import { FFCAMSection, FFCAMHeading, FFCAMSubheading, FFCAMButton } from '@/components';

// Define the response type for CSRF API
interface CsrfResponse {
  success: boolean;
  csrfToken: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [suggestTheme, setSuggestTheme] = useState(false);
  const [shareSolution, setShareSolution] = useState(false);

  // Fonction réutilisable pour récupérer un token CSRF
  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('/api/csrf', {
        credentials: 'same-origin',  // S'assurer que les cookies sont envoyés/reçus
        cache: 'no-cache'  // Ne pas utiliser de cache
      });
      
      const data = await response.json() as CsrfResponse;
      
      if (data.success) {
        setCsrfToken(data.csrfToken);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors de la récupération du token CSRF:', error);
      return false;
    }
  };

  // Récupération du token CSRF au chargement et toutes les 10 minutes
  useEffect(() => {
    fetchCsrfToken();
    
    // Rafraîchir le token régulièrement pour éviter qu'il n'expire
    // (le token expire après 15 minutes, on le rafraîchit toutes les 10 minutes)
    const interval = setInterval(fetchCsrfToken, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validation côté client
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email')?.toString() || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setErrorMessage('Veuillez saisir une adresse email valide');
      setIsSubmitting(false);
      return;
    }

    try {
      // Gestion des checkboxes
      const checkboxes = ['suggest-theme', 'share-solution', 'participate', 'feedback', 'newsletter', 'help-organize'];
      checkboxes.forEach(field => {
        const value = formData.get(field);
        if (value === 'on') {
          formData.set(field, 'true');
        } else {
          formData.delete(field);
        }
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
        credentials: 'same-origin', // Ensure cookies are sent with the request
      });

      const data = await response.json() as { success: boolean; error?: string; message?: string };

      if (!response.ok) {
        if (response.status === 403) {
          // Tenter de rafraîchir le token CSRF automatiquement
          try {
            const csrfResponse = await fetch('/api/csrf');
            const csrfData = await csrfResponse.json() as CsrfResponse;
            if (csrfData.success) {
              setCsrfToken(csrfData.csrfToken);
              
              // Retenter l'envoi avec le nouveau token
              const newFormData = new FormData(form);
              const newResponse = await fetch('/api/contact', {
                method: 'POST',
                body: newFormData,
                credentials: 'same-origin', // Ensure cookies are sent with the request
              });
              
              const newData = await newResponse.json() as { 
                success: boolean; 
                error?: string; 
                message?: string;
              };
              
              if (newResponse.ok) {
                setSuccessMessage(newData.message || 'Merci pour votre contribution ! Nous vous recontacterons bientôt.');
                setSubmitStatus('success');
                form.reset();
                setSuggestTheme(false);
                setShareSolution(false);
                return; // Sortir car le second envoi a réussi
              }
            }
          } catch (csrfError) {
            console.error('Erreur lors du rafraîchissement du token CSRF:', csrfError);
          }
          
          // Si la tentative échoue, afficher l'erreur originale
          throw new Error(data.error || 'Session expirée. Veuillez rafraîchir la page.');
        } else if (response.status === 429) {
          throw new Error('Trop de tentatives. Veuillez réessayer dans quelques minutes.');
        } else {
          throw new Error(data.error || 'Une erreur est survenue lors de l\'envoi du formulaire');
        }
      }

      // Stocker le message de succès personnalisé
      setSuccessMessage(data.message || 'Merci pour votre contribution ! Nous vous recontacterons bientôt.');
      setSubmitStatus('success');
      form.reset();
      setSuggestTheme(false);
      setShareSolution(false);
      
      // Rafraîchir le token CSRF après un envoi réussi
      fetchCsrfToken();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur inattendue est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FFCAMSection id="contact" background="light">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center">
          <FFCAMHeading level={2}>
            Participez à l&apos;aventure
          </FFCAMHeading>
          <p className="mt-4 text-lg text-gray-600">
            Partagez une solution, suggérez un thème, ou proposez votre aide pour faire vivre cette initiative.
          </p>
        </div>
        
        {/* Encart informatif sur l'équipe bénévole */}
        <div className="mt-12 rounded-xl bg-ffcam/10 p-6 border-l-4 border-ffcam shadow-sm">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0 text-ffcam">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <FFCAMSubheading className="text-base !text-gray-900">Initiative portée par des bénévoles</FFCAMSubheading>
              <p className="mt-2 text-sm text-gray-600">
                Clubs en Action est une initiative développée par des bénévoles passionnés. 
                Nous faisons notre maximum pour répondre rapidement aux messages, mais nous avons aussi 
                nos activités professionnelles et personnelles. Merci de votre compréhension !
              </p>
              <div className="mt-3">
                <span className="text-sm font-medium text-ffcam">
                  Contactez-nous via le formulaire
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 rounded-2xl bg-white p-8 shadow-lg">
          {submitStatus === 'success' ? (
            <div className="rounded-lg bg-green-50 p-4 border border-green-200">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800">Envoi réussi !</p>
                  <p className="text-green-700">{successMessage}</p>
                  <FFCAMButton
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-3 !bg-green-600 hover:!bg-green-700 !text-white text-sm"
                  >
                    Envoyer une autre contribution
                  </FFCAMButton>
                </div>
              </div>
            </div>
          ) : (
            <form 
              className="space-y-6" 
              onSubmit={handleSubmit}
            >
              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-red-800">Erreur</p>
                      <p className="text-red-700">{errorMessage}</p>
                      <button 
                        onClick={() => setSubmitStatus('idle')} 
                        className="mt-2 text-sm text-ffcam-red hover:text-red-800 underline font-medium"
                      >
                        Réessayer
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500 text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="club" className="block text-sm font-medium text-gray-700">
                  Votre club
                </label>
                <input
                  type="text"
                  id="club"
                  name="club"
                  required
                  disabled={isSubmitting}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Comment souhaitez-vous contribuer ?
                </label>
                <div className="mt-2 space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="suggest-theme"
                      name="suggest-theme"
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-ffcam focus:ring-ffcam disabled:bg-gray-50"
                      onChange={(e) => setSuggestTheme(e.target.checked)}
                    />
                    <label htmlFor="suggest-theme" className="ml-3 block text-sm text-gray-700">
                      Je souhaite suggérer un thème pour un webinaire
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="share-solution"
                      name="share-solution"
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-ffcam focus:ring-ffcam disabled:bg-gray-50"
                      onChange={(e) => setShareSolution(e.target.checked)}
                    />
                    <label htmlFor="share-solution" className="ml-3 block text-sm text-gray-700">
                      Je veux partager une solution mise en place dans mon club
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="participate"
                      name="participate"
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-ffcam focus:ring-ffcam disabled:bg-gray-50"
                    />
                    <label htmlFor="participate" className="ml-3 block text-sm text-gray-700">
                      Je souhaite participer aux prochains webinaires
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="feedback"
                      name="feedback"
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-ffcam focus:ring-ffcam disabled:bg-gray-50"
                    />
                    <label htmlFor="feedback" className="ml-3 block text-sm text-gray-700">
                      Je veux partager mon feedback sur cette initiative
                    </label>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="help-organize"
                      name="help-organize"
                      disabled={isSubmitting}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-ffcam focus:ring-ffcam disabled:bg-gray-50"
                    />
                    <label htmlFor="help-organize" className="ml-3 block text-sm text-gray-700">
                      Je souhaite aider à l&apos;organisation des webinaires
                    </label>
                  </div>
                </div>
              </div>
              
              {suggestTheme && (
                <div>
                  <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
                    Quel thème souhaiteriez-vous voir abordé ?
                  </label>
                  <textarea
                    id="theme"
                    name="theme"
                    rows={3}
                    disabled={isSubmitting}
                    placeholder="Décrivez le thème qui vous intéresse..."
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500 text-gray-900"
                  ></textarea>
                </div>
              )}
              
              {shareSolution && (
                <div>
                  <label htmlFor="solution" className="block text-sm font-medium text-gray-700">
                    Quelle solution souhaitez-vous partager ?
                  </label>
                  <textarea
                    id="solution"
                    name="solution"
                    rows={3}
                    disabled={isSubmitting}
                    placeholder="Décrivez brièvement la solution mise en place dans votre club..."
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500 text-gray-900"
                  ></textarea>
                </div>
              )}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  placeholder="Vos commentaires, suggestions ou questions..."
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500 text-gray-900"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  disabled={isSubmitting}
                  className="h-4 w-4 rounded border-gray-300 text-ffcam focus:ring-ffcam disabled:bg-gray-50"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Je souhaite recevoir les actualités de Clubs en Action
                </label>
              </div>
              {/* Token CSRF caché */}

              <input 
                type="hidden" 
                name="csrf_token" 
                value={csrfToken} 
              />
              <FFCAMButton
                type="submit"
                disabled={isSubmitting || !csrfToken}
                className="w-full px-6 py-3 !text-white disabled:bg-gray-400 disabled:cursor-not-allowed relative"
                onClick={!csrfToken ? () => fetchCsrfToken() : undefined}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  csrfToken ? 'Envoyer ma contribution' : 'Chargement...'
                )}
              </FFCAMButton>
            </form>
          )}
        </div>
      </div>
    </FFCAMSection>
  );
}