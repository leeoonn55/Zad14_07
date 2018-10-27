var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', { className: 'contactForm form-group' },
                React.createElement('label', { htmlFor: 'name' }, 'Imię: '),
                React.createElement('input', {
                    className: 'form-control',
                    type: 'text',
                    placeholder: 'Imię',
                    value: this.props.contact.firstName,
                }),
                React.createElement('label', { htmlFor: 'surname' }, 'Nazwisko: '),
                React.createElement('input', {
                    className: 'form-control',
                    type: 'text',
                    placeholder: 'Nazwisko',
                    value: this.props.contact.lastName,
                }),
                React.createElement('label', { htmlFor: 'email' }, "e-mail: "),
                React.createElement('input', {
                    className: 'form-control',
                    type: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                }),
                React.createElement('button', { type: 'submit', className: 'btn btn-success' }, 'Dodaj kontakt')
            )
        );
    }
})

