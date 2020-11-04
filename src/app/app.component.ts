import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  getBaseUrl = () => window.location.origin;
  getAnchorUrl = (sectionId: string) => `${window.location.origin}#${sectionId}`;

  links = [
    { id: 'plantl', href: 'https://www.plantl.gob.es/', img: { src: 'assets/images/plantl.png', alt: 'Plan TL logo' } },
    { id: 'sead', href: 'https://avancedigital.gob.es/', img: { src: 'assets/images/estado_digital_teleco.gif', alt: 'SEAD logo' } },
    { id: 'bsc', href: 'https://www.bsc.es/', img: { src: 'assets/images/BSC-blue.svg', alt: 'BSC logo' } },
    { id: 'github', href: 'https://github.com/PlanTL-SANIDAD', img: { src: 'assets/images/GitHub_Logo.png', alt: 'GitHub logo' } },
    { id: 'zenodo', href: 'https://zenodo.org/communities/medicalnlp/', img: { src: 'assets/images/zenodo-black-border.svg', alt: 'Zenodo logo' } },
  ];

  sections = [
    {
      id: 'goals',
      title: 'Goals',
      firstParagraph: 'The strategic goals of the Text Mining Unit are:',
      bulletItems: [
        'Design and develop biomedical language-processing resources with emphasis on oncology.',
        'Provide consultancy and technical advice for language technologies in the biomedical domain.',
        'Design requirements and standards for interoperability of biomedical language technologies.',
        'Coordinate community assessment and evaluation challenges of biomedical text mining tasks.',
        'Leverage the uptake of biomedical text mining technologies and relevant standards.',
      ],
      lastParagraph: 'One of the main scopes of the unit is to provide biomedical text mining and language processing infrastructures that can be maintained efficiently over time and be integrated in biomedical analysis platforms comprising data from experimental outcomes of patient-derived information.',
    },
    {
      id: 'campaigns',
      title: 'Campaigns',
      items: [
        {
          title: 'BARR2',
          description: 'Biomedical Abbreviation Recognition and Resolution (2nd Edition)',
          flag: 'Finished',
          linkText: 'Visit the website',
          href: 'https://temu.bsc.es/BARR2/',
        },
        {
          title: 'CANTEMIST',
          description: 'Cancer Text Mining Shared Task – tumor named entity recognition',
          flag: 'Finished',
          linkText: 'Visit the website',
          href: 'https://temu.bsc.es/cantemist/',
        },
        {
          title: 'CODIESP',
          description: 'Clinical Case Coding in Spanish Shared Task (eHealth CLEF 2020)',
          flag: 'Finished',
          linkText: 'Visit the website',
          href: 'https://temu.bsc.es/codiesp/',
        },
        {
          title: 'MEDDOCAN',
          description: 'Medical Document Anonymization',
          flag: 'Finished',
          linkText: 'Visit the website',
          href: 'https://temu.bsc.es/meddocan/',
        },
        {
          title: 'MESINESP',
          description: 'Medical Semantic Indexing in Spanish',
          flag: 'Finished',
          linkText: 'Visit the website',
          href: 'https://temu.bsc.es/mesinesp/',
        },
        {
          title: 'PHARMACONER',
          description: 'Pharmacological Substances, Compounds and proteins and Named Entity Recognition',
          flag: 'Finished',
          linkText: 'Visit the website',
          href: 'https://temu.bsc.es/pharmaconer/',
        },

        // Antonio Miranda commented on 2020-06-17:
        // - campañas de evaluación: pharmaconer, mesinesp, meddocan, codiesp, cantemist
        // - biocreative es una campaña muy antigua, del cnio, creo que solo participó Martin en eso
        // - iberlegal es una campaña de la gente del Plan TL que no es de Sanidad, pero les montamos un Brat
        // - campañas que no llegaron a salir: smm4h-spanish, medtrans, medtermmap
        // - pathovir acaba de empezar, todavía no es seguro que llegue a convertirse en campaña
        // - dudo: BARR, BARR2, multilingualbio2018, multilingualbio2020, wmt-terminologies
        // $ ls /var/www/html/
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      firstParagraph: 'This section provides links to various types of resources, developed both by TEMU and externally.',
      items: [
        {
          title: 'FastText Spanish Medical Embeddings',
          description: 'Word embeddings generated from Spanish corpora.',
          flag: 'Natural Language Processing',
          linkText: 'Check the release',
          href: 'https://zenodo.org/record/3744326',
        },
        {
          title: 'MeSpEn Parallel Corpora',
          description: 'Heterogeneous health related documents in Spanish and English useful to build parallel corpora for training and evaluating medical machine translation systems.',
          flag: 'Corpora',
          linkText: 'Check the release',
          href: 'https://zenodo.org/record/3562536',
        },
        {
          title: 'Neural Machine Translation for the Biomedical Domain - WMT19',
          description: 'This package contains the files needed to use the Neural Machine Translation (NMT) system for the Biomedical Domain.',
          flag: 'Translation',
          linkText: 'Check the release',
          href: 'https://zenodo.org/record/3346802',
        },
        {
          title: 'SPACCC',
          description: 'The Spanish Clinical Case Corpus, a collection of 1,000 clinical cases from SciELO.',
          flag: 'Corpora',
          linkText: 'Check the release',
          href: 'https://zenodo.org/record/2560316',
        },
        {
          title: 'AbreMES DB',
          description: 'The Spanish Medical Abbreviation Database.',
          flag: 'Terminology',
          linkText: 'Check the release',
          href: 'https://zenodo.org/record/2207130',
        },
        {
          title: 'MeSpEn Glossaries',
          description: 'Bilingual medical glossaries for various language pairs generated from free online medical glossaries and dictionaries made by professional translators.',
          flag: 'Terminology',
          linkText: 'Check the release',
          href: 'https://zenodo.org/record/2205690',
        },
        {
          title: 'SPACCC_SPLIT',
          description: 'A collection of 1,000 clinical cases in Spanish where sentence boundary symbols are marked-up.',
          flag: 'Annotated corpora',
          linkText: 'Go to the repo',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_SPLIT',
        },
        {
          title: 'SPACCC_TOKEN',
          description: 'A collection of 1,000 clinical cases in Spanish where sentence tokens are marked-up.',
          flag: 'Annotated corpora',
          linkText: 'Go to the repo',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_TOKEN',
        },
        {
          title: 'SPACCC_POS',
          description: 'A collection of 1,000 clinical cases in Spanish annotated with Part-of-Speech tags.',
          flag: 'Annotated corpora',
          linkText: 'Go to the repo',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_POS',
        },
      ],
      more: this.links.find(link => link.id === 'zenodo')
    },
    {
      id: 'tools',
      title: 'Tools',
      items: [
        {
          title: 'Medical PoS tagger',
          description: 'A Part-of-Speech Tagger for medical domain corpus in Spanish based on FreeLing.',
          flag: 'Natural Language Processing',
          linkText: 'Go to the repo',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_POS-TAGGER',
        },
        {
          title: 'Medical Negation Detection',
          description: 'A system for negation detection in Spanish clinical texts based on Wendy Chapman\'s NegEx algorithm.',
          flag: 'Natural Language Processing',
          linkText: 'Go to the repo',
          href: 'https://github.com/PlanTL-SANIDAD/NegEx-MES',
        },
        {
          title: 'Medical Abbreviation extractor',
          description: 'Software used to generate a database of abbreviations in the Spanish medical domain.',
          flag: 'Other tools',
          linkText: 'Go to the repo',
          href: 'https://github.com/PlanTL-SANIDAD/AbreMES-X',
        },
      ],
      more: this.links.find(link => link.id === 'github')
    },
    {
      id: 'events',
      title: 'Events',
      items: [
        {
          date: new Date('2019-12-02'),
          title: 'Infoday sobre tecnologías del lenguaje en sanidad y biomedicina',
          description: `Dissemination of the initiatives launched by the TL Plan, as well as the collaborations and results generated in the health sector.`,
          linkText: 'See event details',
          href: 'https://www.bsc.es/news/events/infoday-sobre-tecnolog%C3%ADas-del-lenguaje-en-sanidad-y-biomedicina',
        },
        {
          date: new Date('2018-09-19'),
          title: 'Infoday about Language Technologies in Healthcare',
          description: `Infoday on actions of the Plan TL in Healthcare at <a href="http://www.sepln2018.com/">SEPLN-2018</a>.`,
          linkText: 'See event details',
          href: 'http://www.agendadigital.gob.es/tecnologias-lenguaje/comunicacion-formacion/eventos/Paginas/Infoday-2018-Plan-TL-y-Sanidad.aspx',
        },
        {
          date: new Date('2018-09-18'),
          title: 'BARR2',
          description: `Biomedical Abbreviation Recognition and Resolution 2nd Edition <a href="https://sites.google.com/view/ibereval-2018">IberEval workshop</a> at <a href="http://www.sepln2018.com/">SEPLN-2018</a>.`,
          linkText: 'See event details',
          href: 'https://sites.google.com/view/ibereval-2018',
        },
        {
          date: new Date('2018-05-09'),
          title: 'MultilingualBio',
          description: `Multilingual Biomedical Text Processing Workshop at <a href="http://lrec2018.lrec-conf.org/en/">LREC-2018</a>.`,
          linkText: 'See event details',
          href: 'https://multilingualbio.bsc.es/',
        },
        {
          date: new Date('2018-02-27'),
          title: 'II Hackathon de Tecnologías del Lenguaje en $YFN',
          description: `Hackathon to promote the development of prototypes based on NLP, MT and conversational systems.`,
          linkText: 'See event details',
          href: 'https://www.hackathonplantl.es/',
        },
        {
          date: new Date('2017-09-19'),
          title: 'BARR',
          description: `Biomedical Abbreviation Recognition and Resolution <a href="http://cabrillo.lsi.uned.es/nlp/IberEval-2017/">IberEval workhop</a> at <a href="http://sepln2017.um.es/">SEPLN-2017</a>.`,
          linkText: 'See event details',
          href: 'http://temu.bsc.es/BARR',
        },
      ]
    },
    {
      id: 'talks',
      title: 'Talks',
      items: [
        {
          title: 'Mining Spanish and Catalan Electronic Health Records: Extraction of Information on Diagnosis of Stroke from Discharge Reports',
          description: `Authors: Gonzalez-Agirre, A.; Vivanco-Hidalgo, R.M.; Abilleira, S.; Gallofré, M.; Valencia, A.; Villegas, M. and Krallinger, M. <br/><br/> Participation in the <a href="http://www.bioinformaticsbarcelona.eu/events/41/3rd-european-conference-on-translational-bioinformatics-biomedical-big-data-supporting-precision-medicine" class="animated-underline">3rd European Conference on Translational Bioinformatics: Biomedical Big Data Supporting Precision Medicine</a>, 2018.`,
          flag: 'Talk',
          linkText: 'View publication',
          href: 'https://www.researchgate.net/publication/327861444_016_MINING_SPANISH_AND_CATALAN_ELECTRONIC_HEALTH_RECORDS_EXTRACTION_OF_INFORMATION_ON_DIAGNOSIS_OF_STROKE_FROM_DISCHARGE_REPORTS',
        },
      ]
    },
    {
      id: 'more',
      title: 'More about us',
      items: [
        {
          title: 'More about our unit',
          linkText: 'Read more from us',
          href: 'https://www.bsc.es/discover-bsc/organisation/scientific-structure/text-mining',
        },
        {
          title: 'Who we are',
          linkText: 'Get to know our staff',
          href: 'https://www.bsc.es/discover-bsc/organisation/scientific-structure/text-mining/team-people',
        },
        {
          title: 'What we have published',
          linkText: 'Discover our publications',
          href: 'https://www.bsc.es/discover-bsc/organisation/scientific-structure/text-mining/team-publications',
        },
        {
          title: 'Our web demos',
          linkText: 'Play with our demos',
          href: 'https://temu.bsc.es/demos/',
        },
      ]
    },
  ]

}
