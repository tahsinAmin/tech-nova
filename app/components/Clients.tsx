const Clients = () => {
    return (
        <div className="clients container mx-auto">
            <ul id="cards">
                <li className="card" id="card1">
                    <div className="card-body">
                        <h2>Our Clients</h2>
                    </div>
                </li>
                <li className="card" id="card2">
                    <div className="card-body">
                        <div className="user-info flex gap-6 items-center">
                            <img height={50} width={50} src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                            <div>
                                <h3>Larry Green / Intex Group</h3>
                            </div>
                        </div>
                        <p className="description">"Novastack is a team of experts who work for results. Processes are clearly leaid out, recruiters took all my comments into account. High level of immersion in the client and business objectives."</p>
                    </div>
                </li>
                <li className="card" id="card3">
                <div className="card-body">
                        <div className="user-info flex gap-6 items-center">
                            <img height={50} width={50} src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                            <div>
                                <h3>Larry Green / Intex Group</h3>
                            </div>
                        </div>
                        <p className="description">"Novastack is a team of experts who work for results. Processes are clearly leaid out, recruiters took all my comments into account. High level of immersion in the client and business objectives."</p>
                    </div>
                </li>
                <li className="card" id="card4">
                <div className="card-body">
                        <div className="user-info flex gap-6 items-center">
                            <img height={50} width={50} src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                            <div>
                                <h3>Larry Green / Intex Group</h3>
                            </div>
                        </div>
                        <p className="description">"Novastack is a team of experts who work for results. Processes are clearly leaid out, recruiters took all my comments into account. High level of immersion in the client and business objectives."</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Clients