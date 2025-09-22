// Encontra o botão no HTML
const themeToggle = document.querySelector('.theme-toggle');

// Adiciona um "ouvinte" de evento de clique ao botão
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'light-mode' na tag <body>
    document.body.classList.toggle('light-mode');
});
// Lógica de validação do formulário de contato
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Expressão regular para validar e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Limpa mensagens de erro anteriores
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    messageInput.classList.remove('invalid');

    let isValid = true;

    // Validação do campo Nome
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Por favor, digite seu nome.';
        nameInput.classList.add('invalid');
        isValid = false;
    }

    // Validação do campo E-mail
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Por favor, digite seu e-mail.';
        emailInput.classList.add('invalid');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Por favor, digite um e-mail válido.';
        emailInput.classList.add('invalid');
        isValid = false;
    }

    // Validação do campo Mensagem
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Por favor, digite sua mensagem.';
        messageInput.classList.add('invalid');
        isValid = false;
    }

    // Se o formulário for válido, simula o envio
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        contactForm.reset(); // Limpa o formulário
    }
});
// Lógica de filtragem de projetos
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões e adiciona ao clicado
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (filterValue === 'all' || itemCategory === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
const animatedElements = document.querySelectorAll('.skill-item, .project-item, .learning-post');