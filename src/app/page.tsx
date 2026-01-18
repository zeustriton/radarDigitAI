'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Wifi,
  GraduationCap,
  Activity,
  Video,
  FileText,
  Scale,
  Lock,
  FileCheck,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Clock,
  Zap,
  ArrowRight,
  CheckCircle2,
  Brain,
  HeartPulse,
  Coins,
  Bot,
  MessageSquare,
  User,
  ExternalLink
} from 'lucide-react'

type PriorityLevel = 'Crítica' | 'Estratégica' | 'Transformacional' | 'Transversal'

type IAPriorityLevel = 'Quick Wins' | 'Impacto Social' | 'Transformación Estructural'

interface Proposal {
  id: number
  title: string
  subtitle: string
  priority: PriorityLevel
  yearRange: string
  description: string
  viability: string
  viabilityLevel: 'Alta' | 'Media' | 'Media-Alta'
  sources: string[]
  icon: React.ReactNode
  color: string
  features: string[]
}

interface IAProposal {
  id: number
  title: string
  subtitle: string
  priority: IAPriorityLevel
  yearRange: string
  description: string
  viability: string
  viabilityLevel: 'Alta' | 'Media' | 'Media-Alta'
  sources: string[]
  icon: React.ReactNode
  color: string
  features: string[]
}

