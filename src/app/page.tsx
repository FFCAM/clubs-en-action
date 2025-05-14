'use client';

import Link from 'next/link';
import { MessageSquare, Users, Lightbulb, Calendar, Share2, ArrowRight, Star, Sparkles, Trophy, Menu, BookOpen, FileText, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const upcomingThemes = [
    'Suite d\'outils collaboratifs',
    'Gestion des EPIs',
    'Gestion de bibliothèque',
    'Communication interne',
    'Recruter et valoriser les bénévoles',
    'Trouver des partenariats / sponsors',
    'Mise en place d\'outils administratifs',
    'Proposez vos thèmes'
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Stocker une référence au formulaire avant les opérations asynchrones
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      
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
      });

      const data = await response.json() as { success: boolean; error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      // Stocker le message de succès personnalisé
      setSuccessMessage(data.message || 'Merci pour votre contribution ! Nous vous recontacterons bientôt.');
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-ffcam" />
              <span className="text-xl font-bold text-gray-900">Clubs en Action</span>
            </div>
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link href="#vision" className="text-sm font-medium text-gray-600 hover:text-ffcam">
                Notre Vision
              </Link>
              <Link href="#webinaires" className="text-sm font-medium text-gray-600 hover:text-ffcam">
                Webinaires
              </Link>
              <Link href="#solutions" className="text-sm font-medium text-gray-600 hover:text-ffcam">
                Solutions
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-ffcam">
                Contact
              </Link>
            </div>
            <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative overflow-hidden bg-ffcam pt-32 pb-20 text-white">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="h-8 w-8" />
            <span className="text-sm font-medium uppercase tracking-wider">Initiative FFCAM</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            Clubs&nbsp;en&nbsp;Action
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed">
            Une plateforme collaborative pour partager les bonnes pratiques entre clubs FFCAM. 
            Webinaires participatifs où les clubs présentent leurs solutions concrètes 
            sur des sujets du quotidien (gestion, communication, outils...), dans un esprit d&apos;entraide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#webinaires"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-ffcam font-semibold transition hover:bg-white/90"
            >
              Découvrir les webinaires
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Participer
            </Link>
          </div>
        </div>
      </header>

      {/* Annonce du prochain webinaire */}
      <div className="bg-ffcam text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <p className="text-sm font-medium">
                Prochain webinaire : <span className="font-bold">24 juin 2024 à 20h</span>
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
            >
              S&apos;inscrire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Notre Vision */}
      <section id="vision" className="relative py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ffcam/10 px-4 py-1 text-sm font-medium text-ffcam">
              <Heart className="h-4 w-4" />
              Notre Vision
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Un réseau plus fort, ensemble
            </h2>
          </div>
          <div className="mt-12 space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-ffcam/10 p-2">
                  <Lightbulb className="h-6 w-6 text-ffcam" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Le constat</h3>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Chaque jour, les clubs FFCAM innovent pour résoudre leurs défis quotidiens : 
                gestion du matériel, communication interne, outils numériques, bénévolat... 
                Mais ces solutions restent souvent méconnues des autres clubs.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-ffcam/10 p-2">
                  <Sparkles className="h-6 w-6 text-ffcam" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Notre solution</h3>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Clubs en Action met en relation les clubs qui ont des solutions à partager 
                avec ceux qui cherchent des réponses. Via des webinaires co-construits et 
                une bibliothèque de ressources collaborative, nous facilitons le partage d&apos;expériences 
                concrètes et reproductibles, dans une dynamique d&apos;intelligence collective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Webinaires */}
      <section id="webinaires" className="bg-ffcam/5 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ffcam/10 px-4 py-1 text-sm font-medium text-ffcam">
              <Calendar className="h-4 w-4" />
              Webinaires
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Les &quot;Rendez-vous Solutions des Clubs&quot;
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Des sessions en ligne où les clubs partagent leurs solutions concrètes sur des thèmes choisis ensemble.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
              <h3 className="relative text-xl font-semibold text-gray-900">Le Format</h3>
              <p className="relative mt-4 text-gray-600">
                Sur un thème donné (ex: &quot;Booster sa communication interne&quot;), 2 ou 3 clubs présentent 
                leur approche, leurs outils, leurs réussites. Suivi d&apos;un temps d&apos;échange pour 
                adapter ces solutions à votre contexte.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-ffcam/5 transition group-hover:scale-150" />
              <h3 className="relative text-xl font-semibold text-gray-900">La Force</h3>
              <p className="relative mt-4 text-gray-600">
                Des solutions variées, adaptées à différentes tailles de clubs et contextes. 
                Des retours d&apos;expérience concrets, directement applicables. Une communauté 
                active qui co-construit les solutions, s&apos;entraide et grandit ensemble à travers 
                un réseau d&apos;échange de pratiques.
              </p>
            </div>
          </div>
          

        </div>
      </section>

      {/* Processus */}
      <section id="process" className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ffcam/10 px-4 py-1 text-sm font-medium text-ffcam">
              <Sparkles className="h-4 w-4" />
              Processus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Comment ça marche ?
            </h2>
          </div>
          <div className="mt-12 space-y-8">
            {[
              {
                icon: Lightbulb,
                title: "1. Choisir LE bon thème",
                desc: "On commence par identifier un sujet qui préoccupe vraiment les clubs. Comment ? En leur demandant directement ! Via un appel à idées large puis un vote sur une sélection de thèmes prioritaires."
              },
              {
                icon: Users,
                title: "2. Identifier les \"Clubs Témoins\"",
                desc: "Nous recherchons des clubs qui ont déjà mis en place des solutions concrètes et efficaces. L\'objectif est d\'avoir une diversité d\'approches : petits et grands clubs, solutions simples ou plus élaborées, contextes différents... pour favoriser l\'apprentissage collectif et permettre à chaque club de s\'inspirer selon sa situation."
              },
              {
                icon: Calendar,
                title: "3. Préparer la Session & Mobiliser",
                desc: "On cale une date, on accompagne les clubs intervenants pour préparer une présentation claire et concise. Ensuite, communication large vers tous les clubs FFCAM."
              },
              {
                icon: Share2,
                title: "4. Animer le Webinaire",
                desc: "Une session d\'environ 1h30, animée de façon dynamique : courtes présentations des solutions par les clubs (~15 min chacun), suivies d\'un temps d\'échange conséquent où tous les participants peuvent contribuer avec leurs questions et propositions."
              }
            ].map((step, index) => (
              <div key={index} className="group flex gap-6 rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ffcam text-white transition group-hover:scale-110">
                  <step.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Futures */}
      <section id="solutions" className="bg-ffcam/5 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ffcam/10 px-4 py-1 text-sm font-medium text-ffcam">
              <BookOpen className="h-4 w-4" />
              Solutions
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Une bibliothèque collaborative de solutions concrètes
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Bientôt, une plateforme participative pour co-créer, partager et découvrir les solutions mises en place par les clubs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ffcam/10 text-ffcam">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Fiches Pratiques</h3>
              <p className="mt-2 text-gray-600">Des guides détaillés pour reproduire les solutions des clubs.</p>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ffcam/10 text-ffcam">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Témoignages</h3>
              <p className="mt-2 text-gray-600">Les retours d&apos;expérience des clubs qui ont mis en place ces solutions.</p>
            </div>
            <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ffcam/10 text-ffcam">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Échanges</h3>
              <p className="mt-2 text-gray-600">Un espace collaboratif pour discuter, améliorer et adapter collectivement les solutions à votre contexte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thèmes envisagés */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ffcam/10 px-4 py-1 text-sm font-medium text-ffcam">
              <Star className="h-4 w-4" />
              Prochainement
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Thèmes envisagés
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {upcomingThemes.map((theme, index) => (
              theme === 'Proposez vos thèmes' ? (
                <Link
                  key={theme}
                  href="#contact"
                  className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition border-2 border-ffcam/20 hover:border-ffcam hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ffcam text-white transition group-hover:scale-110">
                    <span className="font-semibold">?</span>
                  </div>
                  <span className="text-gray-900">{theme}</span>
                </Link>
              ) : (
                <div
                  key={theme}
                  className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ffcam/10 text-ffcam transition group-hover:scale-110">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-gray-900">{theme}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="contact" className="bg-ffcam/5 py-20">
        <div className="mx-auto max-w-2xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-ffcam/10 px-4 py-1 text-sm font-medium text-ffcam">
              <MessageSquare className="h-4 w-4" />
              Contribuer
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Participez à l&apos;aventure
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Votre expérience et vos idées sont précieuses pour faire grandir cette initiative.
            </p>
          </div>
          
          {/* Encart informatif sur l'équipe bénévole */}
          <div className="mt-12 rounded-xl bg-ffcam/10 p-6 border-l-4 border-ffcam">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <Heart className="h-5 w-5 text-ffcam" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Rejoignez l&apos;aventure Clubs en Action !</h3>
                <p className="mt-2 text-gray-700">
                  Cette initiative est portée par des bénévoles passionnés de la FFCAM. Pour faire grandir ce projet et 
                  maintenir notre rythme d&apos;un webinaire tous les 3 mois environ, nous recherchons des personnes motivées prêtes à contribuer 
                  à cette belle dynamique collaborative d&apos;entraide entre clubs.
                </p>
                <div className="mt-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-ffcam font-medium hover:underline"
                  >
                    Contactez-nous via le formulaire
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 rounded-2xl bg-white p-8 shadow-lg">
            {submitStatus === 'success' ? (
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <p className="text-green-800">
                  {successMessage}
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-4 text-sm text-green-600 hover:text-green-700"
                >
                  Envoyer une autre contribution
                </button>
              </div>
            ) : (
              <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                {submitStatus === 'error' && (
                  <div className="rounded-lg bg-red-50 p-4">
                    <p className="text-red-800">{errorMessage}</p>
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
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500"
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
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500"
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
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500"
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
                        Je souhaite participer à un webinaire en tant qu&apos;intervenant
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
                        J&apos;ai des retours sur l&apos;initiative
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
                        Je souhaite aider à organiser d&apos;autres webinaires
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
                    Thème suggéré
                  </label>
                  <input
                    type="text"
                    id="theme"
                    name="theme"
                    disabled={isSubmitting}
                    placeholder="Ex: Gestion des bénévoles, Communication interne..."
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="solution" className="block text-sm font-medium text-gray-700">
                    Solution à partager
                  </label>
                  <textarea
                    id="solution"
                    name="solution"
                    rows={3}
                    disabled={isSubmitting}
                    placeholder="Décrivez brièvement la solution mise en place dans votre club..."
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500"
                  ></textarea>
                </div>
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
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-ffcam focus:outline-none focus:ring-2 focus:ring-ffcam disabled:bg-gray-50 disabled:text-gray-500"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-ffcam px-6 py-3 text-white transition hover:bg-ffcam-dark focus:outline-none focus:ring-2 focus:ring-ffcam focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma contribution'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-ffcam" />
              <p className="text-lg font-medium">
                Clubs en Action
              </p>
            </div>
            <p className="text-center text-sm text-gray-400">
              Fait avec amour par les bénévoles de la FFCAM ❤️
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a 
                href="https://github.com/ffcam/clubs-en-action" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Code source
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="https://ffcam.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                ffcam.fr
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
