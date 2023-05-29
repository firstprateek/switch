import { LitElement, html, css } from "lit";

class SimpleToggle extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        .checkbox {
            opacity: 0;
            position: absolute;
        }

        .checkbox:checked + .label .ball {
            transform: translateX(24px);
        }

        .label {
            background-color: var(--background-color, #F2F0EE);
            height: 26px;
            width: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 50px;
            position: relative;
            cursor: pointer;
        }

        .left-icon {
            color: #f1c40f;
        }

        .right-icon {
            color: #f39c12;
        }

        .ball {
            background-color: var(--link-color, #58595B);
            height: 26px;
            width: 26px;
            position: absolute;
            border-radius: 50%;
            transition: transform 0.2s linear;
        }

    `;

    static properties = {
        leftIcon: {},
        rightIcon: {}
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <input @change=${this.handleChange} type="checkbox" class="checkbox" id="checkbox">
            <label for="checkbox" class="label">
                <div class="ball"></div>
            </label>
        `;
    }

    handleChange = (e) => {
        const options = {
            detail: {checked: e.target.checked},
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('change', options));
    }
}

customElements.define('theme-switch', SimpleToggle);
