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
    <h1>{traslate[lan].contact.title}</h1>
    <form action="https://formspree.io/f/xdoqqajk" method="POST" class="form">
        <label for="">{traslate[lan].contact.inputs[0]}</label>
        <div class="field">
            <i class="bi bi-people-fill" />
            <input
                type="text"
                class="input"
                name="Name"
                placeholder={traslate[lan].contact.placeholders[0]}
                required
            />
        </div>

        <br />

        <label for="">{traslate[lan].contact.inputs[1]}</label>
        <div class="field">
            <i class="bi bi-at" />
            <input
                type="email"
                placeholder={traslate[lan].contact.placeholders[1]}
                class="input"
                name="Email"
                required
            />
        </div>

        <br />

        <div class="textarea">
            <label for="" class="label">{traslate[lan].contact.inputs[2]}</label
            >
            <textarea
                class="textarea"
                placeholder={traslate[lan].contact.placeholders[2]}
                name="Message"
                rows="3"
                required
            ></textarea>
        </div>

        <br />

        <button type="submit" class="button is-black">
            <i class="bi bi-send-fill" />
            {lan == "es" ? "Enviar" : "Send"}
        </button>

        <input type="hidden" name="_captcha" value={"false"} />
    </form>
</section>

<style>
    * {
        box-sizing: border-box;
    }

    section {
        padding: 0.5rem;
    }

    .field {
        display: flex;
        align-items: center;
        background: light-dark(#f1f3f4, #3c4043);
        padding: 1rem 1rem;
        border-radius: 10px;
        gap: 1rem;
    }

    .textarea {
        display: flex;
        flex-direction: column;
    }

    textarea {
        width: 100%;
        min-width: 100%;
        padding: 1rem 1rem;
        outline: none;
        background: light-dark(#f1f3f4, #3c4043);
        border-radius: 10px;
        border: none;
    }

    button {
        padding: 0.75rem 1rem;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        background: #004a77;
        color: white;
    }

    .input {
        flex-grow: 1;
        background: light-dark(#f1f3f4, #3c4043);
        border: none;
        outline: none;
        width: 100%;
    }
</style>
