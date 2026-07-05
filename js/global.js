// --- CONFIGURACIÓN DE RUTAS MULTIMEDIA HERO ---
const videoPath = "https://lh3.googleusercontent.com/d/1fDnezTwzmC2FRfkFpgq-q4WjAJXjhUOE=m22"; 
const imagePath = "https://lh3.googleusercontent.com/d/1Jh0CsZD9LDNPKhhmqVJndMGNRInKwAi3"; 

// --- BASE DE DATOS DEL REPOSITORIO DE DOCUMENTOS (ZONA BAJAS/VERSIONS) ---
const bibliotecaArchivos = [
    { 
    id: "modulos-cel", 
    titulo: "Módulos (Público)", 
    desc: "Análisis del contexto nacional e internacional.", 
    cat: "ESTRATEGIA",
    tipo: "pdf",
    versiones: [
        { nombre: "Versión 2.4", ruta: "https://drive.google.com/uc?export=download&id=1iaOLRGaz3_ZMEdrp_mrtvn0O13yCVjeR", fecha: "May 2026" },
        { nombre: "Versión 2.3", ruta: "https://drive.google.com/uc?export=download&id=1GUbU8iRmBX9wC8hcCW4j8oyfau79BMkr", fecha: "Abr 2026" },
        { nombre: "Versión 2.2", ruta: "https://drive.google.com/uc?export=download&id=16XbI-bqqjuPlIGlHeM57EFf-V82nv9i5", fecha: "Feb 2026" },
        { nombre: "Versión 2.1", ruta: "https://drive.google.com/uc?export=download&id=1ejIPlsMMEI-MdkkHkRpgawlR_AyOKr8t", fecha: "Ene 2025" },
        { nombre: "Versión 2.0", ruta: "https://drive.google.com/uc?export=download&id=1ZLRs69QvK2HG3z-uBkRoHA63mVwhjhMv", fecha: "Nov 2025" },
        { nombre: "Versión 1.5", ruta: "https://drive.google.com/uc?export=download&id=10rTd-KA-3NMn6w-BgmwbxorE7KGfBepk", fecha: "Oct 2025" }
        ]
    },
    { 
    id: "ensayos-cel-1-10", 
    titulo: "Ensayos 1-10 (Público)", 
    desc: "Infraestructura y Red de Metros.", 
    cat: "TÉCNICO",
    tipo: "pdf",
    versiones: [
        { nombre: "Vision y Pilares", ruta: "https://drive.google.com/uc?export=download&id=12r3-ytfTGv1F8wzR9CE3ed0KNXzyAYGx", fecha: "" },
        { nombre: "Analisis Estrategico", ruta: "https://drive.google.com/uc?export=download&id=1YyKd1AO5BcJTGgreCO73ah6foNo0lj4v", fecha: "" },
        { nombre: "Actores Clave", ruta: "https://drive.google.com/uc?export=download&id=1CeMEQ8g6uzfgiOMzYdCrOF2-Smn7s6Uo", fecha: "" },
        { nombre: "Obstaculos y Riesgos", ruta: "https://drive.google.com/uc?export=download&id=1BsK-9r3Nm7ejBVn2SAiS9lZLDxGO_zLZ", fecha: "" },
        { nombre: "Escenarios", ruta: "https://drive.google.com/uc?export=download&id=1SieNuN7mhjzK2JYSJGztAnJFNjiq2dh2", fecha: "" },
        { nombre: "Recursos", ruta: "https://drive.google.com/uc?export=download&id=1RH7F-yrdMxjwKLw5gyAMnCU841o2o12o", fecha: "" },
        { nombre: "Industria Creativa", ruta: "https://drive.google.com/uc?export=download&id=1lttZJQ3Jn_wX0HJ7qhVteg7HRSItVB-h", fecha: "" },
        { nombre: "Arte y Plataforma Cultural", ruta: "https://drive.google.com/uc?export=download&id=1_3Tcj_MHXu9iXyZb5jctOTdQWRAIV6mD", fecha: "" },
        { nombre: "Transformación del Transporte", ruta: "https://drive.google.com/uc?export=download&id=1b7VWWrhV3TBc7FPuymQFFWL3t156TSh4", fecha: "" },
        { nombre: "Reforma Politica", ruta: "https://drive.google.com/uc?export=download&id=1mReB5Ra-12oXwJ9TnSxG66k4w01u2333", fecha: "" }
        ]
    },
    { 
    id: "ensayos-cel-11-20", 
    titulo: "Ensayos 11-20 (Público)", 
    desc: "Principios filosóficos del proyecto.", 
    cat: "TÉCNICO",
    tipo: "pdf",
    versiones: [
        { nombre: "Atracción de Capital Humano", ruta: "https://drive.google.com/uc?export=download&id=1uVcY6nYwSirJZ9lhEK0n9X_PMpcmax97", fecha: "" },
        { nombre: "Estrategias Conductuales e Incentivos", ruta: "https://drive.google.com/uc?export=download&id=1Xjbr3HVE9BlGicpladVTz1pLqMHDDg8h", fecha: "" },
        { nombre: "Integración TLC y APE", ruta: "https://drive.google.com/uc?export=download&id=1aqZpUiYf_HxUgPXGGu98MTrUvVBXowuo", fecha: "" },
        { nombre: "Transformación Productiva Incentivada", ruta: "https://drive.google.com/uc?export=download&id=1l8dLHbPI8ZWeiIQUD0dof5X7u4q_5aPn", fecha: "" },
        { nombre: "Reforma Nacional RENT", ruta: "https://drive.google.com/uc?export=download&id=1UmKlXz-k6URIh9dWVdlqrk3uMXGshMRd", fecha: "" },
        { nombre: "Reforma Judicial", ruta: "https://drive.google.com/uc?export=download&id=1roJs_evPHg_-2efjUKMeYxqueoeNvEMF", fecha: "" },
        { font: "Cuestiones Criticas", ruta: "https://drive.google.com/uc?export=download&id=1Pln9ETgPV4v169FRa5VRaHq4eIUijm3C", fecha: "" },
        { nombre: "Activación de Licencias", ruta: "https://drive.google.com/uc?export=download&id=1qYV7mQtvHtDctKsk04e-RLyCP8xYsR6m", fecha: "" },
        { nombre: "Ordenamiento Juridico y Territorial", ruta: "https://drive.google.com/uc?export=download&id=1AUxT_Syaa7P9FUwNAcCUPDYLU1mqi3yV", fecha: "" },
        { nombre: "Blindaje Tactico", ruta: "https://drive.google.com/uc?export=download&id=1COBG8N3uY1FyVuzo50Dv8d4oP8HVOj3-" }
        ]
    }
];

