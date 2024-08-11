<script>
    import { language } from "$lib/store";
    import { fly } from "svelte/transition";

    export let data;
    const { traslate } = data;

    let lan;
    language.subscribe((val) => {
        lan = val;
    });
</script>

<section>
    <h1>{traslate[lan].projects.titulo}</h1>
    <main>
        {#each traslate[lan].projects.proyectos as project}
            <article transition:fly>
                <h3>{project.title}</h3>
                <div>
                    {#each project.tags as tag}
                        <span>{tag}</span>
                    {/each}
                </div>
                <img src={project.image} alt="" />
                <p>{project.description}</p>
                <footer>
                    <a href={project.web} class="demo" target="_blank">
                        <i class="bi bi-globe-americas" />
                        {lan == "es" ? "Demostracion" : "Preview"}
                    </a>
                    <a href={project.repo} class="repo" target="_blank"
                        >GitHub</a
                    >
                </footer>
            </article>
        {/each}
    </main>
</section>

<style>
    * {
        box-sizing: border-box;
    }

    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 1rem;
    }

    h3 {
        grid-area: title;
    }

    div {
        grid-area: tags;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    span {
        width: fit-content;
        height: 30px;
        align-content: center;
        font-size: small;
        border-radius: 5px;
        background: light-dark(#a4a6a7, #34373a);
        padding: 0 0.75rem;
    }

    img {
        grid-area: image;
        width: 100%;
        height: auto;
        border-radius: 10px;
        border: 1px solid #d3d3d3;
        aspect-ratio: 16/9;
    }

    p {
        grid-area: desc;
    }

    footer {
        grid-area: buttons;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .demo {
        background: #004a77;
        color: white;
        text-decoration: none;
        border-radius: 20px;
        padding: 0.5rem 1rem;
    }

    .repo {
        color: light-dark(#004a77, white);
        font-weight: 500;
        text-decoration: underline;
    }

    article {
        display: grid;
        grid-template:
            "title" auto
            "tags" auto
            "image" auto
            "desc" auto
            "buttons" 50px /
            auto;
        border-radius: 10px;
        background: light-dark(#f1f3f4, #3c4043);
        padding: 1rem 1rem;
        gap: 1rem;
    }

    @media (width<=768px) {
        article {
            grid-template:
                "title" auto
                "tags" auto
                "image" auto
                "desc" auto
                "buttons" 50px /
                auto;
            padding: 1rem 1rem;
        }
        main {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
    }

    @media (1900px<width>1420px) {
        main {
            grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
        }
    }

    @media (width>=1900px) {
        h1 {
            font-size: 2em;
        }
        p {
            font-size: 24px;
        }
        main {
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        }
    }
</style>
