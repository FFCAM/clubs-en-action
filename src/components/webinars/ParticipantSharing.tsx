export default function ParticipantSharing() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Partages des participants</h2>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <a href="https://www.solidatech.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Solidatech</a> : 
          plateforme permettant aux associations d'accéder à des tarifs privilégiés voire gratuits pour des outils numériques (dont Office 365)
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <strong>Conseil :</strong> Mettre en place des outils collaboratifs nécessite de la rigueur dans l'organisation et la formation des utilisateurs
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <a href="https://www.onlyoffice.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">OnlyOffice</a> : 
          outil de traitement de texte collaboratif gratuit (espace un peu limité tout de même)
        </li>
      </ul>
    </section>
  );
}