// --- NUEVA DATA COMPLEMENTARIA PARA EL MENÚ GENERAL RE-DISEÑADO ---
const modulosRepositorio = [
    {
        modulo: "Módulo 1",
        titulo: "Visión, Objetivos y Pilares",
        descripcion: "Fundamentación ética e institucional inspirada en estándares de excelencia (Noruega y Suiza) para el desarrollo a largo plazo.",
        tag: "Introducción",
        icono: "fa-compass",
        colorBadge: "bg-indigo-100 text-indigo-800",
        colorIcono: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
        colorBoton: "text-indigo-600 hover:text-indigo-700",
        enlaceHtml: "modulo1.html"
    },
    {
        modulo: "Módulo 2.1",
        titulo: "Análisis Estratégico Contextual",
        descripcion: "Evaluación rigurosa del panorama político, económico y social en los ámbitos nacional e internacional.",
        tag: "Diagnóstico",
        icono: "fa-globe",
        colorBadge: "bg-violet-100 text-violet-800",
        colorIcono: "bg-violet-50 text-violet-600 group-hover:bg-violet-600",
        colorBoton: "text-violet-600 hover:text-violet-700",
        enlaceHtml: "modulo2-1.html"
    },
    {
        modulo: "Módulo 2.2",
        titulo: "Infraestructura y Territorio",
        descripcion: "Redes de transporte multimodal (SIAV), optimización de licencias mediante el Observatorio Nacional e integración con los POT.",
        tag: "SIAV / POT",
        icono: "fa-map-location-dot",
        colorBadge: "bg-blue-100 text-blue-800",
        colorIcono: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
        colorBoton: "text-blue-600 hover:text-blue-700",
        enlaceHtml: "modulo2-2.html"
    },
    {
        modulo: "Módulo 2.3",
        titulo: "Justicia Preventiva y RENT",
        descripcion: "Auditoría de procesos educativos mediante RENT, control fiscal automatizado por Inteligencia Artificial y cerco reputacional.",
        tag: "RENT / IA",
        icono: "fa-microchip",
        colorBadge: "bg-emerald-100 text-emerald-800",
        colorIcono: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
        colorBoton: "text-emerald-600 hover:text-emerald-700",
        enlaceHtml: "modulo2-3.html"
    },
    {
        modulo: "Módulo 2.4",
        titulo: "Financiación y Sostenibilidad",
        descripcion: "Modelo de autonomía para la Ciudad Universitaria, retención de equity en startups y monetización de patentes globales.",
        tag: "Sostenibilidad",
        icono: "fa-chart-line",
        colorBadge: "bg-amber-100 text-amber-800",
        colorIcono: "bg-amber-50 text-amber-600 group-hover:bg-amber-600",
        colorBoton: "text-amber-600 hover:text-amber-700",
        enlaceHtml: "modulo2-4.html"
    }
];