const proposals: Proposal[] = [
  {
    id: 1,
    title: 'Plataforma Única de Interoperabilidad',
    subtitle: '"Cero Colas"',
    priority: 'Crítica',
    yearRange: 'Año 1',
    description: 'Implementar una "Ventanilla Única Digital" obligatoria basada en la identidad digital del RENIEC y una plataforma de interoperabilidad (X-Road o similar). El objetivo es aplicar el principio Once Only (no pedir al ciudadano documentos que el Estado ya tiene).',
    viability: 'Alta. No requiere IA compleja, sino integración de APIs existentes. Ataca directamente la burocracia sin necesitar científicos de datos avanzados.',
    viabilityLevel: 'Alta',
    sources: [
      'Fuerza Popular: "Ventanilla Única Digital Nacional"',
      'Partido Morado: "Plataforma Mi Perú Digital"'
    ],
    icon: <FileCheck className="w-6 h-6" />,
    color: 'bg-red-500',
    features: [
      'Integración con RENIEC',
      'Principio "Once Only"',
      'Reducción del 90% en trámites físicos',
      'Acceso 24/7 desde cualquier dispositivo'
    ]
  },
  {
    id: 2,
    title: 'IA para Detección de Anomalías',
    subtitle: 'Anticorrupción en Compras Públicas',
    priority: 'Crítica',
    yearRange: 'Año 1-2',
    description: 'Desplegar algoritmos de auditoría sobre la base de datos del SEACE para detectar sobrecostos, fraccionamiento de contratos y colusión en tiempo real.',
    viability: 'Media-Alta. Los datos de compras existen y son auditables. El retorno de inversión es inmediato al frenar el drenaje de fondos. Es técnicamente más factible que predecir el crimen.',
    viabilityLevel: 'Media-Alta',
    sources: [
      'Somos Perú: "IA para detección automática de irregularidades"',
      'Fuerza Popular: "Shock Anticorrupción Digital"'
    ],
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-red-500',
    features: [
      'Análisis en tiempo real de SEACE',
      'Detección de sobrecostos',
      'Alertas de colusión',
      'Reportes automáticos al Congreso'
    ]
  },
  {
    id: 3,
    title: 'Conectividad Híbrida',
    subtitle: 'Fibra + Satelital para Escuelas y Postas',
    priority: 'Crítica',
    yearRange: 'Habilitador',
    description: 'Un plan agresivo de cierre de brecha digital utilizando una mezcla de tecnologías: fibra óptica en zonas urbanas y soluciones satelitales (LEO) en zonas rurales y amazónicas donde la fibra es inviable.',
    viability: 'Alta. Es un problema de inversión (CAPEX), no de invención tecnológica. Sin esto, ninguna otra propuesta digital funciona en regiones.',
    viabilityLevel: 'Alta',
    sources: [
      'Alianza Venceremos: Internet como derecho humano',
      'Fuerza Popular: Cobertura satelital amazónica',
      'Partido Morado: Conectividad satelital para 2,500 postas'
    ],
    icon: <Wifi className="w-6 h-6" />,
    color: 'bg-red-500',
    features: [
      'Fibra óptica en zonas urbanas',
      'Satélites LEO en zonas rurales',
      'Cobertura en la Amazonía',
      'Internet en todas las escuelas rurales'
    ]
  },
  {
    id: 4,
    title: 'Becas Masivas en Talento Digital',
    subtitle: 'Shock de Talento Técnico',
    priority: 'Crítica',
    yearRange: 'Habilitador',
    description: 'Programas masivos de becas cortas (bootcamps) y carreras técnicas en programación, ciberseguridad y análisis de datos para cubrir el déficit de profesionales necesario para implementar las otras reformas.',
    viability: 'Alta. Se puede ejecutar mediante alianzas con el sector privado y educativo rápidamente.',
    viabilityLevel: 'Alta',
    sources: [
      'Somos Perú: "Becas Python" - 150,000 jóvenes',
      'Avanza País: Programa nacional de talento en IA',
      'Fuerza Popular: Becas en Ciberseguridad'
    ],
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-red-500',
    features: [
      'Bootcamps intensivos de 6 meses',
      'Formación en IA y datos',
      'Ciberseguridad básica y avanzada',
      'Alianzas con empresas tecnológicas'
    ]
  },
  {
    id: 5,
    title: 'Historia Clínica Electrónica Unificada',
    subtitle: 'Sistema Interoperable',
    priority: 'Estratégica',
    yearRange: 'Año 2-4',
    description: 'Crear un repositorio único de datos de salud (MINSA, EsSalud, Privados) bajo el estándar HL7 FHIR. Permitir que el historial viaje con el paciente.',
    viability: 'Media. Requiere un esfuerzo fuerte de estandarización de datos (limpieza) en los primeros dos años antes de ver resultados masivos. Es fundamental para la telemedicina.',
    viabilityLevel: 'Media',
    sources: [
      'Partido Morado: Estándar HL7 FHIR',
      'Libertad Popular y Fuerza Popular coinciden en historia clínica única'
    ],
    icon: <Activity className="w-6 h-6" />,
    color: 'bg-orange-500',
    features: [
      'Estándar HL7 FHIR internacional',
      'Integración MINSA + EsSalud + Privado',
      'Acceso desde cualquier establecimiento',
      'Base para telemedicina avanzada'
    ]
  },
  {
    id: 6,
    title: 'Centrales de Seguridad Integrada',
    subtitle: 'C5i con Videovigilancia Inteligente',
    priority: 'Estratégica',
    yearRange: 'Año 2-3',
    description: 'Integrar las cámaras de videovigilancia aisladas (municipios y privados) en centros de comando regionales para respuesta rápida, usando reconocimiento de placas y patrones básicos.',
    viability: 'Media. Se debe evitar la "predicción del crimen" compleja al inicio (por falta de datos limpios) y enfocarse en la respuesta reactiva eficiente y mapas de calor delictivo.',
    viabilityLevel: 'Media',
    sources: [
      'Fuerza Popular: Centros C5i',
      'Avanza País: Mapas de calor e IA para patrullaje',
      'Partido Morado: Sistema de videovigilancia inteligente'
    ],
    icon: <Video className="w-6 h-6" />,
    color: 'bg-orange-500',
    features: [
      'Centros de comando regionales',
      'Reconocimiento de placas',
      'Mapas de calor delictivo',
      'Respuesta rápida integrada'
    ]
  },
  {
    id: 7,
    title: 'Facturación y Formalización Digital',
    subtitle: '"SUNAT Invisible"',
    priority: 'Estratégica',
    yearRange: 'Año 2',
    description: 'Simplificar la tributación mediante la automatización basada en facturación electrónica y billeteras digitales, eliminando libros contables físicos y declaraciones complejas para pequeños negocios.',
    viability: 'Alta. SUNAT ya tiene la infraestructura de facturación electrónica avanzada.',
    viabilityLevel: 'Alta',
    sources: [
      'Somos Perú: "Facturación Electrónica Universal"',
      'Libertad Popular: Plataforma única tributaria'
    ],
    icon: <FileText className="w-6 h-6" />,
    color: 'bg-orange-500',
    features: [
      'Automatización completa',
      'Eliminación de libros físicos',
      'Integración con billeteras digitales',
      'Declaraciones simplificadas'
    ]
  },
  {
    id: 8,
    title: 'Expediente Judicial Electrónico',
    subtitle: 'Digitalización Total del Sistema',
    priority: 'Transformacional',
    yearRange: 'Año 3-5',
    description: 'Digitalización total de procesos judiciales (no penales primero) para permitir trazabilidad, reducir la pérdida de documentos y acelerar sentencias.',
    viability: 'Media. El Poder Judicial ya tiene avances, pero requiere escalamiento masivo y cambio cultural en los operadores de justicia.',
    viabilityLevel: 'Media',
    sources: [
      'Fuerza Popular',
      'Avanza País',
      'Partido Morado: Obligatoriedad y expansión del EJE'
    ],
    icon: <Scale className="w-6 h-6" />,
    color: 'bg-purple-500',
    features: [
      'Procesos 100% digitales',
      'Trazabilidad completa',
      'Reducción de tiempos en sentencias',
      'Acceso en línea para ciudadanos'
    ]
  },
  {
    id: 9,
    title: 'Ciberseguridad y Protección',
    subtitle: 'Infraestructura Crítica Nacional',
    priority: 'Transversal',
    yearRange: 'Todo el periodo',
    description: 'Crear un Centro Nacional de Operaciones de Ciberseguridad (SOC) para proteger activos críticos (agua, luz, datos bancarios y datos ciudadanos) ante ataques, dado que la digitalización aumenta la superficie de riesgo.',
    viability: 'Alta necesidad / Viabilidad técnica media (requiere talento especializado propuesto en el punto 4).',
    viabilityLevel: 'Media',
    sources: [
      'Alianza para el Progreso: "Zar de Tecnología"',
      'Avanza País: Comando de Ciberdefensa'
    ],
    icon: <Lock className="w-6 h-6" />,
    color: 'bg-emerald-500',
    features: [
      'SOC Nacional 24/7',
      'Protección de infraestructura crítica',
      'Respuesta a incidentes',
      'Auditoría de seguridad continua'
    ]
  }
]

