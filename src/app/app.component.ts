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
      id: 'campaigns',
      title: 'Campaigns',
      items: [
        {
          name: 'BARR2',
          description: 'Biomedical Abbreviation Recognition and Resolution (2nd Edition)',
          category: 'Evaluation campaigns',
          web: 'https://temu.bsc.es/BARR2/'
        },
        {
          name: 'CANTEMIST',
          description: 'Cancer Text Mining Shared Task – tumor named entity recognition',
          category: 'Evaluation campaigns',
          web: 'https://temu.bsc.es/cantemist/'
        },
        {
          name: 'CODIESP',
          description: 'Clinical Case Coding in Spanish Shared Task (eHealth CLEF 2020)',
          category: 'Evaluation campaigns',
          web: 'https://temu.bsc.es/codiesp/'
        },
        {
          name: 'MEDDOCAN',
          description: 'Medical Document Anonymization',
          category: 'Evaluation campaigns',
          web: 'https://temu.bsc.es/meddocan/'
        },
        {
          name: 'MESINESP',
          description: 'Medical Semantic Indexing in Spanish',
          category: 'Evaluation campaigns',
          web: 'https://temu.bsc.es/mesinesp/'
        },
        {
          name: 'PHARMACONER',
          description: 'Pharmacological Substances, Compounds and proteins and Named Entity Recognition',
          category: 'Evaluation campaigns',
          web: 'https://temu.bsc.es/pharmaconer/'
        },

        // Antonio on campañas de evaluación (2020-06-17):
        // seguro: pharmaconer, mesinesp, meddocan, codiesp, cantemist
        // biocreative (es una campaña muy antigua, del cnio, creo que solo participó martin en eso)
        // iberlegal (es una campaña de la gente del plan que no es de Sanidad, pero les montamos un Brat)
        // smm4h-spanish, medtrans, medtermmap (campañas que no llegaron a salir)
        // pathovir (acaba de empezar, todavía no es seguro que llegue a convertirse en campaña)
        // dudo: BARR, BARR2, multilingualbio2018, multilingualbio2020, wmt-terminologies

        // $ ls /var/www/html/
        // .ANONIMIZACION
        // biocreative
        // cie-10
        // cieo
        // CODIFICACION
        // covid
        // ECO
        // .FARMACOS
        // hackathon-greekc
        // iberlegal
        // iberlegal2020
        // ictus
        // ICTUSnet
        // medtermmap
        // medtrans
        // mespen
        // multilingualbio2018
        // multilingualbio2020
        // NER
        // ner-legal
        // pathovir
        // POS
        // smm4h-spanish
        // SpaCTeS
        // wmt-terminologies
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      firstParagraph: 'This section provides links to various types of resources, developed both by TEMU and externally.',
      items: [
        {
          name: 'FastText Spanish Medical Embeddings',
          description: 'Word embeddings generated from Spanish corpora.',
          category: 'Natural Language Processing',
          repository: 'zenodo',
          href: 'https://zenodo.org/record/3744326'
        },
        {
          name: 'MeSpEn Parallel Corpora',
          description: 'Heterogeneous health related documents in Spanish and English useful to build parallel corpora for training and evaluating medical machine translation systems.',
          category: 'Corpora',
          repository: 'zenodo',
          href: 'https://zenodo.org/record/3562536'
        },
        {
          name: 'Neural Machine Translation for the Biomedical Domain - WMT19',
          description: 'This package contains the files needed to use the Neural Machine Translation (NMT) system for the Biomedical Domain.',
          category: 'Translation',
          repository: 'zenodo',
          href: 'https://zenodo.org/record/3346802'
        },
        {
          name: 'SPACCC',
          description: 'The Spanish Clinical Case Corpus, a collection of 1,000 clinical cases from SciELO.',
          category: 'Corpora',
          repository: 'zenodo',
          href: 'https://zenodo.org/record/2560316'
        },
        {
          name: 'AbreMES DB',
          description: 'The Spanish Medical Abbreviation Database.',
          category: 'Terminology',
          repository: 'zenodo',
          href: 'https://zenodo.org/record/2207130'
        },
        {
          name: 'MeSpEn Glossaries',
          description: 'Bilingual medical glossaries for various language pairs generated from free online medical glossaries and dictionaries made by professional translators.',
          category: 'Terminology',
          repository: 'zenodo',
          href: 'https://zenodo.org/record/2205690'
        },
        {
          name: 'SPACCC_SPLIT',
          description: 'A collection of 1,000 clinical cases in Spanish where sentence boundary symbols are marked-up.',
          category: 'Annotated corpora',
          repository: 'github',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_SPLIT'
        },
        {
          name: 'SPACCC_TOKEN',
          description: 'A collection of 1,000 clinical cases in Spanish where sentence tokens are marked-up.',
          category: 'Annotated corpora',
          repository: 'github',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_TOKEN'
        },
        {
          name: 'SPACCC_POS',
          description: 'A collection of 1,000 clinical cases in Spanish annotated with Part-of-Speech tags.',
          category: 'Annotated corpora',
          repository: 'github',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_POS'
        },
      ],
      more: this.links.find(link => link.id === 'zenodo')
    },
    {
      id: 'tools',
      title: 'Tools',
      items: [
        {
          name: 'Medical PoS tagger',
          description: 'A Part-of-Speech Tagger for medical domain corpus in Spanish based on FreeLing.',
          category: 'Natural Language Processing',
          repository: 'github',
          href: 'https://github.com/PlanTL-SANIDAD/SPACCC_POS-TAGGER'
        },
        {
          name: 'Medical Negation Detection',
          description: 'A system for negation detection in Spanish clinical texts based on Wendy Chapman\'s NegEx algorithm.',
          category: 'Natural Language Processing',
          repository: 'github',
          href: 'https://github.com/PlanTL-SANIDAD/NegEx-MES'
        },
        {
          name: 'Medical Abbreviation extractor',
          description: 'Software used to generate a database of abbreviations in the Spanish medical domain.',
          category: 'Other tools',
          repository: 'github',
          href: 'https://github.com/PlanTL-SANIDAD/AbreMES-X'
        },
      ],
      more: this.links.find(link => link.id === 'github')
    },
    {
      id: 'events',
      title: 'Events',
      events: [
        {
          date: new Date('2019-12-02'),
          title: 'Infoday sobre tecnologías del lenguaje en sanidad y biomedicina',
          description: `Dissemination of the initiatives launched by the TL Plan, as well as the collaborations and results generated in the health sector.`,
          href: 'https://www.bsc.es/news/events/infoday-sobre-tecnolog%C3%ADas-del-lenguaje-en-sanidad-y-biomedicina'
        },
        {
          date: new Date('2018-09-19'),
          title: 'Infoday about Language Technologies in Healthcare',
          description: `Infoday on actions of the Plan TL in Healthcare at <a href="http://www.sepln2018.com/">SEPLN-2018</a>.`,
          href: 'http://www.agendadigital.gob.es/tecnologias-lenguaje/comunicacion-formacion/eventos/Paginas/Infoday-2018-Plan-TL-y-Sanidad.aspx'
        },
        {
          date: new Date('2018-09-18'),
          title: 'BARR2',
          description: `Biomedical Abbreviation Recognition and Resolution 2nd Edition <a href="https://sites.google.com/view/ibereval-2018">IberEval workshop</a> at <a href="http://www.sepln2018.com/">SEPLN-2018</a>.`,
          href: 'https://sites.google.com/view/ibereval-2018'
        },
        {
          date: new Date('2018-05-09'),
          title: 'MultilingualBio',
          description: `Multilingual Biomedical Text Processing Workshop at <a href="http://lrec2018.lrec-conf.org/en/">LREC-2018</a>.`,
          href: 'https://multilingualbio.bsc.es/'
        },
        {
          date: new Date('2018-02-27'),
          title: 'II Hackathon de Tecnologías del Lenguaje en $YFN',
          description: `Hackathon to promote the development of prototypes based on NLP, MT and conversational systems.`,
          href: 'https://www.hackathonplantl.es/'
        },
        {
          date: new Date('2017-09-19'),
          title: 'BARR',
          description: `Biomedical Abbreviation Recognition and Resolution <a href="http://cabrillo.lsi.uned.es/nlp/IberEval-2017/">IberEval workhop</a> at <a href="http://sepln2017.um.es/">SEPLN-2017</a>.`,
          href: 'http://temu.bsc.es/BARR'
        },
      ]
    },
    {
      id: 'talks',
      title: 'Talks',
      talks: [
        { description: `Gonzalez-Agirre, A.; Vivanco-Hidalgo, R.M.; Abilleira, S.; Gallofré, M.; Valencia, A.; Villegas, M. and Krallinger, M. <b>Mining Spanish and Catalan Electronic Health Records: Extraction of Information on Diagnosis of Stroke from Discharge Reports.</b> In <i>3rd European Conference on Translational Bioinformatics: Biomedical Big Data Supporting Precision Medicine</i>, 2018.` },
      ]
    },
    {
      id: 'more',
      title: 'More about us',
      links: [
        {
          id: 'people',
          text: 'Our staff',
          href: 'https://www.bsc.es/discover-bsc/organisation/scientific-structure/text-mining/team-people',
        },
        {
          id: 'publications',
          text: 'Our publications',
          href: 'https://www.bsc.es/discover-bsc/organisation/scientific-structure/text-mining/team-publications',
        },
        {
          id: 'demos',
          text: 'Our online demos',
          href: 'https://temu.bsc.es/demos/',
        },
        {
          id: 'temu',
          text: 'More about TEMU at BSC',
          href: 'https://www.bsc.es/discover-bsc/organisation/scientific-structure/text-mining',
        },
      ]
    },
  ]

}