// --- FUNCIÓN AUXILIAR PARA GENERAR RUTA DE VISTA PREVIA ---
function obtenerRutaVer(rutaDescarga) {
    try {
        const urlObj = new URL(rutaDescarga);
        const id = urlObj.searchParams.get("id");
        if (id) {
            return `https://drive.google.com/file/d/${id}/preview`;
        }
    } catch (e) {
        console.error("Error procesando la URL de Drive:", e);
    }
    return rutaDescarga;
}

// --- LÓGICA DEL HERO MULTIMEDIA ---
function initHeroMedia() {
    const video = document.getElementById('hero-video');
    const image = document.getElementById('hero-img');
    
    if (!video || !image) return;

    image.src = imagePath;
    if (videoPath && videoPath !== "") {
        video.src = videoPath;
        video.load();
    }
    switchMedia('img');
}

function switchMedia(type) {
    const imgElement = document.getElementById('hero-img');
    const videoWrapper = document.getElementById('hero-video-wrapper');
    const btnImg = document.getElementById('btn-show-img');
    const btnVideo = document.getElementById('btn-show-video');
    const caption = document.getElementById('media-caption');

    if (!imgElement || !videoWrapper || !btnImg || !btnVideo || !caption) return;

    if (type === 'img') {
        imgElement.classList.remove('hidden');
        videoWrapper.classList.add('hidden');
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";
        caption.textContent = "Mostrando imagen oficial del proyecto";
        
        const iframe = document.getElementById('hero-youtube');
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    } else if (type === 'video') {
        imgElement.classList.add('hidden');
        videoWrapper.classList.remove('hidden');
        btnImg.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all text-slate-400 hover:text-white";
        btnVideo.className = "px-3 py-1.5 text-xs font-bold rounded-lg transition-all bg-blue-600 text-white";
        caption.textContent = "Reproduciendo presentación oficial desde YouTube";
    }
}

// --- LÓGICA DE PESTAÑAS (TABS) ---
function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("border-blue-600", "text-blue-600");
        tabLinks[i].classList.add("border-transparent", "text-slate-500");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("border-blue-600", "text-blue-600");
    evt.currentTarget.classList.remove("border-transparent", "text-slate-500");
}

