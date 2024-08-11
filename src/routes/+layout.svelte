<script>
    import { language } from "$lib/store";
    import { fade } from "svelte/transition";

    export let data;
    const { traslate } = data;
    let lan;

    language.subscribe((val) => {
        lan = val;
    });

    function toggleLang() {
        if (lan == "es") {
            language.set("en");
        } else {
            language.set("es");
        }
    }
</script>

<main>
    <aside>
        <article>
            <img class="avatar" src="user.webp" alt="User logo" />
            <ul>
                <li class={`${data.url === "/" ? "active" : ""} desktop`}>
                    <a href="/">{traslate[lan].sections[0]}</a>
                </li>
                <li
                    class={`${data.url === "/projects" ? "active" : ""} desktop`}
                >
                    <a href="/projects">{traslate[lan].sections[1]}</a>
                </li>
                <li class={`${data.url === "/skills" ? "active" : ""} desktop`}>
                    <a href="/skills">{traslate[lan].sections[2]}</a>
                </li>
                <li
                    class={`${data.url === "/contact" ? "active" : ""} desktop`}
                >
                    <a href="/contact">{traslate[lan].sections[3]}</a>
                </li>

                <!--MOBILE MENU-->
                <li class={`${data.url === "/" ? "active" : ""} mobile`}>
                    <a href="/">
                        <i class="bi bi-person-fill" />
                    </a>
                </li>
                <li
                    class={`${data.url === "/projects" ? "active" : ""} mobile`}
                >
                    <a href="/projects">
                        <i class="bi bi-code-slash" />
                    </a>
                </li>
                <li class={`${data.url === "/skills" ? "active" : ""} mobile`}>
                    <a href="/skills">
                        <i class="bi bi-gear" />
                    </a>
                </li>
                <li class={`${data.url === "/contact" ? "active" : ""} mobile`}>
                    <a href="/contact">
                        <i class="bi bi-chat-left-dots-fill" />
                    </a>
                </li>
            </ul>
        </article>
        <footer>
            <button class="lang desktop" on:click={toggleLang}>
                <img
                    class="flag"
                    src={lan == "es" ? "lang/usa.ico" : "lang/es.ico"}
                    alt="Español"
                    width="16px"
                    height="16px"
                />
            </button>
            <button
                class="cv desktop"
                on:click={() => window.open("cv.pdf", "_blank")}
                >{lan == "es" ? "Descargar " : "Download "} CV</button
            >
            <!--MOBILE-->
            <button class="lang mobile" on:click={toggleLang}>
                <img
                    class="flag"
                    src={lan == "es" ? "lang/usa.ico" : "lang/es.ico"}
                    alt="Español"
                    width="16px"
                    height="16px"
                />
            </button>
            <button
                class="cv mobile"
                on:click={() => window.open("cv.pdf", "_blank")}
                ><i class="bi bi-download" /></button
            >
        </footer>
    </aside>
    <section>
        {#key data.url}
            <div
                in:fade={{ duration: 100, delay: 100 }}
                out:fade={{ duration: 100 }}
            >
                <slot />
            </div>
        {/key}
    </section>
</main>

<style>
    :root {
        color-scheme: light dark;
    }

    * {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
        margin: 0 0;
        padding: 0 0;
    }

    button {
        padding: 0.75rem 1rem;
        border-radius: 20px;
        background: light-dark(white, black);
        color: light-dark(#3c4043, #f1f3f4);
        border: none;
        cursor: pointer;
    }

    main {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template:
            "menu content" auto/
            250px auto;
        overflow: hidden;
        background: light-dark(#ffffff, #202124);
    }

    aside {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        grid-area: menu;
        padding: 4rem 1rem;
        background: light-dark(#f1f3f4, #3c4043);
        border-radius: 15px;
        margin: 0.5rem 0.5rem;
        z-index: 100;
    }

    article {
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    footer {
        grid-area: footer;
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    footer > button {
        flex-grow: 0;
        flex-shrink: 0;
    }

    footer > .cv {
        flex-grow: 1;
    }

    .avatar {
        border-radius: 50%;
        border: 1px solid lightgray;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        list-style-type: none;
    }

    li {
        width: 100%;
        height: auto;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        transition: all 0.3s;
    }

    a {
        text-decoration: none;
        color: light-dark(#3c4043, #f1f3f4);
    }

    section {
        width: auto;
        height: 100%;
        grid-area: content;
        overflow-y: auto;
        padding: 3rem 4rem;
    }

    .active {
        background: #004a77;
    }

    .active > a {
        color: white;
    }

    @media (width<=768px) {
        main {
            grid-template:
                "menu content" auto /
                3rem auto;
        }

        aside {
            flex-direction: column;
            justify-content: space-around;
            height: auto;
            padding: 0 0;
        }

        section {
            padding: 0.5rem 1rem;
        }

        ul,
        article {
            flex-direction: column;
            gap: 1rem;
        }

        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        li {
            padding: 0.5em 0.5em;
        }

        li > a {
            font-size: large;
        }

        .avatar {
            display: none;
        }

        footer {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        button {
            width: 100%;
            border-radius: 5px;
            padding: 0.5rem 0.5rem;
            background: light-dark(#f1f3f4, #3c4043);
            color: light-dark(#3c4043, #f1f3f4);
            border: none;
            font-size: large;
        }
    }

    @media (width>768px) {
        .desktop {
            display: block;
        }

        .mobile {
            display: none;
        }
    }

    @media (width>2000px) {
        main {
            grid-template:
                "menu content" auto/
                500px auto;
        }

        .avatar {
            width: 256px;
            height: 256px;
        }

        ul {
            gap: 1rem;
        }

        li {
            padding: 1rem 1.2rem;
        }

        li > a {
            font-size: 28px;
        }
    }
</style>
