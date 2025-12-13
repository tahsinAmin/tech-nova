export const Mission = () => {
    const data = {
        'info': [
            {
                'id': 1,
                'title': 'Our Vision',
                'description': 'We create opportunities for people in south east Melbourne to live their healthiest lives.'
            },
            {
                'id': 2,
                'title': 'Our Purpose',
                'description': 'We foster and support a more equitable, person-centred and seamless health system to positively impact the health outcomes for south east Melbourne communities.'
            },
            {
                'id': 3,
                'title': 'Our Values',
                'description': 'Our values are at the heart of our work. They shape what we do and how we do it. Our values are: Community, Collaboration, Accountability, Respect, Excellence and Solution focused.'
            }
        ]
    }
    return (
        <div className="mission pt-[12vh] container">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="block sm:flex-1 border-2 border-black rounded-xl h-44 sm:h-86 p-3 sm:p-6">
                    <h3 className="pb-2">{data.info[0].title}</h3>
                    <p>{data.info[0].description}</p>
                </div>
                <div className="block sm:flex-1 border-2 border-black rounded-xl h-44 sm:h-96 p-3 sm:p-6">
                    <h3 className="pb-2">{data.info[1].title}</h3>
                    <p>{data.info[1].description}</p>
                </div>
                <div className="block sm:flex-1 border-2 border-black rounded-xl h-44 sm:h-86 p-3 sm:p-6">
                    <h3 className="pb-2">{data.info[2].title}</h3>
                    <p>{data.info[2].description}</p>
                </div>
            </div>
        </div>
    )
}
