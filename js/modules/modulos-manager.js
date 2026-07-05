// --- CONTROLADOR GENERAL PARA PÁGINAS DE MÓDULOS ---

/**
 * 1. GESTIÓN DE PESTAÑAS (TABS) GENÉRICAS
 * Busca todos los contenedores de pestañas en la página y les añade interactividad.
 */
export function initTabsGenericas() {
    const tabContainers = document.querySelectorAll('[data-tabs-group]');
    
    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('[data-tab-target]');
        const panels = container.querySelectorAll('[data-tab-panel]');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-tab-target');

                // Desactivar todos los botones del grupo
                buttons.forEach(btn => {
                    btn.classList.remove('border-blue-600', 'text-blue-600');
                    btn.classList.add('border-transparent', 'text-slate-500');
                });

                // Ocultar todos los paneles del grupo
                panels.forEach(panel => panel.classList.add('hidden'));

                // Activar el botón y panel seleccionados
                button.classList.remove('border-transparent', 'text-slate-500');
                button.classList.add('border-blue-600', 'text-blue-600');
                
                const activePanel = container.querySelector(`[data-tab-panel="${targetId}"]`);
                if (activePanel) activePanel.classList.remove('hidden');
            });
        });
    });
}

/**
 * 2. LÓGICA DE CAROUSEL / DIAPOSITIVAS GENÉRICAS
 * Escanea el DOM, lee los textos del HTML y maneja el estado del carrusel.
 */
export class ModuloCarousel {
    constructor(fuenteId, containerId, contadorId) {
        this.container = document.getElementById(containerId);
        this.contador = document.getElementById(contadorId);
        this.currentSlide = 0;
        this.slides = [];

        // 🕵️‍♂️ Escaneo directo del HTML (DOM Scraping)
        const fuente = document.getElementById(fuenteId);
        if (fuente) {
            const items = fuente.querySelectorAll('.slide-item');
            items.forEach(item => {
                const tituloNode = item.querySelector('h4');
                const descNode = item.querySelector('p');
                
                if (tituloNode && descNode) {
                    this.slides.push({
                        titulo: tituloNode.innerText.trim(),
                        desc: descNode.innerText.trim()
                    });
                }
            });
        }

        // Si encontramos elementos válidos, renderizamos el primero
        if (this.container && this.slides.length > 0) {
            this.render();
        }
    }

    render() {
        if (!this.container) return;
        const slide = this.slides[this.currentSlide];
        
        this.container.innerHTML = `
            <h4 class="text-sm font-bold text-blue-400 uppercase tracking-wider">
                <i class="fa-solid fa-circle-dot text-xs mr-2"></i>${slide.titulo}
            </h4>
            <p class="text-sm text-slate-300 leading-relaxed mt-2">${slide.desc}</p>
        `;
        
        if (this.contador) {
            this.contador.innerText = `Diapositiva ${this.currentSlide + 1} de ${this.slides.length}`;
        }
    }

    navegar(direccion) {
        this.currentSlide += direccion;
        if (this.currentSlide < 0) this.currentSlide = this.slides.length - 1;
        if (this.currentSlide >= this.slides.length) this.currentSlide = 0;
        this.render();
    }
}