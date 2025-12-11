const Services = () => {
    return (
        <div className="services pageWidth">
            <h2 className="text-center text-2xl font-semibold pb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="productsBoxItem">
                    <div className="productsBoxItemSmall">
                        <h4>Voice</h4>
                    </div>
                </div>
                <div className="productsBoxItem">
                    <div className="productsBoxItemSmall">
                        <h4>Messaging</h4>
                    </div>
                </div>
                <div className="productsBoxItem">
                    <div className="productsBoxItemSmall">
                        <h4>Platform</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services