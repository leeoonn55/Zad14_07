var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', { className: 'contact_item clearfix row' },
                React.createElement('figure', { className: 'col-12 col-sm-5 col-md-3 col-lg-3 col-xl-3' },
                    // React.createElement('img', { className: 'contact_image', src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico' })
                    React.createElement('img', { className: 'contact_image', src: 'img/cont.png' })
                ),
                React.createElement('div', { className: 'col-12 col-sm-7 col-md-9 col-lg-9 col-xl-9' },
                    React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
                    React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
                    React.createElement('p', { className: 'contactEmail', href: 'mailto:' + this.props.item.email }, 'Email: ' + this.props.item.email)
                )
            )
        );
    }
});