const aiProposals: IAProposal[] = [
  {
    id: 1,
    title: 'IA para Detección de Corrupción en Compras Públicas',
    subtitle: 'Modelo "VigIA"',
    priority: 'Quick Wins',
    yearRange: '12-18 meses',
    description: 'Implementar algoritmos de IA sobre la base de datos del SEACE para detectar en tiempo real sobrecostos, fraccionamiento de contratos y direccionamiento a proveedores recurrentes.',
    viability: 'Media-Alta. Los datos de compras ya son estructurados. No requiere limpieza masiva. El retorno de inversión es inmediato al bloquear pagos sospechosos.',
    viabilityLevel: 'Media-Alta',
    sources: [
      'Somos Perú: IA para detección automática de irregularidades y bloqueo de pagos',
      'APP: Modelo "VigIA" para cruzar datos y detectar licitaciones a medida',
      'Fuerza Popular: Shock Anticorrupción Digital con IA',
      'Partido Morado: Auditoría digital continua e IA'
    ],
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-blue-500',
    features: [
      'Detección en tiempo real de SEACE',
      'Análisis de sobrecostos y fraccionamiento',
      'Alertas de proveedores recurrentes',
      'Bloqueo automático de pagos sospechosos'
    ]
  },
  {
    id: 2,
    title: 'Asistentes Virtuales para Trámites y Burocracia',
    subtitle: 'Chatbots/LLMs',
    priority: 'Quick Wins',
    yearRange: '12-18 meses',
    description: 'Desplegar asistentes de IA Generativa para automatizar la redacción de documentos (oficios, partes policiales) y guiar al ciudadano en trámites (Ventanilla Única).',
    viability: 'Alta. La IA generativa actual (GPT-4) maneja excelente lenguaje natural y documentos desordenados, superando la brecha de datos sucios.',
    viabilityLevel: 'Alta',
    sources: [
      'Partido Aprista: Chatbots internos para consultas normativas',
      'Libertad Popular: IA adaptativa para acompañamiento en trámites',
      'Fuerza Popular: Estrategia Cero Colas con atención 100% digital vía IA'
    ],
    icon: <Bot className="w-6 h-6" />,
    color: 'bg-blue-500',
    features: [
      'Asistentes virtuales para trámites',
      'Redacción automática de documentos',
      'Guía paso a paso para ciudadanos',
      'Reducción de carga operativa del servidor público'
    ]
  },
  {
    id: 3,
    title: 'Shock de Talento en IA y Datos',
    subtitle: 'Becas Masivas',
    priority: 'Quick Wins',
    yearRange: '12-18 meses',
    description: 'Programas de formación técnica acelerada (bootcamps) en Ciencia de Datos, Ciberseguridad e IA para crear la fuerza laboral que implementará los otros proyectos.',
    viability: 'Alta. Sin este capital humano, el Estado dependerá de consultoras costosas y no tendrá soberanía tecnológica.',
    viabilityLevel: 'Alta',
    sources: [
      'Avanza País: Programa Nacional de Talento en IA y becas',
      'Somos Perú: Perú Digital 2030 - 150,000 jóvenes',
      'Fuerza Popular: Becas STEM e IA para cerrar brecha de género'
    ],
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'bg-blue-500',
    features: [
      'Bootcamps en Ciencia de Datos',
      'Formación en Ciberseguridad',
      'Programas de IA y Machine Learning',
      'Creación de soberanía tecnológica'
    ]
  },
  {
    id: 4,
    title: 'Sistema de Nutrición Temprana con IA',
    subtitle: 'SINANT',
    priority: 'Impacto Social',
    yearRange: '24-36 meses',
    description: 'Usar algoritmos predictivos sobre el Padrón Nominal para identificar, nombre por nombre, a los niños con alto riesgo de anemia o desnutrición antes de que sea irreversible.',
    viability: 'Media. Se basa en datos demográficos y de salud básica manejables. El impacto humano es el más alto de todas las propuestas.',
    viabilityLevel: 'Media',
    sources: [
      'Integridad Democrática: SINANT con algoritmos predictivos',
      'Partido Morado: App de seguimiento nutricional con IA'
    ],
    icon: <HeartPulse className="w-6 h-6" />,
    color: 'bg-purple-500',
    features: [
      'Identificación predictiva de riesgo',
      'Focalización precisa de ayuda social',
      'Alertas tempranas de anemia/desnutrición',
      'Alto impacto humano'
    ]
  },
  {
    id: 5,
    title: 'IA para Seguridad: Videovigilancia y Patrones',
    subtitle: 'No Predicción Compleja',
    priority: 'Impacto Social',
    yearRange: '24-36 meses',
    description: 'Integrar cámaras de vigilancia con IA para reconocimiento de placas y detección de patrones de movimiento (ej. merodeo), en lugar de intentar predecir el crimen.',
    viability: 'Media. La tecnología de visión artificial está madura. Es más efectivo que tratar de predecir delitos con denuncias mal tipificadas.',
    viabilityLevel: 'Media',
    sources: [
      'Fuerza Popular: Centros C5i con mapas de delito e IA',
      'Avanza País: Sistema tela de araña informático',
      'Integridad Democrática: Vigilancia aérea con drones y mapas de calor'
    ],
    icon: <Video className="w-6 h-6" />,
    color: 'bg-purple-500',
    features: [
      'Reconocimiento de placas',
      'Detección de patrones de movimiento',
      'Respuesta reactiva eficiente',
      'Mapas de calor delictivo'
    ]
  },
  {
    id: 6,
    title: 'Justicia Digital: Clasificación y Transcripción',
    subtitle: 'Automatización Judicial',
    priority: 'Impacto Social',
    yearRange: '24-36 meses',
    description: 'Usar IA para transcribir audiencias automáticamente y clasificar expedientes judiciales (semáforo de urgencia), reduciendo la carga procesal.',
    viability: 'Media. Ataca el cuello de botella administrativo del Poder Judicial sin reemplazar la decisión del juez.',
    viabilityLevel: 'Media',
    sources: [
      'Partido Morado: IA jurídica para precedentes y transcripción',
      'Avanza País: Analítica procesal y detección de cuellos de botella',
      'Partido Aprista: IA para transcripción automática de declaraciones'
    ],
    icon: <Scale className="w-6 h-6" />,
    color: 'bg-purple-500',
    features: [
      'Transcripción automática de audiencias',
      'Clasificación de expedientes',
      'Semáforo de urgencia',
      'Reducción de carga procesal'
    ]
  },
  {
    id: 7,
    title: 'Historia Clínica Electrónica Unificada con IA',
    subtitle: 'Interoperabilidad',
    priority: 'Transformación Estructural',
    yearRange: '36-60 meses',
    description: 'Crear un repositorio único de datos de salud (MINSA/EsSalud) que permita aplicar IA para diagnósticos y gestión de epidemias.',
    viability: 'Media. Requiere estandarización semántica masiva (HL7 FHIR) antes de usar IA. Si se hace bien, transforma la salud pública.',
    viabilityLevel: 'Media',
    sources: [
      'Partido del Buen Gobierno: Historia Clínica Única interoperable',
      'Libertad Popular: Tarjeta Única de Salud con Historia Clínica',
      'Fuerza Popular: Interoperabilidad total de historias clínicas'
    ],
    icon: <Activity className="w-6 h-6" />,
    color: 'bg-emerald-500',
    features: [
      'Repositorio único de datos de salud',
      'IA para diagnósticos',
      'Gestión de epidemias',
      'Transformación de salud pública'
    ]
  },
  {
    id: 8,
    title: 'IA para Fiscalización Tributaria y Aduanera',
    subtitle: 'SUNAT con IA',
    priority: 'Transformación Estructural',
    yearRange: '36-60 meses',
    description: 'Uso de Big Data e IA para detectar evasión, elusión y contrabando en tiempo real, cruzando datos financieros y de facturación electrónica.',
    viability: 'Alta. La SUNAT ya tiene una base digital sólida (facturación electrónica) que facilita la aplicación de IA.',
    viabilityLevel: 'Alta',
    sources: [
      'Libertad Popular: Fiscalización inteligente contra evasión',
      'Fuerza Popular: Ventanilla Única de Comercio Exterior 2.0 con IA'
    ],
    icon: <Coins className="w-6 h-6" />,
    color: 'bg-emerald-500',
    features: [
      'Detección de evasión en tiempo real',
      'Identificación de elusión tributaria',
      'Detección de contrabando',
      'Crossing de datos financieros'
    ]
  },
  {
    id: 9,
    title: 'Ciberseguridad Defensiva y Ofensiva con IA',
    subtitle: 'Protección de Infraestructura Crítica',
    priority: 'Transformación Estructural',
    yearRange: 'Todo el periodo',
    description: 'Proteger la infraestructura crítica (agua, luz, datos) usando IA para detectar ciberataques en tiempo real, dado que la digitalización expone al país a nuevos riesgos.',
    viability: 'Alta necesidad / Viabilidad técnica media (requiere talento especializado propuesto en el punto 3).',
    viabilityLevel: 'Media',
    sources: [
      'Partido Aprista: Fuerza de Operaciones de Información y Ciberdefensa (FOIDEF)',
      'APP: CERT-Perú y Brigada Nacional de Ciberpolicía',
      'Avanza País: Programa nacional de ciberseguridad'
    ],
    icon: <Lock className="w-6 h-6" />,
    color: 'bg-emerald-500',
    features: [
      'Detección de ciberataques en tiempo real',
      'Protección de infraestructura crítica',
      'Ciberseguridad defensiva y ofensiva',
      'Protección de agua, luz y datos'
    ]
  }
]

