<script>
    import { language } from "$lib/store";
    import { fly } from "svelte/transition";
    import { backOut } from "svelte/easing";

    export let data;
    const { traslate } = data;

    let lan;
    language.subscribe((val) => {
        lan = val;
    });

    let texto = ["Desarrollador", " ", "Web"];
</script>

<section>
    <!--{traslate[lan].about.titulo}-->
    <h1>{traslate[lan].about.titulo}</h1>
    <h2>{traslate[lan].about.subtitulos[0]}</h2>
    <p>{traslate[lan].about.descripciones[0]}</p>
    <p>{traslate[lan].about.descripciones[1]}</p>
    <br />
    <h2>{traslate[lan].about.subtitulos[1]}</h2>
    <ul>
        {#each traslate[lan].about.habilidades as skill}
            <li>{skill}</li>
        {/each}
    </ul>
    <br />
    <br />
    <article>
        <a class="github" href="https://github.com/angellof18" target="_blank">
            <i class="bi bi-github" />
            <span>GitHub</span>
        </a>
        <a class="correo" href="mailto:arteaga.angel.1720@hotmail.com"
            >{lan == "es" ? "Correo" : "Mail"}</a
        >
    </article>
</section>

<style>
    * {
        box-sizing: border-box;
    }

    article {
        display: flex;
        gap: 2rem;
    }

    .github {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        background: #004a77;
        color: white;
        text-decoration: none;
    }

    .correo {
        align-self: center;
        text-decoration: underline;
        color: light-dark(#004a77, white);
        font-weight: 500;
    }

    i {
        font-size: medium;
    }

    section {
        padding: 0.5rem;
    }

    @media (width>2000px) {
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 2.5em;
        }
        p {
            font-size: 24px;
        }
        li {
            font-size: 24px;
        }
    }
</style>
