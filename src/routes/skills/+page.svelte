<script>
    import { language } from "$lib/store";
    export let data;
    const { traslate } = data;

    let lan;

    language.subscribe((val) => {
        lan = val;
    });
</script>

<section>
    <article>
        <h1>{traslate[lan].skills.titulo}</h1>
        <ul>
            {#each traslate[lan].skills.habilidades as skill}
                <li>
                    <img src={skill.image} alt={skill.name} />
                    <strong>{skill.name}</strong>
                    <span>{skill.level}</span>
                </li>
            {/each}
        </ul>
    </article>
</section>

<style>
    * {
        box-sizing: border-box;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        padding: 0 0;
        list-style-type: none;
    }

    img {
        width: 64px;
        grid-area: imagen;
    }

    strong {
        justify-self: center;
        align-content: center;
        grid-area: skill;
    }

    span {
        justify-self: center;
        align-self: center;
        width: fit-content;
        height: 20px;
        font-size: x-small;
        align-content: center;
        background: #a4a6a7;
        border-radius: 15px;
        padding: 0 0.75rem;
        grid-area: nivel;
    }

    li {
        display: grid;
        grid-template:
            "imagen skill" 32px
            "imagen nivel" 32px/
            64px auto;
        padding: 1rem 2rem;
        gap: 0 1rem;
        border-radius: 10px;
        background: #f1f3f4;
    }

    @media (width<768px) {
        li {
            justify-content: center;
            grid-template:
                "imagen" 64px
                "skill" auto
                "nivel" auto/
                auto;
            gap: 0.5rem;
        }

        img {
            justify-self: center;
        }
    }

    @media (width>2000px) {
        h1 {
            font-size: 2em;
        }
        span {
            font-size: 24px;
        }
        li {
            font-size: 24px;
        }
        ul {
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        }
        li {
            grid-template:
                "imagen skill" 64px
                "imagen nivel" 64px/
                128px auto;
            padding: 2rem 2rem;
        }
        img {
            width: 128px;
        }
    }
</style>
