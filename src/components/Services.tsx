import {
    CursorArrowRaysIcon,
    EnvelopeOpenIcon,
    UsersIcon,
    CheckBadgeIcon,
    AcademicCapIcon,
    ClipboardDocumentListIcon
  } from '@heroicons/react/24/outline'
  
  const stats = [
    {
      id: 1,
      name: 'Soluções Integradas',
      icon: UsersIcon,
      description:
        'A elaboração de cada demanda, não fica apenas nos requisitos básicos, buscamos analisar e projetar soluções que atendem as diversas Normas e Legislações vigentes.',
    },
    {
      id: 2,
      name: 'Padronização',
      icon: ClipboardDocumentListIcon,
      description:
        "Contamos com a padronização dos nossos processos internos assim garantindo o atendimento das necessidades de cada cliente.",
    },
    {
      id: 3,
      name: 'Corpo técnico Especialistas',
      icon: AcademicCapIcon,
      description:
        'Contamos com setores e profissionais capacitados conforme cada demanda, garantindo assim experiência e referência em nossos serviços.',
    },
    {
      id: 4,
      name: 'Foco em Aprovação',
      icon: CheckBadgeIcon,
      description:
        "Nosso principal objetivo é garantir a aprovação da sua demanda para que você esteja regular e apto para trabalhar com segurança e tranquilidade.",
    },
  ]
  
  export default function Example() {
    return (
      <div className="container mx-auto py-16 md:py-24">
        <h2 className="mb-2 text-center text-3xl font-extrabold text-foreground md:text-4xl">
        Por que a MVM Engenharia é a Assessoria Perfeita para se contratar? 
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
        Somos um escritório que reduz a burocracia e agiliza todo o processo, conduzindo cada etapa de forma prática e eficiente para que você tenha menos preocupação. Isso porque contamos com um corpo técnico especializado que busca soluções inteligentes e seguras conforme a sua necessidade. 
          </p>
  
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white px-6 py-8 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Ícone */}
                <div className="rounded-xl bg-primary p-4">
                  <item.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
  
                {/* Título */}
                <h3 className="mt-4 text-lg font-medium text-accent-foreground">
                  {item.name}
                </h3>
  
                {/* Descrição */}
                <p className="mt-3 text-sm leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </dl>
      </div>
    )
  }