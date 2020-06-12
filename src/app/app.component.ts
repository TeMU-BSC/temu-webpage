import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getBaseUrl = () => window.location.origin;
  getAnchorUrl = (sectionId: string) => `${window.location.origin}#${sectionId}`;

  sections = [
    {
      id: 'aims',
      title: 'Aims & Objectives',
      firstParagraph: 'The strategic goals of the Text Mining Unit are:',
      list: [
        'To design and to develop biomedical language-processing resources with emphasis on oncology.',
        'To provide consultancy and technical advice for language technologies in the biomedical domain.',
        'To design requirements and standards for interoperability of biomedical language technologies.',
        'To coordinate community assessment and evaluation challenges of biomedical text mining tasks.',
        'To leverage the uptake of biomedical text mining technologies and relevant standards.',
      ],
      lastParagraph: 'One of the main scopes of the unit is to provide biomedical text mining and language processing infrastructures that can be maintained efficiently over time and be integrated in biomedical analysis platforms comprising data from experimental outcomes of patient-derived information.',
    },
    {
      id: 'tools',
      title: 'Tools & Components',
      items: [
        { name: 'Medical PoS tagger', description: 'A Part-of-Speech Tagger for medical domain corpus in Spanish based on FreeLing.', category: 'Natural Language Processing', repository: 'https://github.com/PlanTL-SANIDAD/SPACCC_POS-TAGGER' },
        { name: 'Medical Negation Detection', description: 'A system for negation detection in Spanish clinical texts based on Wendy Chapman\'s NegEx algorithm.', category: 'Natural Language Processing', repository: 'https://github.com/PlanTL-SANIDAD/NegEx-MES' },
        { name: 'Medical Abbreviation extractor', description: 'Software used to generate a database of abbreviations in the Spanish medical domain.', category: 'Other tools', repository: 'https://github.com/PlanTL-SANIDAD/AbreMES-X' },
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Corpora',
      'first-p': 'This section provides links to various types of resources, developed both by TEMU and externally.',
      items: [
        { name: 'SPACCC_SPLIT', description: 'A collection of 1,000 clinical cases in Spanish where sentence boundary symbols are marked-up.', category: 'Annotated corpora', repository: 'https://github.com/PlanTL-SANIDAD/SPACCC_SPLIT' },
        { name: 'SPACCC_TOKEN', description: 'A collection of 1,000 clinical cases in Spanish where sentence tokens are marked-up.', category: 'Annotated corpora', repository: 'https://github.com/PlanTL-SANIDAD/SPACCC_TOKEN' },
        { name: 'SPACCC_POS', description: 'A collection of 1,000 clinical cases in Spanish annotated with Part-of-Speech tags.', category: 'Annotated corpora', repository: 'https://github.com/PlanTL-SANIDAD/SPACCC_POS' },
        { name: 'Spanish Medical Abbreviation DataBase', description: 'The database is created automatically by detecting abbreviations and their potential definitions explicitly mentioned in the same sentence. These abbreviations are extracted from the metadata of different biomedical publications written in Spanish, which contain the titles and abstracts. The sources of these publications are SciELO, IBECS and Pubmed.', category: 'Terminological resources', repository: 'https://github.com/PlanTL-SANIDAD/AbreMES-DB' },
        { name: 'Bilingual medical glossaries', description: 'Bilingual medical glossaries for various language pairs generated from free online medical glossaries and dictionaries made by professional translators.', category: 'Terminological resources', repository: 'https://github.com/PlanTL-SANIDAD/MeSpEn_Glossaries' },
        { name: 'Bilingual medical glossaries', description: 'A number of translation models for neural machine translation needed to use the Neural Machine Translation (NMT) system for the Biomedical Domain. The available language directions for translation are: English to Spanish, Spanish to English, English to Portuguese, Portuguese to English, Spanish to Portuguese and Portuguese to Spanish.', category: 'Translation models', repository: 'https://github.com/PlanTL-SANIDAD/Medical-Translator' },
      ]
    },
    { id: 'demos', title: 'Online demos' },
    {
      id: 'events',
      title: 'Events',
      events: [
        { date: new Date('2018-09-19'), description: `<a href="http://www.agendadigital.gob.es/tecnologias-lenguaje/comunicacion-formacion/eventos/Paginas/Infoday-2018-Plan-TL-y-Sanidad.aspx">Infoday about Language Technologies in Healthcare</a>: Infoday on actions of the Plan TL in Healthcare at <a href="http://www.sepln2018.com/">SEPLN-2018</a>.` },
        { date: new Date('2018-09-18'), description: `<a href="https://sites.google.com/view/ibereval-2018">BARR2</a>: Biomedical Abbreviation Recognition and Resolution 2nd Edition <a href="https://sites.google.com/view/ibereval-2018">IberEval workshop</a> at <a href="http://www.sepln2018.com/">SEPLN-2018</a>.` },
        { date: new Date('2018-05-09'), description: `<a href="https://multilingualbio.bsc.es/">MultilingualBio</a>: Multilingual Biomedical Text Processing Workshop at <a href="http://lrec2018.lrec-conf.org/en/">LREC-2018</a>.` },
        { date: new Date('2018-02-27'), description: `<a href="https://www.hackathonplantl.es/"> II Hackathon de Tecnologías del Lenguaje en $YFN</a>: Hackathon to promote the development of prototypes based on NLP, MT and conversational systems.` },
        { date: new Date('2017-09-19'), description: `<a href="http://temu.bsc.es/BARR">BARR</a>: Biomedical Abbreviation Recognition and Resolution <a href="http://cabrillo.lsi.uned.es/nlp/IberEval-2017/">IberEval workhop</a> at <a href="http://sepln2017.um.es/">SEPLN-2017</a>.` },
      ]
    },
    { id: 'talks', title: 'Talks & Presentations' },
    { id: 'people', title: 'People' },
    { id: 'publications', title: 'Publications' },
    { id: 'more', title: 'More info' },
  ]

  links = [
    { href: 'https://www.plantl.gob.es/', img: { src: 'assets/images/plantl.png', alt: 'PlanTL logo' } },
    { href: 'https://avancedigital.gob.es/', img: { src: 'assets/images/estado_digital_teleco.gif', alt: 'SEAD logo' } },
    { href: 'https://www.bsc.es/', img: { src: 'assets/images/BSC-blue.svg', alt: 'BSC logo' } },
  ];

}
