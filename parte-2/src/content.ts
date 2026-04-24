export const CONTENT = {
  eyebrow: 'turma aberta · vagas limitadas',

  hero: {
    titleStart: 'Aprenda Python do zero e construa projetos reais com',
    titleHighlight: 'IA',
    description:
      'O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.',
    ctaPrimary: 'Quero começar agora',
    ctaSecondary: 'Ver o que vou aprender',
    ctaPrimaryAnchor: 'inscricao',
    ctaSecondaryAnchor: 'conteudo',
  },

  bullets: [
    '+40 horas de conteúdo direto ao ponto',
    'Projetos com Python + IA desde o módulo 1',
    'Suporte da comunidade com +20.000 alunos',
    'Certificado reconhecido pelo mercado',
  ],

  stats: [
    { value: '+20k', label: 'alunos ativos' },
    { value: '+40h', label: 'de conteúdo'   },
    { value: '98%',  label: 'recomendam'    },
  ],

  terminal: {
    title: 'terminal — projeto_ia.py',
    lines: [
      { id: 'install',  prompt: true,  text: 'pip install python-ia-course' },
      { id: 'env',      prompt: false, text: '✓ Ambiente configurado'       },
      { id: 'module',   prompt: false, text: '✓ Módulo 1 desbloqueado'      },
      { id: 'run',      prompt: true,  text: 'python projeto_ia.py'         },
      { id: 'loaded',   prompt: false, text: '→ Modelo carregado em 0.4s'   },
      { id: 'accuracy', prompt: false, text: '→ Resultado: 98.2% acurácia'  },
    ],
  },

  progress: {
    heading: 'Progresso do curso',
    badge: 'módulo 3/8',
    modules: [
      { name: 'Fundamentos Python',  pct: 100 },
      { name: 'Estruturas de dados', pct: 100 },
      { name: 'APIs e automações',   pct: 60  },
      { name: 'ML com scikit-learn', pct: 0   },
    ],
    labelComplete: '✓ concluído',
    labelLocked: 'bloqueado',
  },

  floatingBadge: {
    module: 'módulo 1',
    description: 'Python básico ao avançado',
  },

  certBadge: {
    title: 'Certificado emitido',
    subtitle: 'reconhecido pelo mercado',
  },
} as const;
