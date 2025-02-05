class IssueComponent extends HTMLElement {
    static observedAttributes = ["config", "data"];

    defaultConfig = {
        formLabel: "form-label ",
        formClass: "form-group form-control w-50",
        buttonClass: "btn btn-primary mt-3"
    };

    defaultData = [
        { label: "Enter Candidate Name", type: "text", placeholder: "Candidate Name", required: true },
        { label: "Enter Serial No.", type: "number", placeholder: "Serial Number", required: true },
        { label: "certificate Date", type: "date", placeholder: "Date", required: true },
        { label: "certifcate for", type: "text", placeholder: "certificate for excellence", required: true },
        { label: "Start Date", type: "date", placeholder: "Enter start date", required: true },
        { label: "End Date", type: "date", placeholder: "Enter end date", required: true },
        { label: "Enter grade", type: "text", placeholder: "Enter grade", required: true },
        { label: "Candidate belong to", type: "text", placeholder: "Enter candidate belong to ", required: true },
        { label: "Proficiency", type: "text", placeholder: "Enter Proficiency of candidate", required: true },
        { label: "Remark", type: "text", placeholder: "Enter Remark ", required: true }
    ];

    config = {};
    data = [];

    constructor() {
        super();
        this.config = { ...this.defaultConfig };
        this.data = [...this.defaultData];
    }

    connectedCallback() {
        this.renderComponent();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        try {
            if (name === "config" && typeof newValue === "string") {
                this.config = { ...this.config, ...JSON.parse(newValue) };
            }
            if (name === "data" && typeof newValue === "string") {
                this.data = JSON.parse(newValue);
            }
        } catch (e) {
            console.error(e);
        }

        this.renderComponent();
    }

    renderComponent() {
        this.innerHTML = "";

        const form = document.createElement("form");

        this.data.forEach(field => {
            const formGroup = document.createElement("div");
            formGroup.className = "mb-3 ";

            const label = document.createElement("label");
            label.className = this.config.formLabel;
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type || "text";
            input.className = this.config.formClass;
            input.placeholder = field.placeholder || "";
            input.required = field.required || false;

            form.appendChild(formGroup);
            formGroup.appendChild(label);
            formGroup.appendChild(input);
        });

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.className = this.config.buttonClass;
        submitButton.textContent = "Submit";

        form.appendChild(submitButton);
        this.appendChild(form);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = {};
            const inputs = form.querySelectorAll("input");
            inputs.forEach((input, index) => {
                formData[this.data[index].label] = input.value;
            });
            console.log("Form submitted with data:", formData);
        });
    }
}

customElements.define('issue-component', IssueComponent);
