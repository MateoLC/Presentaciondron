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
          <div className="flex-col gap-4 md:gap-8 items-center text-center animate-slide-up px-4 md:px-0 mt-[-2rem] md:mt-0">
            <span className="tag mb-4 text-xs md:text-sm">VISIÓN ESTRATÉGICA</span>
            
            <h1 className="hero-title max-w-5xl mx-auto tracking-tight font-bold text-slate-900 leading-tight text-3xl md:text-5xl lg:text-6xl">
              La idea no es comprar un dron. La idea es crear la primera infraestructura aérea con drones para apoyar operaciones mineras y comunidades rurales en Colombia.
            </h1>
            
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mt-6 md:mt-16 animate-slide-up delay-200">
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
          <div className="w-full flex-col h-full justify-center px-4 md:px-0 mt-[-1rem] md:mt-0">
            <span className="tag animate-slide-up text-xs md:text-sm">El Desafío en el Territorio</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 mt-4 md:mt-8 w-full max-w-6xl mx-auto">
              <div className="flex-col gap-4 md:gap-6 animate-slide-up delay-100">
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
              
              <div className="corporate-card flex flex-col justify-center h-full animate-slide-up delay-200 bg-slate-50/50 p-6 md:p-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 md:mb-8">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4 md:mb-6">
                  Solución Estratégica
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  Las tecnologías UAV (drones) permiten resolver simultáneamente los problemas <span className="text-emerald-700 font-bold">logísticos</span>, <span className="text-emerald-700 font-bold">operativos</span> y <span className="text-emerald-700 font-bold">sociales</span> de la región sin multiplicar los costos fijos.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full flex-col h-full justify-center text-center px-4 md:px-0">
            <span className="tag mx-auto animate-slide-up text-xs md:text-sm">Operador UAS Industrial (Certificación RAC 100)</span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-4 md:mt-6 mb-8 md:mb-16 tracking-tight animate-slide-up delay-100 px-2">
              Plataforma Tecnológica Transversal
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left w-full max-w-6xl mx-auto animate-slide-up delay-200">
              <div className="corporate-card flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform group p-6 md:p-8">
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
          <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 md:px-0 mt-[-1.5rem] md:mt-0">
            <span className="tag animate-slide-up mb-4 md:mb-8 text-xs md:text-sm mx-auto md:mx-0">Ruta de Ejecución</span>
            
            <div className="animate-slide-up delay-100 mt-6 md:mt-12 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0 justify-between relative before:absolute before:inset-0 before:w-1 md:before:w-full before:h-full md:before:h-1 before:bg-slate-100 before:left-6 md:before:left-0 before:top-0 md:before:top-6 before:-z-10">
                
                {/* Fase 1 */}
                <div className="flex-1 flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0 relative">
                  <div className="w-12 h-12 md:mb-6 rounded-full bg-emerald-100 border-4 border-white flex-shrink-0 z-10 mx-auto hidden md:block"></div>
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border-4 border-white flex-shrink-0 z-10 md:hidden"></div>
                  <div className="flex flex-col items-start md:items-center">
                    <h3 className="text-lg md:text-xl font-bold text-emerald-700 mb-1 md:mb-3">Fase 1<br/><span className="text-slate-800 text-base md:text-lg">Agrícola y Social (Año 1)</span></h3>
                    <p className="text-slate-500 text-sm leading-relaxed md:px-4 text-left md:text-center">
                      Uso de drones para aspersión (comunidades), formación de talento local y obtención RAC 100.
                    </p>
                    <div className="mt-3 inline-flex px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold items-center gap-1 border border-emerald-100 md:mx-auto">
                      <CheckCircle2 size={12}/> Licencia Social
                    </div>
                  </div>
                </div>

                {/* Fase 2 */}
                <div className="flex-1 flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0 relative">
                  <div className="w-12 h-12 md:mb-6 rounded-full bg-slate-100 border-4 border-white flex-shrink-0 z-10 mx-auto hidden md:block"></div>
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-4 border-white flex-shrink-0 z-10 md:hidden"></div>
                  <div className="flex flex-col items-start md:items-center">
                    <h3 className="text-lg md:text-xl font-bold text-slate-400 mb-1 md:mb-3">Fase 2<br/><span className="text-slate-500 text-base md:text-lg">Servicios Operativos</span></h3>
                    <p className="text-slate-400 text-sm leading-relaxed md:px-4 text-left md:text-center">
                      Inspecciones especializadas, monitoreo aéreo, levantamientos para minería y apoyo.
                    </p>
                  </div>
                </div>

                {/* Fase 3 */}
                <div className="flex-1 flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0 relative">
                  <div className="w-12 h-12 md:mb-6 rounded-full bg-slate-100 border-4 border-white flex-shrink-0 z-10 mx-auto hidden md:block"></div>
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-4 border-white flex-shrink-0 z-10 md:hidden"></div>
                  <div className="flex flex-col items-start md:items-center">
                    <h3 className="text-lg md:text-xl font-bold text-slate-400 mb-1 md:mb-3">Fase 3<br/><span className="text-slate-500 text-base md:text-lg">Logística de Carga</span></h3>
                    <p className="text-slate-400 text-sm leading-relaxed md:px-4 text-left md:text-center">
                      Introducción de vehículos aéreos de carga pesada y rutas logísticas autónomas.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full h-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto mt-[-3rem] md:-mt-16 px-4 md:px-0">
            <span className="tag animate-slide-up text-xs md:text-sm">Inversión Inicial</span>
            
            <div className="animate-slide-up delay-100 my-4 md:my-10">
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter flex flex-col sm:flex-row items-center justify-center gap-2">
                ≈ 200 Millones <span className="text-2xl md:text-4xl text-slate-400 font-medium leading-none mt-2 sm:mt-0">COP</span>
              </h2>
            </div>
            
            <p className="text-sm md:text-xl text-emerald-700 font-medium bg-emerald-50 px-4 md:px-6 py-2 rounded-full mb-6 md:mb-12 animate-slide-up delay-200">
              Inversión moderada para construir una plataforma escalable.
            </p>

            <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-16 animate-slide-up delay-300">
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
              <div className="flex flex-col text-left auto-cols-max mt-4 md:mt-0">
                <div className="flex items-center gap-4 py-4 border-b border-slate-100 md:border-t-0 border-t">
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
          <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-0">
            <span className="tag mb-8 md:mb-12 animate-slide-up text-xs md:text-sm">Proyección a 36 Meses</span>
            
            <div className="max-w-4xl mx-auto animate-slide-up delay-100">
              <h2 className="text-2xl md:text-5xl font-medium text-slate-800 leading-tight italic tracking-tight mb-6 md:mb-8">
                "Construir infraestructura aérea rural mediante drones industriales para minería, territorio y desarrollo comunitario.
              </h2>
              <p className="text-xl md:text-4xl font-bold text-emerald-700 mt-4 md:mt-6 tracking-tight">
                Este proyecto no es un dron.<br/>Es una nueva capa de infraestructura tecnológica."
              </p>
            </div>
            
            <div className="mt-12 md:mt-20 animate-slide-up delay-300 flex flex-col sm:flex-row gap-4 md:gap-6 px-4 md:px-0 w-full sm:w-auto">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors shadow-sm hover:shadow-md text-sm md:text-base w-full sm:w-auto">
                Iniciar Conversación
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm md:text-base w-full sm:w-auto">
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

