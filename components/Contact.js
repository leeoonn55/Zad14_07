var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            <div className={'contact_item clearfix row'}>
                <figure className={'col-12 col-sm-5 col-md-3 col-lg-3 col-xl-3'}>
                    <img className={'contact_image'} src={'img/cont.png'}></img>
                </figure>
                <div className={'col-12 col-sm-7 col-md-9 col-lg-9 col-xl-9'}>
                    <p className={'contact_label'}>Imię: {this.props.item.firstName}</p>
                    <p className={'contact_label'}>Nazwisko: {this.props.item.lastName}</p>
                    <p className={'contact_email'}
                        href={'mailto' + this.props.item.email}>Email: {this.props.item.email}
                    </p>
                </div>
            </div>

        );
    }
});



