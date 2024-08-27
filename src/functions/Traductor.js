export function TraslatePage() {
    return {
        es: {
            sections: ["Acerca de mi", "Proyectos", "Habilidades", "Contacto"],
            about: {
                titulo: "ACERCA DE MI",
                subtitulos: ["DESARROLLO WEB", "HABILIDADES TECNICAS"],
                descripciones: [
                    "Soy estudiante autodidacta de desarrollo web, enfocado en programación frontend y cursando la carrera de Ingeniería en Sistemas Computacionales. Aspiro a obtener un empleo en el campo del desarrollo web para adquirir experiencia y ampliar mis conocimientos, fortaleciendo así mi carrera profesional.",
                    "He participado en proyectos académicos que involucran bases de datos relacionales como MySQL y MariaDB, así como en el análisis de datos con Python. Además, tengo experiencia en el desarrollo de páginas web utilizando frameworks como Bootstrap y BulmaCSS."
                ],
                habilidades: ["Disponibilidad", "Autodidacta", "Responsable", "Trabajo en equipo"]
            },
            projects: {
                titulo: "PROYECTOS",
                proyectos: [
                    {
                        title: 'Login - Variables de sesión',
                        description: 'Login con variables de sesión y validación de datos.',
                        image: '/Projects/Login.webp',
                        tags: ['Next js', 'MySQL', 'HTML', 'CSS'],
                        repo: 'https://github.com/angellof18/login-nextjs',
                        web: 'https://login-nextjs-pi.vercel.app/login'
                    },
                    {
                        title: 'Portafolio - Mi portafolio personal',
                        description: "Portafolio personal con mis proyectos elaborados.",
                        image: '/Projects/Portafolio.webp',
                        tags: ['React', 'HTML', 'CSS', 'BulmaCSS'],
                        repo: 'https://github.com/angellof18/PortafolioV2',
                        web: 'https://portafolio-arteaga.onrender.com/'
                    },
                    {
                        title: 'Meetus - Chat con Socket.io',
                        description: "Meetus es una aplicación de chat web que utiliza Socket.io para facilitar la comunicación en tiempo real.",
                        image: '/Projects/Meetus.webp',
                        tags: ['React', 'MySQL', 'Socket.io', 'BulmaCSS'],
                        repo: 'https://github.com/angellof18/Meetus',
                        web: 'https://meetus-d2da.onrender.com/'
                    },
                    {
                        title: 'Signal (clon) - Plantilla web',
                        description: "Plantilla basada en la página web de Signal, desarrollado utilizando principalmente el framework BulmaCSS.",
                        image: '/Projects/Signal.webp',
                        tags: ['React', 'BulmaCSS', 'CSS', 'HTML'],
                        repo: 'https://github.com/angellof18/Signal_clon',
                        web: 'https://signal-clon.onrender.com/'
                    },
                    {
                        title: 'To Do - Lista de tareas',
                        description: "Página utiliza 'Cookies' como almacenamiento.",
                        image: '/Projects/Todo.webp',
                        tags: ['Svelte', 'SvelteKit', 'CSS', 'HTML'],
                        repo: 'https://github.com/angellof18/todo-tasks-svelte',
                        web: 'https://todo-tasks-svelte.vercel.app/'
                    },
                    {
                        title: 'PeokeAPI - Listado de Pokemons',
                        description: 'Fetch a API publica de pokemon.',
                        image: '/Projects/Pokeapi.webp',
                        tags: ['Svelte', 'SvelteKit', 'HTML', 'CSS'],
                        repo: 'https://github.com/angellof18/pokemon-tailwind',
                        web: 'https://pokemon-tailwind-two.vercel.app'
                    }
                ]
            },
            skills: {
                titulo: "HABILIDADES TECNICAS",
                habilidades: [
                    {
                        name: 'HTML',
                        level: 'Principiante',
                        image: 'icons/html.webp'
                    },
                    {
                        name: 'CSS',
                        level: 'Principiante',
                        image: 'icons/css.webp'
                    },
                    {
                        name: 'Javascript',
                        level: 'Principiante',
                        image: 'icons/js.webp'
                    },
                    {
                        name: 'MySQL',
                        level: 'Principiante',
                        image: 'icons/mysql.webp'
                    },
                    {
                        name: 'Node JS',
                        level: 'Principiante',
                        image: 'icons/node.webp'
                    },
                    {
                        name: 'React',
                        level: 'Principiante',
                        image: 'icons/react.webp'
                    },
                    {
                        name: 'Github',
                        level: 'Principiante',
                        image: 'icons/github.webp'
                    },
                    {
                        name: 'Python',
                        level: 'Principiante',
                        image: 'icons/python.webp'
                    },
                    {
                        name: 'Next.js',
                        level: 'Principiante',
                        image: 'icons/next.webp'
                    },
                    {
                        name: 'Svelte',
                        level: 'Principiante',
                        image: 'icons/svelte.webp'
                    }
                ]
            },
            contact: {
                title: "CONTACTO",
                inputs: ["Nombre", "Correo", "Descripción"],
                placeholders: ["Ingresa tu nombre", "Ingresa tu correo", "Mensaje"]
            }
        },
        en: {
            sections: ["About me", "Projects", "Skills", "Contact"],
            about: {
                titulo: "ABOUT ME",
                subtitulos: ["WEB DEVELOPER", "SOFT SKILLS"],
                descripciones: [
                    "I am a self-taught web development student, focused on frontend programming and pursuing a degree in Computer Systems Engineering. I aspire to obtain a job in the field of web development to gain experience and expand my knowledge, thus strengthening my professional career.",
                    "I have participated in academic projects involving relational databases such as MySQL and MariaDB, as well as data analysis with Python. Additionally, I have experience in web development using frameworks such as Bootstrap and BulmaCSS."
                ],
                habilidades: ["Availability", "Self-taught", "Responsible", "Teamwork"]
            },
            projects: {
                titulo: "PROJECTS",
                proyectos: [
                    {
                        title: 'Login - Session variables',
                        description: 'Login with session variables and data validation.',
                        image: '/Projects/Login.webp',
                        tags: ['Next js', 'MySQL', 'HTML', 'CSS'],
                        repo: 'https://github.com/angellof18/login-nextjs',
                        web: 'https://login-nextjs-pi.vercel.app/login'
                    },
                    {
                        title: 'Portafolio - My personal portfolio',
                        description: "Personal portfolio with my completed projects.",
                        image: '/Projects/Portafolio.webp',
                        tags: ['React', 'HTML', 'CSS', 'BulmaCSS'],
                        repo: 'https://github.com/angellof18/PortafolioV2',
                        web: 'https://portafolio-arteaga.onrender.com/'
                    },
                    {
                        title: 'Meetus - Chat with Socket.io',
                        description: "Meetus is a web chat application that uses Socket.io to facilitate real-time communication.",
                        image: '/Projects/Meetus.webp',
                        tags: ['React', 'MySQL', 'Socket.io', 'BulmaCSS'],
                        repo: 'https://github.com/angellof18/Meetus',
                        web: 'https://meetus-d2da.onrender.com/'
                    },
                    {
                        title: 'Signal (clon) - Web Template',
                        description: "Template based on Signal's website, developed primarily using the BulmaCSS framework.",
                        image: '/Projects/Signal.webp',
                        tags: ['React', 'BulmaCSS', 'CSS', 'HTML'],
                        repo: 'https://github.com/angellof18/Signal_clon',
                        web: 'https://signal-clon.onrender.com/'
                    },
                    {
                        title: 'To Do - Task List',
                        description: "The page uses 'Cookies' for storage.",
                        image: '/Projects/Todo.webp',
                        tags: ['Svelte', 'SvelteKit', 'CSS', 'HTML'],
                        repo: 'https://github.com/angellof18/todo-tasks-svelte',
                        web: 'https://todo-tasks-svelte.vercel.app/'
                    },
                    {
                        title: 'PeokeAPI - List of Pokemons',
                        description: 'Fetch pokemon public API.',
                        image: '/Projects/Pokeapi.webp',
                        tags: ['Svelte', 'SvelteKit', 'HTML', 'CSS'],
                        repo: 'https://github.com/angellof18/pokemon-tailwind',
                        web: 'https://pokemon-tailwind-two.vercel.app'
                    }
                ]
            },
            skills: {
                titulo: "HARD SKILLS",
                habilidades: [
                    {
                        name: 'HTML',
                        level: 'Beginner',
                        image: 'icons/html.webp'
                    },
                    {
                        name: 'CSS',
                        level: 'Beginner',
                        image: 'icons/css.webp'
                    },
                    {
                        name: 'Javascript',
                        level: 'Beginner',
                        image: 'icons/js.webp'
                    },
                    {
                        name: 'MySQL',
                        level: 'Beginner',
                        image: 'icons/mysql.webp'
                    },
                    {
                        name: 'Node JS',
                        level: 'Beginner',
                        image: 'icons/node.webp'
                    },
                    {
                        name: 'React',
                        level: 'Beginner',
                        image: 'icons/react.webp'
                    },
                    {
                        name: 'Github',
                        level: 'Beginner',
                        image: 'icons/github.webp'
                    },
                    {
                        name: 'Python',
                        level: 'Beginner',
                        image: 'icons/python.webp'
                    },
                    {
                        name: 'Next.js',
                        level: 'Beginner',
                        image: 'icons/next.webp'
                    },
                    {
                        name: 'Svelte',
                        level: 'Beginner',
                        image: 'icons/svelte.webp'
                    }
                ]
            },
            contact: {
                title: "CONTACT",
                inputs: ["Name", "Mail", "Description"],
                placeholders: ["Enter your name", "Enter your email", "Message"]
            }
        }
    }
}