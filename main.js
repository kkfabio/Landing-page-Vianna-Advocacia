/* =========================================================
   TESTIMONIALS SLIDER
   Controle de depoimentos com navegação por setas e dots
   
   - Alterna depoimentos com animação suave
   - Suporte a navegação manual (setas e indicadores)
   - Estrutura preparada para múltiplos depoimentos
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Evita conflitos caso o script seja carregado mais de uma vez
    if (window.testimonialsInitialized) return;
    window.testimonialsInitialized = true;

    let currentIdx = 0;
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.getElementById('test-dots');

    // Criação dinâmica dos indicadores (dots)
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        if (index === 0) dot.classList.add('active');

        dot.addEventListener('click', () => {
            showTestimonial(index);
        });

        dotsContainer.appendChild(dot);
    });

    /**
     * Exibe o depoimento correspondente ao índice informado
     * @param {number} index
     */
    function showTestimonial(index) {
        const allCards = document.querySelectorAll('.testimonial-card');
        const allDots = document.querySelectorAll('.dot');

        // Remove estado ativo atual
        allCards[currentIdx].classList.remove('active');
        allDots[currentIdx].classList.remove('active');

        // Controle de limites (loop infinito)
        currentIdx = index;
        if (currentIdx >= allCards.length) currentIdx = 0;
        if (currentIdx < 0) currentIdx = allCards.length - 1;

        // Ativa novo depoimento
        allCards[currentIdx].classList.add('active');
        allDots[currentIdx].classList.add('active');
    }

    /**
     * Avança para o próximo depoimento
     */
    window.nextTestimonial = function () {
        showTestimonial(currentIdx + 1);
    };

    /**
     * Retorna para o depoimento anterior
     */
    window.prevTestimonial = function () {
        showTestimonial(currentIdx - 1);
    };

});
/**
 * =====================================================
 * FAQ Accordion
 * =====================================================
 * Objetivo:
 * Controlar o comportamento interativo da seção de
 * Perguntas Frequentes (FAQ), permitindo a abertura
 * e fechamento das respostas com animação suave.
 *
 * Funcionalidades:
 * - Abre uma pergunta ao clicar
 * - Fecha automaticamente as demais perguntas
 * - Aplica animação via controle de max-height
 * - Controla estado visual através da classe "active"
 *
 * Requisitos:
 * - Estrutura HTML com as classes:
 *   .faq-item
 *   .faq-question
 *   .faq-answer
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de pergunta do FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const faqAnswer = button.nextElementSibling;
            const isOpen = faqItem.classList.contains('active');

            // Fecha todos os itens antes de abrir o selecionado
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');

                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = null;
                }
            });

            // Se o item clicado não estava aberto, abre ele
            if (!isOpen) {
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            }
        });
    });
});
