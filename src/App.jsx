import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Activity, Zap, Layers, BarChart, Target, Route, ShieldCheck, Banknote, Hexagon, Leaf, Network, CheckCircle2, Factory } from 'lucide-react';
import './index.css';

// Slide Configuration
const slides = [
  { id: 'vision', title: 'Visión Estratégica' },
  { id: 'problema', title: 'El Desafío' },
  { id: 'solucion', title: 'La Solución' },
  { id: 'fases', title: 'Ruta de Ejecución' },
  { id: 'inversion', title: 'Inversión' },
  { id: 'resultado', title: 'Proyección' }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isTransitioning]);

  const changeSlide = (newIndex) => {
    if (isTransitioning || newIndex === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 500); // match grid-transition duration
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) changeSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) changeSlide(currentSlide - 1);
  };

  const goToSlide = (index) => changeSlide(index);

  const renderSlideContent = (index) => {
    switch(index) {
      case 0:
        return (
          <div className="flex-col gap-8 items-center text-center animate-slide-up">
            <span className="tag mb-4">VISIÓN ESTRATÉGICA</span>
            
            <h1 className="hero-title max-w-5xl mx-auto tracking-tight font-bold text-slate-900 leading-tight">
              La idea no es comprar un dron. La idea es crear la primera infraestructura aérea con drones para apoyar operaciones mineras y comunidades rurales en Colombia.
            </h1>
            
            <div className="flex justify-center items-center gap-6 mt-16 animate-slide-up delay-200">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-slate-600">
                <Hexagon size={40} className="stroke-1" />
              </div>
              <div className="w-16 h-px bg-slate-200"></div>
              <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm text-emerald-700">
                <Network size={48} className="stroke-1" />
              </div>
              <div className="w-16 h-px bg-slate-200"></div>
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-slate-600">
                <Leaf size={40} className="stroke-1" />
              </div>
            </div>
            <p className="text-slate-500 font-medium tracking-wide text-sm uppercase mt-6 opacity-70">
              Minería • Tecnología UAV • Territorio
            </p>
          </div>
        );
      case 1:
        return (
          <div className="w-full flex-col h-full justify-center">
            <span className="tag animate-slide-up">El Desafío en el Territorio</span>
            <div className="grid-2 mt-8">
              <div className="flex-col gap-6 animate-slide-up delay-100">
                <ul className="space-y-6">
                  <li className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="text-slate-400 mt-1"><Activity size={24} /></div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Logística Lenta y Costosa</h3>
                      <p className="text-slate-500 mt-1 leading-relaxed">Procesos terrestres ineficientes que retrasan las operaciones en campo.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="text-slate-400 mt-1"><Route size={24} /></div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Acceso Geográfico Limitado</h3>
                      <p className="text-slate-500 mt-1 leading-relaxed">Terreno complejo que impone graves riesgos de seguridad operativa.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className="text-slate-400 mt-1"><Layers size={24} /></div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Tensión Social Continua</h3>
                      <p className="text-slate-500 mt-1 leading-relaxed">Necesidad de entablar relaciones transparentes y de valor con las comunidades.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="corporate-card flex flex-col justify-center h-full animate-slide-up delay-200 bg-slate-50/50">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-8">
                  <Zap size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 leading-tight mb-6">
                  Solución Estratégica
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Las tecnologías UAV (drones) permiten resolver simultáneamente los problemas <span className="text-emerald-700 font-bold">logísticos</span>, <span className="text-emerald-700 font-bold">operativos</span> y <span className="text-emerald-700 font-bold">sociales</span> de la región sin multiplicar los costos fijos.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full flex-col h-full justify-center text-center">
            <span className="tag mx-auto animate-slide-up">Operador UAS Industrial (Certificación RAC 100)</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-6 mb-16 tracking-tight animate-slide-up delay-100">
              Plataforma Tecnológica Transversal
            </h2>
            
            <div className="grid-3 text-left w-full max-w-6xl mx-auto animate-slide-up delay-200">
              <div className="corporate-card flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform group">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                  <Factory size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">1. Operaciones Mineras</h3>
                <p className="text-slate-500 leading-relaxed">
                  Inspecciones topográficas, monitoreo ambiental, levantamientos 3D de alta precisión y control de seguridad perimetral.
                </p>
              </div>
              
              <div className="corporate-card flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform group border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10"></div>
                <div className="p-3 bg-emerald-100 rounded-xl text-emerald-700">
                  <Leaf size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">2. Programas Agrícolas</h3>
                <p className="text-slate-500 leading-relaxed">
                  Drones de aspersión para apoyo a pequeños productores y programas de fumigación municipal. La llave de la licencia social.
                </p>
              </div>

              <div className="corporate-card flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform group">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                  <Network size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-2">3. Logística Aérea</h3>
                <p className="text-slate-500 leading-relaxed">
                  Reducción de tiempos muertos transportando repuestos livianos, muestras de laboratorio o insumos críticos de forma autónoma.
                </p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto">
            <span className="tag animate-slide-up mb-8">Ruta de Ejecución</span>
            
            <div className="animate-slide-up delay-100 mt-12 bg-white rounded-3xl p-10 border border-slate-100 shadow-sm relative">
              <div className="timeline">
                
                {/* Fase 1 */}
                <div className="timeline-item active flex flex-col text-center items-center">
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-bold text-emerald-700 mb-3">Fase 1<br/><span className="text-slate-800 text-lg">Agrícola y Social (Año 1)</span></h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">
                    Uso de drones para aspersión (comunidades), formación de talento local y obtención de certificación RAC 100.
                  </p>
                  <div className="mt-4 inline-flex px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold items-center gap-1 border border-emerald-100">
                    <CheckCircle2 size={12}/> Licencia Social
                  </div>
                </div>

                {/* Fase 2 */}
                <div className="timeline-item flex flex-col text-center items-center">
                  <div className="timeline-dot bg-slate-100 border-slate-200"></div>
                  <h3 className="text-xl font-bold text-slate-400 mb-3">Fase 2<br/><span className="text-slate-500 text-lg">Servicios Operativos</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed px-4">
                    Inspecciones especializadas, monitoreo aéreo, levantamientos para minería y apoyo en campo.
                  </p>
                </div>

                {/* Fase 3 */}
                <div className="timeline-item flex flex-col text-center items-center">
                  <div className="timeline-dot bg-slate-100 border-slate-200"></div>
                  <h3 className="text-xl font-bold text-slate-400 mb-3">Fase 3<br/><span className="text-slate-500 text-lg">Logística de Carga</span></h3>
                  <p className="text-slate-400 text-sm leading-relaxed px-4">
                    Introducción de vehículos aéreos de carga pesada y rutas logísticas autónomas consolidadas.
                  </p>
                </div>

              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto -mt-16">
            <span className="tag animate-slide-up">Inversión Inicial</span>
            
            <div className="animate-slide-up delay-100 my-10">
              <h2 className="text-7xl font-bold text-slate-900 tracking-tighter">
                ≈ 200 Millones <span className="text-4xl text-slate-400 font-medium">COP</span>
              </h2>
            </div>
            
            <p className="text-xl text-emerald-700 font-medium bg-emerald-50 px-6 py-2 rounded-full mb-12 animate-slide-up delay-200">
              Inversión moderada para construir una plataforma escalable.
            </p>

            <div className="flex w-full justify-center gap-16 animate-slide-up delay-300">
              {/* Left Column */}
              <div className="flex flex-col text-left auto-cols-max">
                <div className="flex items-center gap-4 py-4 border-b border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                  <span className="text-lg text-slate-700 font-medium whitespace-nowrap pr-4">Equipo (DJI Agras T40)</span>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                  <span className="text-lg text-slate-700 font-medium whitespace-nowrap pr-4">Pólizas y Seguros</span>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col text-left auto-cols-max">
                <div className="flex items-center gap-4 py-4 border-b border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                  <span className="text-lg text-slate-700 font-medium whitespace-nowrap pr-4">Certificación RAC 100</span>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                  <span className="text-lg text-slate-700 font-medium whitespace-nowrap pr-4">Formación y Capacitación</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center text-center">
            <span className="tag mb-12 animate-slide-up">Proyección a 36 Meses</span>
            
            <div className="max-w-4xl mx-auto animate-slide-up delay-100">
              <h2 className="text-3xl md:text-5xl font-medium text-slate-800 leading-tight italic tracking-tight mb-8">
                "Construir infraestructura aérea rural mediante drones industriales para minería, territorio y desarrollo comunitario.
              </h2>
              <p className="text-2xl md:text-4xl font-bold text-emerald-700 mt-6 tracking-tight">
                Este proyecto no es un dron.<br/>Es una nueva capa de infraestructura tecnológica."
              </p>
            </div>
            
            <div className="mt-20 animate-slide-up delay-300 flex gap-6">
              <button className="px-8 py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors shadow-sm hover:shadow-md">
                Iniciar Conversación
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
                Descargar Resumen Ejecutivo
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="presentation-container bg-white font-sans text-slate-900">
      <div className="slide-wrapper relative">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide absolute inset-0 ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            {index === currentSlide && (
              <div className="slide-content w-full h-full">
                {renderSlideContent(index)}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="controls pb-8 pt-4 bg-gradient-to-t from-white via-white to-transparent">
        <button 
          className="nav-btn" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="progress-container px-6">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`progress-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              title={slide.title}
              role="button"
              aria-label={`Ir a diapositiva ${index + 1}`}
            ></div>
          ))}
        </div>

        <button 
          className="nav-btn" 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;

