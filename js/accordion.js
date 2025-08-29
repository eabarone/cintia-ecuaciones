// JS para acordeón con desplazamiento automático
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const panel = document.querySelector(this.getAttribute('data-target'));
        const isOpen = panel.classList.contains('block');
        document.querySelectorAll('.accordion-panel').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.accordion-panel').forEach(p => p.classList.remove('block'));
        
        if (!isOpen) {
            panel.classList.remove('hidden');
            panel.classList.add('block');
            // Cambiar el símbolo del botón
            this.querySelector('span').textContent = '➖';
            
            // Desplazamiento suave hacia el botón del acordeón desplegado
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100); // Pequeño retraso para asegurar que el panel esté visible
        } else {
            // Cambiar el símbolo del botón
            this.querySelector('span').textContent = '➕';
        }
        
        // Actualizar todos los demás botones
        document.querySelectorAll('.accordion-btn').forEach(otherBtn => {
            if (otherBtn !== this) {
                otherBtn.querySelector('span').textContent = '➕';
            }
        });
    });
});