const getPriorityColor = (priority: PriorityLevel): string => {
  switch (priority) {
    case 'Crítica':
      return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
    case 'Estratégica':
      return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800'
    case 'Transformacional':
      return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800'
    case 'Transversal':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getPriorityIcon = (priority: PriorityLevel) => {
  switch (priority) {
    case 'Crítica':
      return <Zap className="w-4 h-4" />
    case 'Estratégica':
      return <TrendingUp className="w-4 h-4" />
    case 'Transformacional':
      return <Clock className="w-4 h-4" />
    case 'Transversal':
      return <ArrowRight className="w-4 h-4" />
  }
}

const getViabilityColor = (level: string): string => {
  if (level.includes('Alta')) {
    return 'text-green-600 dark:text-green-400'
  }
  return 'text-yellow-600 dark:text-yellow-400'
}

const getIAPriorityColor = (priority: IAPriorityLevel): string => {
  switch (priority) {
    case 'Quick Wins':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800'
    case 'Impacto Social':
      return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800'
    case 'Transformación Estructural':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

const getIAPriorityIcon = (priority: IAPriorityLevel) => {
  switch (priority) {
    case 'Quick Wins':
      return <Zap className="w-4 h-4" />
    case 'Impacto Social':
      return <TrendingUp className="w-4 h-4" />
    case 'Transformación Estructural':
      return <Clock className="w-4 h-4" />
  }
}

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('todas')
  const [expandedIACard, setExpandedIACard] = useState<number | null>(null)
  const [activeIATab, setActiveIATab] = useState('todas')

  const filteredProposals = activeTab === 'todas'
    ? proposals
    : proposals.filter(p => p.priority === activeTab)

  const filteredAIProposals = activeIATab === 'todas'
    ? aiProposals
    : aiProposals.filter(p => p.priority === activeIATab)

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const toggleIACard = (id: number) => {
    setExpandedIACard(expandedIACard === id ? null : id)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Header Section */}
      <header className="relative w-full overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {/* Animated gradient circles */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 blur-2xl rounded-full scale-125" />
                <div className="relative bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-md border-2 border-white/40 rounded-3xl p-6 md:p-8 shadow-2xl">
                  <Shield className="w-16 h-16 md:w-24 md:h-24 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-white to-red-200 bg-clip-text text-transparent drop-shadow-2xl">
                Radar DigitAI
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 space-y-3"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-xl">
                Propuestas Tecnológicas Electorales
              </h2>
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                <p className="text-xl md:text-2xl font-semibold text-red-100">
                  Elecciones Perú 2026
                </p>
              </div>
            </motion.div>

            {/* Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-4 hover:bg-white/25 transition-all hover:scale-105 cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">18</div>
                <div className="text-sm md:text-base text-white/90">Propuestas</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-4 hover:bg-white/25 transition-all hover:scale-105 cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">3</div>
                <div className="text-sm md:text-base text-white/90">Prioridades</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl px-6 py-4 hover:bg-white/25 transition-all hover:scale-105 cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm md:text-base text-white/90">Viabilidad</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent" />
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Nota Destacada sobre Propuestas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <Card className="border-amber-200 dark:border-amber-900 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500 text-white rounded-xl flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                    Nota Importante sobre las Propuestas
                  </h3>
                  <p className="text-base text-amber-800 dark:text-amber-200 leading-relaxed mb-3">
                    Este análisis presenta las <strong className="text-amber-900 dark:text-amber-100">9 propuestas tecnológicas más relevantes</strong> de más de 890 propuestas revisadas en los planes de gobierno de diversos partidos políticos para las elecciones presidenciales de Perú 2026.
                  </p>
                  <p className="text-base text-amber-800 dark:text-amber-200 leading-relaxed mb-3">
                    Estas iniciativas representan las propuestas con <strong className="text-amber-900 dark:text-amber-100">mayor impacto y viabilidad técnica</strong>, seleccionadas tras un análisis exhaustivo de los planes de gobierno completos.
                  </p>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-amber-300 dark:border-amber-700">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Recomendación de Implementación
                    </h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                      Se sugiere priorizar la implementación en el siguiente orden estratégico:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-amber-900 dark:text-amber-100"><strong>Fase Crítica (Años 1-2):</strong> Iniciar con las 4 bases fundamentales - Plataforma de Interoperabilidad, IA Anticorrupción, Conectividad y Becas de Talento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-amber-900 dark:text-amber-100"><strong>Fase Estratégica (Años 2-4):</strong> Historia Clínica Electrónica, Centros C5i y Formalización Digital MYPE</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-amber-900 dark:text-amber-100"><strong>Fase Transformacional (Años 3-5):</strong> Expediente Judicial Electrónico, manteniendo Ciberseguridad como iniciativa Transversal permanente</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300 italic">
                    Esta selección se basa en análisis de viabilidad técnica, impacto en la ciudadanía y retorno de inversión. Para consultar las propuestas completas de todos los partidos, visite la plataforma oficial del JNE.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-blue-200 dark:border-blue-900 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-600" />
                Niveles de Prioridad y Cronograma Sugerido
              </CardTitle>
              <CardDescription>
                Clasificación de las 9 propuestas según impacto, viabilidad y tiempo de implementación recomendado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-red-900 dark:text-red-300">Crítica</h4>
                    <p className="text-xs text-red-700 dark:text-red-400">Años 1-2: Bases y victorias rápidas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                  <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/40">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-orange-900 dark:text-orange-300">Estratégica</h4>
                    <p className="text-xs text-orange-700 dark:text-orange-400">Años 2-4: Alto impacto tras maduración</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-purple-900 dark:text-purple-300">Transformacional</h4>
                    <p className="text-xs text-purple-700 dark:text-purple-400">Años 3-5: Cambios estructurales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
                    <ArrowRight className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-emerald-900 dark:text-emerald-300">Transversal</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">Todo el periodo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white dark:bg-slate-900 shadow-md">
              <TabsTrigger value="todas" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Todas ({proposals.length})
              </TabsTrigger>
              <TabsTrigger value="Crítica" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Crítica ({proposals.filter(p => p.priority === 'Crítica').length})
              </TabsTrigger>
              <TabsTrigger value="Estratégica" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Estratégica ({proposals.filter(p => p.priority === 'Estratégica').length})
              </TabsTrigger>
              <TabsTrigger value="Transformacional" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Transformacional ({proposals.filter(p => p.priority === 'Transformacional').length})
              </TabsTrigger>
              <TabsTrigger value="Transversal" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Transversal ({proposals.filter(p => p.priority === 'Transversal').length})
              </TabsTrigger>
            </TabsList>

            {/* Proposals Grid */}
            <TabsContent value={activeTab} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProposals.map((proposal, index) => (
                    <motion.div
                      key={proposal.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05
                      }}
                    >
                      <Card
                        className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2 hover:border-red-300 dark:hover:border-red-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm"
                        onClick={() => toggleCard(proposal.id)}
                      >
                        <CardHeader className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className={`p-3 rounded-xl ${proposal.color} text-white`}>
                              {proposal.icon}
                            </div>
                            <Badge className={getPriorityColor(proposal.priority)}>
                              <span className="flex items-center gap-1">
                                {getPriorityIcon(proposal.priority)}
                                {proposal.priority}
                              </span>
                            </Badge>
                          </div>
                          <div>
                            <CardTitle className="text-xl leading-tight mb-1">
                              {proposal.title}
                            </CardTitle>
                            <CardDescription className="text-base font-medium text-slate-600 dark:text-slate-300">
                              {proposal.subtitle}
                            </CardDescription>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-slate-500" />
                            <span className="text-slate-600 dark:text-slate-400 font-medium">
                              {proposal.yearRange}
                            </span>
                          </div>

                          <div className={`flex items-start gap-2 text-sm ${getViabilityColor(proposal.viabilityLevel)}`}>
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-semibold">Viabilidad: </span>
                              <span>{proposal.viabilityLevel}</span>
                            </div>
                          </div>

                          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                            {proposal.description}
                          </p>

                          <div className="pt-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleCard(proposal.id)
                              }}
                            >
                              {expandedCard === proposal.id ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-2" />
                                  Ver menos
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-2" />
                                  Ver más detalles
                                </>
                              )}
                            </Button>
                          </div>

                          <AnimatePresence>
                            {expandedCard === proposal.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border-t pt-4 space-y-4"
                              >
                                <div>
                                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-slate-500" />
                                    Características Principales
                                  </h4>
                                  <ul className="space-y-2">
                                    {proposal.features.map((feature, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                                      >
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-slate-500" />
                                    Análisis de Viabilidad
                                  </h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-300">
                                    {proposal.viability}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-slate-500" />
                                    Fuentes / Partidos que lo proponen
                                  </h4>
                                  <ul className="space-y-1">
                                    {proposal.sources.map((source, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm text-slate-600 dark:text-slate-300 pl-4 border-l-2 border-red-300 dark:border-red-700"
                                      >
                                        {source}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredProposals.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Shield className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                  <p className="text-slate-500 text-lg">
                    No hay propuestas en esta categoría
                  </p>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Resumen de Viabilidad Técnica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Para que estas propuestas sean viables en 5 años, el gobierno entrante debe dedicar el <strong className="text-red-600">Año 1 casi exclusivamente a la Gobernanza de Datos</strong> (limpieza y estandarización) y a la Conectividad. Intentar saltar a sistemas predictivos complejos (como medicina personalizada o predicción criminal avanzada) sin tener estas bases resultará en proyectos fallidos por "alucinaciones" de datos o falta de infraestructura.
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-white dark:bg-slate-800">
                  <div className="text-3xl font-bold text-red-600">4</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Propuestas Críticas</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white dark:bg-slate-800">
                  <div className="text-3xl font-bold text-orange-600">3</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Propuestas Estratégicas</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white dark:bg-slate-800">
                  <div className="text-3xl font-bold text-purple-600">2</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Propuestas Transformacionales + Transversales</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* IA Proposals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 text-white px-6 py-3 rounded-full mb-4">
              <Brain className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold">
                9 Propuestas de Inteligencia Artificial
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Seleccionadas por su impacto y viabilidad técnica para el periodo 2026-2031
            </p>
          </div>

          {/* IA Note Card */}
          <Card className="border-purple-200 dark:border-purple-900 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500 text-white rounded-xl flex-shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
                    Enfoque en IA: Prioridad y Viabilidad
                  </h3>
                  <p className="text-base text-purple-800 dark:text-purple-200 leading-relaxed">
                    Esta selección descarta ideas utópicas y prioriza aquellas que pueden funcionar pese a la mala calidad de datos y la brecha de talento inicial, clasificándolas por su urgencia y viabilidad de ejecución.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* IA Tabs */}
          <Tabs value={activeIATab} onValueChange={setActiveIATab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="todas" className="data-[state=active]:bg-slate-800 data-[state=active]:text-white">
                Todas (9)
              </TabsTrigger>
              <TabsTrigger value="Quick Wins" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Quick Wins
              </TabsTrigger>
              <TabsTrigger value="Impacto Social" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Impacto Social
              </TabsTrigger>
              <TabsTrigger value="Transformación Estructural" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                Transformación
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeIATab} className="space-y-4">
              <motion.div layout className="grid gap-6">
                {filteredAIProposals.map((proposal, index) => (
                  <motion.div
                    key={proposal.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`${expandedIACard === proposal.id ? 'ring-2 ring-blue-500' : ''} hover:shadow-lg transition-all`}>
                      <CardHeader>
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl ${proposal.color} text-white flex-shrink-0`}>
                              {proposal.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <CardTitle className="text-xl">{proposal.title}</CardTitle>
                                <Badge className={getIAPriorityColor(proposal.priority)}>
                                  {getIAPriorityIcon(proposal.priority)}
                                  {proposal.priority}
                                </Badge>
                              </div>
                              <CardDescription className="text-base font-medium">
                                {proposal.subtitle}
                              </CardDescription>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                  {proposal.yearRange}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleIACard(proposal.id)}
                            className="flex items-center gap-2"
                          >
                            {expandedIACard === proposal.id ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Ocultar
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                Ver detalles
                              </>
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <AnimatePresence>
                        {expandedIACard === proposal.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="pt-4 border-t">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                                    Descripción
                                  </h4>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {proposal.description}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                                    Viabilidad Técnica
                                  </h4>
                                  <p className={`text-sm font-medium ${getViabilityColor(proposal.viabilityLevel)}`}>
                                    {proposal.viability}
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                                    Características
                                  </h4>
                                  <ul className="space-y-2">
                                    {proposal.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-300 mb-2">
                                    Fuentes Partidarias
                                  </h4>
                                  <ul className="space-y-1">
                                    {proposal.sources.map((source, idx) => (
                                      <li key={idx} className="text-xs text-slate-500 dark:text-slate-500 pl-2 border-l-2 border-blue-300">
                                        {source}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>

          {/* AI Implementation Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="border-purple-200 dark:border-purple-900 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  Estrategia de Implementación IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  Para que el gobierno entrante tenga éxito, debe evitar la tentación de lanzar proyectos de "Ciudades Inteligentes" o "Predicción del Crimen" en el primer año.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  La estrategia técnica correcta es: <strong className="text-purple-600">Año 1-2 enfocarse en IA Anticorrupción (Compras) y Chatbots de Trámites (Quick Wins)</strong>, mientras se invierte en Talento y Limpieza de Datos.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Recién en el <strong className="text-emerald-600">Año 3-4</strong> se podrá desplegar la Historia Clínica con IA y la Seguridad Predictiva con garantías de éxito.
                </p>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white dark:bg-slate-800">
                    <div className="text-3xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Quick Wins (12-18 meses)</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white dark:bg-slate-800">
                    <div className="text-3xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Impacto Social (24-36 meses)</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white dark:bg-slate-800">
                    <div className="text-3xl font-bold text-emerald-600">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Transformación (36-60 meses)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-orange-900/30 border border-red-700/30 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-red-500/20 rounded-lg flex-shrink-0">
                  <Shield className="w-5 h-5 text-red-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-red-200 mb-2">
                    Disclaimer - Importante
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    Esta plataforma presenta un <strong className="text-white">análisis técnico</strong> de <strong className="text-white">algunas propuestas tecnológicas</strong> encontradas en los planes de gobierno de diversos partidos políticos. La información presentada tiene carácter <strong className="text-white">estrictamente informativo</strong> y <strong className="text-white">no representa una postura política</strong> ni pretende ser una evaluación completa de todos los planes de gobierno.
                  </p>
                </div>
              </div>

              {/* JNE Platform Link */}
              <div className="mt-6 pt-6 border-t border-red-700/30">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">
                      Información Oficial Completa
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      Le recomendamos visitar la <strong className="text-white">plataforma oficial del Jurado Nacional de Elecciones (JNE)</strong> para consultar los planes de gobierno en su totalidad y obtener la información oficial actualizada:
                    </p>
                    <a
                      href="https://www.jne.gob.pe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
                    >
                      <span>Plataforma Oficial JNE</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Purpose Note */}
              <div className="mt-6 pt-6 border-t border-red-700/30">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg flex-shrink-0">
                    <FileText className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-200 mb-2">
                      Objetivo de Esta Web
                    </h4>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      El propósito de esta web es <strong className="text-white">exclusivamente informativo</strong> a nivel técnico, facilitando el acceso y comprensión de las propuestas tecnológicas planteadas por los partidos políticos para las elecciones presidenciales de Perú 2026. No respalda a ningún candidato o partido político.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="text-center border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm mb-2">
              © 2026 - Radar DigitAI: Propuestas Tecnológicas Electorales
            </p>
            <p className="text-slate-500 text-xs mb-3">
              Elecciones Perú 2026 - Plataforma de Análisis Técnico
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <span>Desarrollado por</span>
              <a
                href="https://www.linkedin.com/in/robertopuyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Kepler Blacklock
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/robertopuyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-slate-200 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
