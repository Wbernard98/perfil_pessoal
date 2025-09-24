document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o menu hambúrguer
    // Seleciona o botão de menu (hamburger-menu) e o menu de navegação (nav-menu)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Verifica se os elementos existem antes de adicionar o evento
    if (hamburgerMenu && navMenu) {
        // Adiciona um 'ouvinte de evento' de clique ao botão
        hamburgerMenu.addEventListener('click', () => {
            // Alterna a classe 'active' no menu de navegação
            // Se a classe não existe, ela é adicionada. Se existe, é removida.
            navMenu.classList.toggle('active');
        });
    }

    // Lógica de alternância de tema
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    // Lógica de filtragem de projetos
    // Seleciona todos os botões de filtro e todos os itens de projeto
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length > 0 && projectItems.length > 0) {
        // Itera sobre cada botão de filtro
        filterButtons.forEach(button => {
            // Adiciona um 'ouvinte de evento' de clique para cada botão
            button.addEventListener('click', () => {
                // Remove a classe 'active' de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe 'active' apenas no botão clicado
                button.classList.add('active');

                // Obtém o valor do atributo 'data-filter' do botão clicado
                const filterValue = button.getAttribute('data-filter');

                // Itera sobre cada item de projeto
                projectItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    // Verifica se o valor do filtro é 'all' ou se a categoria do item
                    // corresponde ao valor do filtro.
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block'; // Mostra o item
                    } else {
                        item.style.display = 'none'; // Esconde o item
                    }
                });
            });
        });
    }
});