// --- NUEVA SECCIÓN: CARGA DINÁMICA DE MÓDULOS DE NAVEGACIÓN ---
function cargarModulosRepositorio() {
    const grid = document.getElementById('grid-archivos');
    if (!grid) return;

    grid.innerHTML = '';
    modulosRepositorio.forEach(item => {
        grid.innerHTML += `
            <div class="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group">
                <div>
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:text-white transition-colors ${item.colorIcono}">
                        <i class="fa-solid ${item.icono} text-lg"></i>
                    </div>
                    <span class="text-xs font-semibold tracking-wider uppercase ${item.colorBoton}">${item.modulo}</span>
                    <h2 class="text-xl font-bold text-slate-900 mt-1 mb-2">${item.titulo}</h2>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        ${item.descripcion}
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${item.colorBadge}">
                        ${item.tag}
                    </span>
                    <a href="${item.enlaceHtml}" class="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${item.colorBoton}">
                        Explorar <i class="fa-solid fa-arrow-right text-xs ml-1 transition-transform group-hover:translate-x-1"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

// --- CONTROL DEL MENÚ DE NAVEGACIÓN EN MÓVILES ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu) return;

    menu.classList.toggle('hidden');
    if (menu.classList.contains('hidden')) {
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
}

// --- CARGA ASÍNCRONA DE LA BARRA DE NAVEGACIÓN ---
async function cargarNavbar() {
    const contenedor = document.getElementById('navbar-container');
    if (!contenedor) return;

    try {
        const respuesta = await fetch('components/navbar.html');
        if (!respuesta.ok) throw new Error("No se pudo cargar el menú");
        const htmlNav = await respuesta.text();
        
        contenedor.innerHTML = htmlNav;

        const rutaActual = window.location.pathname;
        let paginaActiva = "index";
        
        if (rutaActual.includes("vision.html")) paginaActiva = "vision";
        else if (rutaActual.includes("repositorio.html")) paginaActiva = "repositorio";
        else if (rutaActual.includes("participacion.html")) paginaActiva = "participacion";

        const enlaceActivo = contenedor.querySelector(`[data-link="${paginaActiva}"]`);
        if (enlaceActivo) {
            enlaceActivo.classList.remove('text-slate-600');
            enlaceActivo.classList.add('text-blue-600');
        }
    } catch (error) {
        console.error("Error al montar la navegación:", error);
    }
}

// --- PORTAL DE PARTICIPACIÓN (CONTROL DE PESTAÑAS Y CARGA PEREZOSA) ---
function selectSurvey(type) {
    const targetTab = document.getElementById(`survey-${type}`);
    const targetCard = document.getElementById(`option-${type}`);
    
    if (!targetTab || !targetCard) return;

    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.survey-card').forEach(el => {
        el.classList.remove('selected', 'border-blue-600');
        el.style.borderColor = 'transparent';
    });
    
    targetTab.classList.add('active');
    targetCard.classList.add('selected');
    
    if (type === 'new') {
        targetCard.classList.add('border-blue-600');
    } else if (type === 'known') {
        targetCard.style.borderColor = '#9333ea';
    } else if (type === 'pqrs') {
        targetCard.style.borderColor = '#059669';
    }

    const iframe = targetTab.querySelector('iframe');
    if (iframe && iframe.getAttribute('data-src') && !iframe.getAttribute('src')) {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
    }
}

async function renderizarPendientes() {
    try {
        const respuesta = await fetch('pendientes.json');
        if (!respuesta.ok) return;
        
        const pendientes = await respuesta.json();
        if (pendientes.length === 0) return;

        const panel = document.createElement('div');
        panel.className = "fixed bottom-4 right-4 z-50 bg-slate-950 text-white p-4 rounded-2xl shadow-2xl max-w-xs border border-slate-800 font-sans text-xs space-y-3 animate-fade-in";
        
        let htmlContenido = `
            <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                <span class="font-bold tracking-wide uppercase text-blue-500 flex items-center gap-1.5">
                    <i class="fa-solid fa-list-check"></i> Pendientes de Diseño
                </span>
                <button onclick="this.parentElement.parentElement.remove()" class="text-slate-500 hover:text-white transition-colors">✕</button>
            </div>
            <div class="max-h-52 overflow-y-auto space-y-2 pr-1 text-[11px]">
        `;

        pendientes.forEach(item => {
            const barraColor = item.prioridad === 'Alta' ? 'border-red-500' : 'border-yellow-500';
            htmlContenido += `
                <div class="p-2.5 bg-slate-900 rounded-xl border-l-2 ${barraColor} border-opacity-80">
                    <div class="flex justify-between font-semibold text-[10px] text-slate-400 mb-1">
                        <span>Pestaña: ${item.seccion}</span>
                        <span class="uppercase text-[9px] tracking-wider px-1.5 py-0.5 rounded ${item.prioridad === 'Alta' ? 'bg-red-950 text-red-400' : 'bg-yellow-950 text-yellow-400'}">${item.prioridad}</span>
                    </div>
                    <p class="text-slate-300 leading-relaxed font-medium">${item.descripcion}</p>
                </div>
            `;
        });

        htmlContenido += `</div>`;
        panel.innerHTML = htmlContenido;
        document.body.appendChild(panel);

    } catch (error) {
        console.log("Modo producción o pendientes vacíos.");
    }
}

// --- ESCUCHA CENTRALIZADA AL CARGAR LA PÁGINA ---
window.addEventListener('load', () => {
    cargarNavbar();
    initHeroMedia();
    renderizarPendientes();
    
    // CAMBIO CLAVE: En lugar de cargar la antigua biblioteca plana, cargamos las tarjetas del Menú Modular
    cargarModulosRepositorio();

    document.body.classList.add("pt-24");

    const urlParams = new URLSearchParams(window.location.search);

    const surveyParam = urlParams.get('survey');
    if (surveyParam && ['new', 'known', 'pqrs'].includes(surveyParam)) {
        selectSurvey(surveyParam);
    }

    const tabParam = urlParams.get('tab');
    if (tabParam) {
        document.querySelectorAll('.tab-content').forEach(el => {
            if (!el.id.startsWith('survey-')) {
                el.classList.remove('active');
            }
        });

        document.querySelectorAll('.tab-link').forEach(el => {
            el.classList.remove("border-blue-600", "text-blue-600");
            el.classList.add("border-transparent", "text-slate-500");
        });

        const targetTab = document.getElementById(tabParam);
        const targetBtn = document.getElementById(`tab-btn-${tabParam}`);

        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        if (targetBtn) {
            targetBtn.classList.remove("border-transparent", "text-slate-500");
            targetBtn.classList.add("border-blue-600", "text-blue-600");
        }
    }
});