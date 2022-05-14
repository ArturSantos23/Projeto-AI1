const form = React.createElement;
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", reason: "", email: "", tele: "", info: "" };
  }

  submitFunc = (event) => {
    alert("Dados foram submetidos");
    event.stopPropagation();
    let form = {
      name: this.state.name,
      reason: this.state.reason,
      email: this.state.email,
      tele: this.state.tele,
      info: this.state.info,
    };
    localStorage.setItem("Form", JSON.stringify(form));
  };

  render() {
    return React.createElement(
      "div",
      { className: "home_information" },
      React.createElement(
        "form",
        {
          className: "contact__form",
          onSubmit: (event) => this.submitFunc(event),
        },
        React.createElement(
          "span",
          { className: "home_pressent anime-text" },
          "Nome*"
        ),
        React.createElement("input", {
          className: "contact_input",
          type: "text",
          required: true,
          onChange: (event) => {
            this.setState({ name: event.target.value });
          },
        }),
        React.createElement(
          "span",
          { className: "home_pressent anime-text" },
          "Motivo*"
        ),
        React.createElement("input", {
          className: "contact_input",
          type: "text",
          required: true,
          onChange: (event) => {
            this.setState({ reason: event.target.value });
          },
        }),
        React.createElement(
          "span",
          { className: "home_pressent anime-text" },
          "Email*"
        ),
        React.createElement("input", {
          className: "contact_input",
          type: "email",
          required: true,
          onChange: (event) => {
            this.setState({ email: event.target.value });
          },
        }),
        React.createElement(
          "span",
          { className: "home_pressent anime-text" },
          "Telemóvel (Opcional)"
        ),
        React.createElement("input", {
          className: "contact_input",
          type: "number",
          onChange: (event) => {
            this.setState({ tele: event.target.value });
          },
        }),
        React.createElement(
          "span",
          { className: "home_pressent anime-text" },
          "Informação"
        ),
        React.createElement("textarea", {
          className: "contact_input",
          type: "text",
          required: true,
          onChange: (event) => {
            this.setState({ info: event.target.value });
          },
        }),
        React.createElement(
          "span",
          { className: "anime-text" },
          "*Obrigatório"
        ),
        React.createElement("input", {
          className: "contact_button home_button anime-text",
          type: "submit",
          value: "Enviar",
        })
      )
    );
  }
}

const domContainer = document.getElementById("contact");
ReactDOM.render(form(NameForm), domContainer);
