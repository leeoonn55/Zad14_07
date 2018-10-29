var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            <form className={'contactform form-group'}>
                <label htmlFor={'name'}>Imię: </label>
                <input className={'form-control'} type={'text'} id={'name'} placeholder={'Imię'} value={this.props.contact.firstName}></input>
                <label htmlFor={'surname'}> Nazwisko: </label>
                <input className={'form-control'} type={'text'} id={'surname'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
                <label htmlFor={'email'}>Email:</label>
                <input className={'form-control'} type={'text'} id={'email'} placeholder={'e-mail'} value={this.props.contact.email}></input>
                <button type={'submit'} className={'btn btn-success'}>Dodaj kontakt</button>
            </form>
        );
    }
})

